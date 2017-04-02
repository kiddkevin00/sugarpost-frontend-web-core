const routes = require('../client/src/app/routes');
const packageJson = require('../../../package.json');
const Router = require('react-router');
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const path = require('path');

const serverStartTimestamp = new Date();
const containerId = process.env.HOSTNAME;

function setupRoutes(app) {
  app.get('/ping', (req, res) => res.json({
    uptimeInSec: ((new Date()).getTime() - serverStartTimestamp.getTime()) / 1000,
    hostname: containerId || 'N/A',
  }));
  // [TODO]
  app.get('/health', (req, res) => res.json({
    version: packageJson.version,
    self: {
      name: 'bulletin-board-system-frontend',
      version: packageJson.version,
      status: 200,
      dateStamp: (new Date()).toString(),
      hostname: 'host 2',
    },
    dependencies: {
      http: [
        {
          name: 'bulletin-board-system-backend',
          version: 1,
          status: 200,
          dateStamp: (new Date()).toString(),
          hostname: 'host 1',
          uptime: 123,
        },
      ],
    },
  }));

  //app.use('/auth', require('./auth'));

  // All not-found API endpoints should return an custom 404 page.
  app.route('/:url(app|assets)/*')
    .get((req, res) => res.render('404', (err) => {
      if (err) {
        return res.status(404)
          .json(err);
      }
      return res.status(404)
        .render('404');
    }));

  // All other endpoints should redirect to the index.html.
  app.route('/*')
    .get((req, res) => {
      /*
       * [Note] Server-side rendering - normal version, implemented as the following:
       * ```
       * const MyComponent =
       *   React.createFactory(require('../client/src/app/memo/components/MemoApp.js'));
       * const markup = ReactDOMServer.renderToString( MyComponent() );
       * res.render('index', { markup });
       * ```
       */
      ///Server-side rendering - React Router version, implemented as the following:
      //const router = Router.createRoutes({ routes, location: req.url });
      //
      //router.render((Handler, state) => {
      //  console.log('SSR:', _.has(req, 'session.userID'));
      //
      //  const markup =
      //    ReactDOMServer.renderToString(<Handler isLoggedIn={ _.has(req, 'session.userID') } />);
      //  res.cookie('login_tmp', _.has(req, 'session.userID') ? 'yes' : 'no');
      //  res.render('index', { markup });
      //});

      /*
       * [Note] Client-side Rendering, implemented as the following:
       * ```
       * res.sendFile(path.resolve(config.get('root'), 'client/static', 'index2.html'));
       * ```
       */
      const env = app.get('env'); // Same as `process.env.NODE_ENV`.

      if (env === 'production') {
        res.sendFile(path.resolve(__dirname, '../../../dist/', 'index2.html'), {
          headers: { 'Cache-Control': 'no-cache' },
        });
      } else {
        res.sendFile(path.resolve(__dirname, '../client/static/', 'index2.html'), {
          headers: { 'Cache-Control': 'no-store' },
        });
      }

    });
}

module.exports = exports = setupRoutes;
