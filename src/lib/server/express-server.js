const constants = require('../client/src/common/constants/');
const express = require('express');
const cors = require('cors');
const favicon = require('serve-favicon');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const compression = require('compression');
const path = require('path');
const fs = require('fs');

function setupExpressServer(app) {
  const env = app.get('env'); // Same as `process.env.NODE_ENV`.

  if (env === 'production' || env === 'test') {
    app.use((req, res, next) => {
      if (req.headers['x-forwarded-proto'] && req.headers['x-forwarded-proto'] !== 'https') {
        return res.redirect(constants.SYSTEM.HTTP_STATUS_CODES.PERMANENT_REDIRECT, `https://${req.headers.host}${req.url}`);
      }
      return next();
    });
  }

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(bodyParser.json({
    type: 'application/vnd.api+json', // Parses "application/vnd.api+json" content-type as json.
  }));

  app.use(methodOverride()); // Simulates DELETE and PUT methods if browser doesn't support.
  app.use(cookieParser());
  app.use(compression());
  app.use(favicon(path.resolve(__dirname, '../client/static/', 'favicon.png')));

  // For 404 error and server-side rendering pages only.
  app.set('views', path.resolve(__dirname, 'views/'));
  app.set('view engine', 'jade');

  if (env === 'production' || env === 'test') {
    // Here are all the minified version of all JS and CSS files.
    app.use(express.static(path.resolve(__dirname, '../../../', 'dist/'), {
      etag: true,
      setHeaders(res, filePath) {
        if (filePath.indexOf('.js') >= -1) {
          res.append('Cache-Control', 'private, max-age=31536000'); // Set for one year
        } else if (filePath.indexOf('.css') > -1) {
          res.append('Cache-Control', 'public, max-age=31536000'); // Set for one year
        } else {
          res.append('Cache-Control', 'public, max-age=86400'); // Set for one day
        }
      },
    }));

    const accessLogStream = fs.createWriteStream(path.resolve(__dirname, '../../../', 'morgan.log'),
      { flags: 'a' });

    app.use(morgan('combined', { stream: accessLogStream }));
    app.use(morgan('dev'));
  } else {
    /*
     * [Note] Install Chrome extension LiveReload instead of adding live-reloaded script to the
     * response, implemented as the following:
     * ```
     * app.use(require('connect-livereload')());
     * ```
     *
     * For more information:
     * - https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei
     */

    // Here are all the original version of JS and CSS files.
    app.use(express.static(path.resolve(__dirname, '../client/', 'static/'), {
      etag: true,
      setHeaders(res, filepPath) {
        res.append('Cache-Control', 'no-store');
      },
    }));

    app.use(morgan('dev'));
  }
}

module.exports = exports = setupExpressServer;
