const React = require('react');
const Router = require('react-router');
const routes = require('../client/src/app/routes.jsx');
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
       *    React.createFactory(require('../client/src/app/memo/components/MemoApp.jsx'));
       *  const markup = React.renderToString( MyComponent() );
       *  res.render('index', { markup });
       * ```
       */

      /// [Note] Server-side rendering - React Router version, implemented as the following:
      //const router = Router.createRoutes({ routes, location: req.url });
      //
      //router.render((Handler, state) => {
      //  //console.log('SSR:', _.has(req, 'session.userID'));
      //
      //  const markup = React.renderToString(<Handler isLoggedIn={_.has(req, 'session.userID')}
      // />);  res.cookie('login_tmp', _.has(req, 'session.userID') ? 'yes' : 'no');
      // res.render('index', { markup }); });

      /*
       * [Note] Client-side Rendering, implemented as the following:
       * `res.sendFile(path.resolve(config.get('root'), 'client/static', 'index2.html'));`
       */
      res.sendFile(path.resolve(__dirname, '../client/static', 'index2.html'));
    });
}

module.exports = exports = setupRoutes;
