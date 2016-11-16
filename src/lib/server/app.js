/**
 * The process of the web application begins here - non-cluster mode.
 */

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV !== 'production') {
  require('babel-register'); // eslint-disable-line global-require
}

const setupExpressServer = require('./express-server');
const setupRoutes = require('./routes');
const packageJson = require('../../../package.json');
const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

setupExpressServer(app);
setupRoutes(app);

const ip = process.env.IP || packageJson.config.ip;
const port = process.env.PORT || packageJson.config.port;

const webServer = server.listen(port, ip, () => {
  // [TODO] Replaces `console.log()` with a logger module.
  console.log('Express server listening on port: %d at IP: %s, in %s mode.',
    webServer.address().port,
    webServer.address().address, app.get('env'));
});

// [TODO] Cleans up whenever the app crashes.
process.on('uncaughtException', () => {

});
// [TODO] Cleans up whenever getting a default kill signal.
process.on('SIGTERM', () => {

});

module.exports = exports = app;
