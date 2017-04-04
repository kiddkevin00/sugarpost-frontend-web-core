const prodCredential = require('./production');
const testCredential = require('./test');
const devCredential = require('./development');

function getCredential() {
  let credential;

  switch (window.location.hostname) {
    case '127.0.0.1':
    case 'localhost':
    case '0.0.0.0':
      credential = devCredential;
      break;
    case 'mysugarpost-staging.herokuapp.com':
      credential = testCredential;
      break;
    default:
      credential = prodCredential;
      break;
  }

  return credential;
}

module.exports = exports = getCredential;
