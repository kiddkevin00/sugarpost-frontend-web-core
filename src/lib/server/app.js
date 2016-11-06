/**
 * The process of the web application begins here - non-cluster mode.
 */

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV !== 'production') {
  require('babel-register');
}

const setupExpressServer = require('./express-server');
const setupRoutes = require('./routes');
const packageJson = require('../../../package.json');
const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

// Set default Node environment to "development".


setupExpressServer(app);
setupRoutes(app);

const ip = process.env.IP_ADDRESS || packageJson.config.ip;
const port = process.env.PORT || process.env.PORT_NUMBER_HTTP || packageJson.config.port;

const webServer = server.listen(port, ip, () => {
  // [TODO] Replace with logger module.
  console.log('Express server listening on port: %d at IP: %s, in %s mode',
    webServer.address().port,
    webServer.address().address, app.get('env'));
});

exports.app = app;module.exports = exports = app;
