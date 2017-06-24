const prodCredential = require('./production');
const testCredential = require('./test');
const devCredential = require('./development');


const env = typeof window === 'undefined' ? process.env.NODE_ENV : window.process.env.NODE_ENV;
let credential;

switch (env) {
  case 'production':
    credential = prodCredential;
    break;
  case 'staging':
    credential = testCredential;
    break;
  default:
    credential = devCredential;
    break;
}

module.exports = exports = credential;
