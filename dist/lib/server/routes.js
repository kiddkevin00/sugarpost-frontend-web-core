'use strict';

var routes = require('../client/src/app/routes');
var ReactDOMServer = require('react-dom/server');
var React = require('react');
var Router = require('react-router');
var path = require('path');

function setupRoutes(app) {
  // [TODO]
  app.get('/ping', function (req, res) {
    res.send('OK');
  });
  app.get('/health', function (req, res) {});

  //app.use('/auth', require('./auth'));

  // All not-found API endpoints should return an custom 404 page.
  app.route('/:url(app|assets)/*').get(function (req, res) {
    return res.render('404', function (err) {
      if (err) {
        return res.status(404).json(err);
      }
      return res.status(404).render('404');
    });
  });

  // All other endpoints should redirect to the index.html.
  app.route('/*').get(function (req, res) {
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
    var env = app.get('env'); // Same as `process.env.NODE_ENV`.

    if (env === 'production') {
      res.sendFile(path.resolve(__dirname, '../../../dist', 'index2.html'));
    } else {
      res.sendFile(path.resolve(__dirname, '../client/static', 'index2.html'));
    }
  });
}

module.exports = exports = setupRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvc2VydmVyL3JvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiUmVhY3RET01TZXJ2ZXIiLCJSZWFjdCIsIlJvdXRlciIsInBhdGgiLCJzZXR1cFJvdXRlcyIsImFwcCIsImdldCIsInJlcSIsInJlcyIsInNlbmQiLCJyb3V0ZSIsInJlbmRlciIsImVyciIsInN0YXR1cyIsImpzb24iLCJlbnYiLCJzZW5kRmlsZSIsInJlc29sdmUiLCJfX2Rpcm5hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLFNBQVNDLFFBQVEsMEJBQVIsQ0FBZjtBQUNBLElBQU1DLGlCQUFpQkQsUUFBUSxrQkFBUixDQUF2QjtBQUNBLElBQU1FLFFBQVFGLFFBQVEsT0FBUixDQUFkO0FBQ0EsSUFBTUcsU0FBU0gsUUFBUSxjQUFSLENBQWY7QUFDQSxJQUFNSSxPQUFPSixRQUFRLE1BQVIsQ0FBYjs7QUFFQSxTQUFTSyxXQUFULENBQXFCQyxHQUFyQixFQUEwQjtBQUN4QjtBQUNBQSxNQUFJQyxHQUFKLENBQVEsT0FBUixFQUFpQixVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUFFQSxRQUFJQyxJQUFKLENBQVMsSUFBVDtBQUFpQixHQUFsRDtBQUNBSixNQUFJQyxHQUFKLENBQVEsU0FBUixFQUFtQixVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYyxDQUFFLENBQW5DOztBQUVBOztBQUVBO0FBQ0FILE1BQUlLLEtBQUosQ0FBVSxxQkFBVixFQUNHSixHQURILENBQ08sVUFBQ0MsR0FBRCxFQUFNQyxHQUFOO0FBQUEsV0FBY0EsSUFBSUcsTUFBSixDQUFXLEtBQVgsRUFBa0IsVUFBQ0MsR0FBRCxFQUFTO0FBQzVDLFVBQUlBLEdBQUosRUFBUztBQUNQLGVBQU9KLElBQUlLLE1BQUosQ0FBVyxHQUFYLEVBQ0pDLElBREksQ0FDQ0YsR0FERCxDQUFQO0FBRUQ7QUFDRCxhQUFPSixJQUFJSyxNQUFKLENBQVcsR0FBWCxFQUNKRixNQURJLENBQ0csS0FESCxDQUFQO0FBRUQsS0FQa0IsQ0FBZDtBQUFBLEdBRFA7O0FBVUE7QUFDQU4sTUFBSUssS0FBSixDQUFVLElBQVYsRUFDR0osR0FESCxDQUNPLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQ2pCOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7QUFNQSxRQUFNTyxNQUFNVixJQUFJQyxHQUFKLENBQVEsS0FBUixDQUFaLENBNUJpQixDQTRCVzs7QUFFNUIsUUFBSVMsUUFBUSxZQUFaLEVBQTBCO0FBQ3hCUCxVQUFJUSxRQUFKLENBQWFiLEtBQUtjLE9BQUwsQ0FBYUMsU0FBYixFQUF3QixlQUF4QixFQUF5QyxhQUF6QyxDQUFiO0FBQ0QsS0FGRCxNQUVPO0FBQ0xWLFVBQUlRLFFBQUosQ0FBYWIsS0FBS2MsT0FBTCxDQUFhQyxTQUFiLEVBQXdCLGtCQUF4QixFQUE0QyxhQUE1QyxDQUFiO0FBQ0Q7QUFFRixHQXJDSDtBQXNDRDs7QUFFREMsT0FBT0MsT0FBUCxHQUFpQkEsVUFBVWhCLFdBQTNCIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoJy4uL2NsaWVudC9zcmMvYXBwL3JvdXRlcycpO1xuY29uc3QgUmVhY3RET01TZXJ2ZXIgPSByZXF1aXJlKCdyZWFjdC1kb20vc2VydmVyJyk7XG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBSb3V0ZXIgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5cbmZ1bmN0aW9uIHNldHVwUm91dGVzKGFwcCkge1xuICAvLyBbVE9ET11cbiAgYXBwLmdldCgnL3BpbmcnLCAocmVxLCByZXMpID0+IHsgcmVzLnNlbmQoJ09LJyk7IH0pO1xuICBhcHAuZ2V0KCcvaGVhbHRoJywgKHJlcSwgcmVzKSA9PiB7fSk7XG5cbiAgLy9hcHAudXNlKCcvYXV0aCcsIHJlcXVpcmUoJy4vYXV0aCcpKTtcblxuICAvLyBBbGwgbm90LWZvdW5kIEFQSSBlbmRwb2ludHMgc2hvdWxkIHJldHVybiBhbiBjdXN0b20gNDA0IHBhZ2UuXG4gIGFwcC5yb3V0ZSgnLzp1cmwoYXBwfGFzc2V0cykvKicpXG4gICAgLmdldCgocmVxLCByZXMpID0+IHJlcy5yZW5kZXIoJzQwNCcsIChlcnIpID0+IHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KVxuICAgICAgICAgIC5qc29uKGVycik7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpXG4gICAgICAgIC5yZW5kZXIoJzQwNCcpO1xuICAgIH0pKTtcblxuICAvLyBBbGwgb3RoZXIgZW5kcG9pbnRzIHNob3VsZCByZWRpcmVjdCB0byB0aGUgaW5kZXguaHRtbC5cbiAgYXBwLnJvdXRlKCcvKicpXG4gICAgLmdldCgocmVxLCByZXMpID0+IHtcbiAgICAgIC8qXG4gICAgICAgKiBbTm90ZV0gU2VydmVyLXNpZGUgcmVuZGVyaW5nIC0gbm9ybWFsIHZlcnNpb24sIGltcGxlbWVudGVkIGFzIHRoZSBmb2xsb3dpbmc6XG4gICAgICAgKiBgYGBcbiAgICAgICAqIGNvbnN0IE15Q29tcG9uZW50ID1cbiAgICAgICAqICAgUmVhY3QuY3JlYXRlRmFjdG9yeShyZXF1aXJlKCcuLi9jbGllbnQvc3JjL2FwcC9tZW1vL2NvbXBvbmVudHMvTWVtb0FwcC5qcycpKTtcbiAgICAgICAqIGNvbnN0IG1hcmt1cCA9IFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RyaW5nKCBNeUNvbXBvbmVudCgpICk7XG4gICAgICAgKiByZXMucmVuZGVyKCdpbmRleCcsIHsgbWFya3VwIH0pO1xuICAgICAgICogYGBgXG4gICAgICAgKi9cbiAgICAgIC8vL1NlcnZlci1zaWRlIHJlbmRlcmluZyAtIFJlYWN0IFJvdXRlciB2ZXJzaW9uLCBpbXBsZW1lbnRlZCBhcyB0aGUgZm9sbG93aW5nOlxuICAgICAgLy9jb25zdCByb3V0ZXIgPSBSb3V0ZXIuY3JlYXRlUm91dGVzKHsgcm91dGVzLCBsb2NhdGlvbjogcmVxLnVybCB9KTtcbiAgICAgIC8vXG4gICAgICAvL3JvdXRlci5yZW5kZXIoKEhhbmRsZXIsIHN0YXRlKSA9PiB7XG4gICAgICAvLyAgY29uc29sZS5sb2coJ1NTUjonLCBfLmhhcyhyZXEsICdzZXNzaW9uLnVzZXJJRCcpKTtcbiAgICAgIC8vXG4gICAgICAvLyAgY29uc3QgbWFya3VwID1cbiAgICAgIC8vICAgIFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RyaW5nKDxIYW5kbGVyIGlzTG9nZ2VkSW49eyBfLmhhcyhyZXEsICdzZXNzaW9uLnVzZXJJRCcpIH0gLz4pO1xuICAgICAgLy8gIHJlcy5jb29raWUoJ2xvZ2luX3RtcCcsIF8uaGFzKHJlcSwgJ3Nlc3Npb24udXNlcklEJykgPyAneWVzJyA6ICdubycpO1xuICAgICAgLy8gIHJlcy5yZW5kZXIoJ2luZGV4JywgeyBtYXJrdXAgfSk7XG4gICAgICAvL30pO1xuXG4gICAgICAvKlxuICAgICAgICogW05vdGVdIENsaWVudC1zaWRlIFJlbmRlcmluZywgaW1wbGVtZW50ZWQgYXMgdGhlIGZvbGxvd2luZzpcbiAgICAgICAqIGBgYFxuICAgICAgICogcmVzLnNlbmRGaWxlKHBhdGgucmVzb2x2ZShjb25maWcuZ2V0KCdyb290JyksICdjbGllbnQvc3RhdGljJywgJ2luZGV4Mi5odG1sJykpO1xuICAgICAgICogYGBgXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IGVudiA9IGFwcC5nZXQoJ2VudicpOyAvLyBTYW1lIGFzIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAuXG5cbiAgICAgIGlmIChlbnYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICByZXMuc2VuZEZpbGUocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uLy4uLy4uL2Rpc3QnLCAnaW5kZXgyLmh0bWwnKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXMuc2VuZEZpbGUocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uL2NsaWVudC9zdGF0aWMnLCAnaW5kZXgyLmh0bWwnKSk7XG4gICAgICB9XG5cbiAgICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gc2V0dXBSb3V0ZXM7XG4iXX0=
//# sourceMappingURL=routes.js.map
