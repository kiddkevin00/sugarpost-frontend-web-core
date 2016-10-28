/**
 * The process of the web application begins here - non-cluster mode.
 */

require('babel-register');

const setupExpressServer = require('./express-server');
const setupRoutes = require('./routes.jsx');
const packageJson = require('../../../package.json');
const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

// Set default Node environment to "development".
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

setupExpressServer(app);
setupRoutes(app);

const webServer = server.listen(packageJson.config.port, packageJson.config.ip, () => {
  // [TODO] Replace with logger module.
  console.log('Express server listening on port: %d at IP: %s, in %s mode',
    webServer.address().port,
    webServer.address().address, app.get('env'));
});

exports.app = app;module.exports = exports = app;
