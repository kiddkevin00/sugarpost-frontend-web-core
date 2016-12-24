const express = require('express');
const cors = require('cors');
const session = require('express-session');
const favicon = require('serve-favicon');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const compression = require('compression');
const errorHandler = require('errorhandler');
const path = require('path');
const fs = require('fs');

function setupExpressServer(app) {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(bodyParser.json({
    type: 'application/vnd.api+json', // Parses "application/vnd.api+json" content-type as json.
  }));

  app.use(methodOverride()); // Simulates DELETE and PUT methods if browser doesn't support.
  app.use(cookieParser());

  app.use(compression());

  app.use(cors());

  // [TODO] Uses JWT instead of session.
  app.use(session({
    secret: 'SESSION_SECRET', // [TODO]
    path: '/',
    httpOnly: false,
    secure: false, // HTTPS-enabled website required.
    maxAge: 1000 * 60 * 60 * 8, // [TBD] Set 8 Hours for now.
    resave: true, // Forces the session to be saved back to the session store.
    saveUninitialized: false,
  }));

  app.use(favicon(path.resolve(__dirname, '../client/static/', 'favicon.png')));

  // For 404 error and server-side rendering pages only.
  app.set('views', path.resolve(__dirname, 'views/'));
  app.set('view engine', 'jade');

  const env = app.get('env'); // Same as `process.env.NODE_ENV`.

  if (env === 'production') {
    // Here are all the minified version of all JS and CSS files.
    app.use(express.static(path.resolve(__dirname, '../../../', 'dist/'), {
      etag: true,
      maxAge: 86400000, // [TBD] 86400000 (unit: ms) - one day.
    }));

    const accessLogStream = fs.createWriteStream(path.resolve(__dirname, '../../../', 'morgan.log'),
      { flags: 'a' });

    app.use(morgan('combined', { stream: accessLogStream }));
    app.use(morgan('dev'));
  } else {
    // The Node environment variable should be either "test" or "development".

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
      maxAge: 31536000000, // [TBD] one year - unit: millisecond.
      setHeaders(res, filepPath) {
        if (filepPath.indexOf('.css') === -1 && filepPath.indexOf('.js') === -1) {
          res.append('Cache-Control', 'no-cache');
        }
      },
    }));

    app.use(morgan('dev'));
    app.use(errorHandler()); // Error handler - has to be the last.
  }
}

module.exports = exports = setupExpressServer;
