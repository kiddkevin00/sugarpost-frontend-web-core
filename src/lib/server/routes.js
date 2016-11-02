const routes = require('../client/src/app/routes');
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const Router = require('react-router');
const path = require('path');

function setupRoutes(app) {
  // [TODO]
  app.get('/ping', (req, res) => { res.send('OK'); });
  app.get('/health', (req, res) => {});

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
        res.sendFile(path.resolve(__dirname, '../../../dist', 'index2.html'));
      } else {
        res.sendFile(path.resolve(__dirname, '../client/static', 'index2.html'));
      }

    });
}

module.exports = exports = setupRoutes;
