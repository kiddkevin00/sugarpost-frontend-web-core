// Set Node environment default to "test".
process.env.NODE_ENV = process.env.NODE_ENV || 'test';

require('babel-register');

const jsDomWrapper = require('jsdom');
const chai = require('chai');
const sinon = require('sinon'); // eslint-disable-line newline-after-var
require('sinon-as-promised');
const sinonChai = require('sinon-chai');
const chaiAsPromised = require('chai-as-promised');
const chaiShallowDeepEqual = require('chai-shallow-deep-equal');

global.document = jsDomWrapper.jsdom('');
global.window = document.defaultView;

Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js',
};

chai.use(sinonChai);
chai.use(chaiAsPromised);
chai.use(chaiShallowDeepEqual);

global.expect = chai.expect;
global.spy = sinon.spy;
global.stub = sinon.stub;
global.mock = sinon.mock;
global.match = sinon.match;
