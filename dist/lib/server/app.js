'use strict';

/**
 * The process of the web application begins here - non-cluster mode.
 */

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV !== 'production') {
  require('babel-register');
}

var setupExpressServer = require('./express-server');
var setupRoutes = require('./routes');
var packageJson = require('../../../package.json');
var express = require('express');
var http = require('http');

var app = express();
var server = http.createServer(app);

// Set default Node environment to "development".


setupExpressServer(app);
setupRoutes(app);

var ip = process.env.IP_ADDRESS || packageJson.config.ip;
var port = process.env.PORT_NUMBER_HTTP || packageJson.config.port;

var webServer = server.listen(port, ip, function () {
  // [TODO] Replace with logger module.
  console.log('Express server listening on port: %d at IP: %s, in %s mode', webServer.address().port, webServer.address().address, app.get('env'));
});

exports.app = app;module.exports = exports = app;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvc2VydmVyL2FwcC5qcyJdLCJuYW1lcyI6WyJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJyZXF1aXJlIiwic2V0dXBFeHByZXNzU2VydmVyIiwic2V0dXBSb3V0ZXMiLCJwYWNrYWdlSnNvbiIsImV4cHJlc3MiLCJodHRwIiwiYXBwIiwic2VydmVyIiwiY3JlYXRlU2VydmVyIiwiaXAiLCJJUF9BRERSRVNTIiwiY29uZmlnIiwicG9ydCIsIlBPUlRfTlVNQkVSX0hUVFAiLCJ3ZWJTZXJ2ZXIiLCJsaXN0ZW4iLCJjb25zb2xlIiwibG9nIiwiYWRkcmVzcyIsImdldCIsImV4cG9ydHMiLCJtb2R1bGUiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFJQUEsUUFBUUMsR0FBUixDQUFZQyxRQUFaLEdBQXVCRixRQUFRQyxHQUFSLENBQVlDLFFBQVosSUFBd0IsYUFBL0M7O0FBRUEsSUFBSUYsUUFBUUMsR0FBUixDQUFZQyxRQUFaLEtBQXlCLFlBQTdCLEVBQTJDO0FBQ3pDQyxVQUFRLGdCQUFSO0FBQ0Q7O0FBRUQsSUFBTUMscUJBQXFCRCxRQUFRLGtCQUFSLENBQTNCO0FBQ0EsSUFBTUUsY0FBY0YsUUFBUSxVQUFSLENBQXBCO0FBQ0EsSUFBTUcsY0FBY0gsUUFBUSx1QkFBUixDQUFwQjtBQUNBLElBQU1JLFVBQVVKLFFBQVEsU0FBUixDQUFoQjtBQUNBLElBQU1LLE9BQU9MLFFBQVEsTUFBUixDQUFiOztBQUVBLElBQU1NLE1BQU1GLFNBQVo7QUFDQSxJQUFNRyxTQUFTRixLQUFLRyxZQUFMLENBQWtCRixHQUFsQixDQUFmOztBQUVBOzs7QUFHQUwsbUJBQW1CSyxHQUFuQjtBQUNBSixZQUFZSSxHQUFaOztBQUVBLElBQU1HLEtBQUtaLFFBQVFDLEdBQVIsQ0FBWVksVUFBWixJQUEwQlAsWUFBWVEsTUFBWixDQUFtQkYsRUFBeEQ7QUFDQSxJQUFNRyxPQUFPZixRQUFRQyxHQUFSLENBQVllLGdCQUFaLElBQWdDVixZQUFZUSxNQUFaLENBQW1CQyxJQUFoRTs7QUFFQSxJQUFNRSxZQUFZUCxPQUFPUSxNQUFQLENBQWNILElBQWQsRUFBb0JILEVBQXBCLEVBQXdCLFlBQU07QUFDOUM7QUFDQU8sVUFBUUMsR0FBUixDQUFZLDREQUFaLEVBQ0VILFVBQVVJLE9BQVYsR0FBb0JOLElBRHRCLEVBRUVFLFVBQVVJLE9BQVYsR0FBb0JBLE9BRnRCLEVBRStCWixJQUFJYSxHQUFKLENBQVEsS0FBUixDQUYvQjtBQUdELENBTGlCLENBQWxCOztBQU9BQyxRQUFRZCxHQUFSLEdBQWNBLEdBQWQsQ0FBa0JlLE9BQU9ELE9BQVAsR0FBaUJBLFVBQVVkLEdBQTNCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhlIHByb2Nlc3Mgb2YgdGhlIHdlYiBhcHBsaWNhdGlvbiBiZWdpbnMgaGVyZSAtIG5vbi1jbHVzdGVyIG1vZGUuXG4gKi9cblxucHJvY2Vzcy5lbnYuTk9ERV9FTlYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICByZXF1aXJlKCdiYWJlbC1yZWdpc3RlcicpO1xufVxuXG5jb25zdCBzZXR1cEV4cHJlc3NTZXJ2ZXIgPSByZXF1aXJlKCcuL2V4cHJlc3Mtc2VydmVyJyk7XG5jb25zdCBzZXR1cFJvdXRlcyA9IHJlcXVpcmUoJy4vcm91dGVzJyk7XG5jb25zdCBwYWNrYWdlSnNvbiA9IHJlcXVpcmUoJy4uLy4uLy4uL3BhY2thZ2UuanNvbicpO1xuY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcbmNvbnN0IGh0dHAgPSByZXF1aXJlKCdodHRwJyk7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcbmNvbnN0IHNlcnZlciA9IGh0dHAuY3JlYXRlU2VydmVyKGFwcCk7XG5cbi8vIFNldCBkZWZhdWx0IE5vZGUgZW52aXJvbm1lbnQgdG8gXCJkZXZlbG9wbWVudFwiLlxuXG5cbnNldHVwRXhwcmVzc1NlcnZlcihhcHApO1xuc2V0dXBSb3V0ZXMoYXBwKTtcblxuY29uc3QgaXAgPSBwcm9jZXNzLmVudi5JUF9BRERSRVNTIHx8IHBhY2thZ2VKc29uLmNvbmZpZy5pcDtcbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUX05VTUJFUl9IVFRQIHx8IHBhY2thZ2VKc29uLmNvbmZpZy5wb3J0O1xuXG5jb25zdCB3ZWJTZXJ2ZXIgPSBzZXJ2ZXIubGlzdGVuKHBvcnQsIGlwLCAoKSA9PiB7XG4gIC8vIFtUT0RPXSBSZXBsYWNlIHdpdGggbG9nZ2VyIG1vZHVsZS5cbiAgY29uc29sZS5sb2coJ0V4cHJlc3Mgc2VydmVyIGxpc3RlbmluZyBvbiBwb3J0OiAlZCBhdCBJUDogJXMsIGluICVzIG1vZGUnLFxuICAgIHdlYlNlcnZlci5hZGRyZXNzKCkucG9ydCxcbiAgICB3ZWJTZXJ2ZXIuYWRkcmVzcygpLmFkZHJlc3MsIGFwcC5nZXQoJ2VudicpKTtcbn0pO1xuXG5leHBvcnRzLmFwcCA9IGFwcDttb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBhcHA7XG4iXX0=
//# sourceMappingURL=app.js.map
