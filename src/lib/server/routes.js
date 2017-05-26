const React = require('react');
const configureStore = require('../client/src/common/store');
const { routes } = require('../client/src/app/routes');
const constants = require('../client/src/common/constants/');
const packageJson = require('../../../package.json');
const { StaticRouter } = require('react-router');
const { Provider } = require('react-redux');
const { renderToString } = require('react-dom/server');
const errorHandler = require('errorhandler');

const serverStartTimestamp = new Date();
const containerId = process.env.HOSTNAME;

function setupRoutes(app) {
  app.get('/ping', (req, res) => res.json({
    uptimeInSec: ((new Date()).getTime() - serverStartTimestamp.getTime()) / 1000,
    hostname: containerId || 'N/A',
  }));
  app.get('/health', (req, res) => res.json({
    version: packageJson.version,
    self: {
      name: packageJson.name,
      version: packageJson.version,
      status: constants.SYSTEM.HTTP_STATUS_CODES.OK,
      serverDateStamp: (new Date()).toString(),
      hostname: containerId,
    },
    dependencies: {
      http: [
        {
          name: constants.SYSTEM.SOURCES.SUGARPOST_BACKEND_CORE,
          version: '1.x',
        },
      ],
    },
  }));

  // All not-found API endpoints should return an custom 404 page.
  app.route('/:url(app|assets)/*')
    .get((req, res) => res.render('404', (err) => {
      if (err) {
        return res.status(constants.SYSTEM.HTTP_STATUS_CODES.NOT_FOUND)
          .json(err);
      }
      return res.status(constants.SYSTEM.HTTP_STATUS_CODES.NOT_FOUND)
        .render('404');
    }));

  // All other endpoints should redirect to the index.html.
  app.use((req, res) => {
    const context = {};
    const store = configureStore();
    const env = app.get('env'); // Same as `process.env.NODE_ENV`.
    const markup = renderToString(
      React.createElement(Provider, { store },
        React.createElement(StaticRouter, { location: req.url, context }, routes)
      )
    );

    if (context.url) {
      return res.redirect(constants.SYSTEM.HTTP_STATUS_CODES.FOUND, context.url);
    }

    const globalConstants = {
      env,
      markup,
      version: packageJson.version,
      stripePublicKey: constants.CREDENTIAL.STRIPE.PUBLIC_KEY,
      gaTrackingId: constants.CREDENTIAL.GOOGLE_ANALYTICS.TRACKING_ID,
    };
    let headers;

    if (env === 'production') {
      headers = { 'Cache-Control': 'no-cache' };
    } else {
      headers = { 'Cache-Control': 'no-store' };
    }
    res.set(headers);

    return res.render('index', globalConstants);
  });

  if (app.get('env') !== 'production') {
    app.use(errorHandler()); // Error handler - has to be the last.
  }
}

module.exports = exports = setupRoutes;
