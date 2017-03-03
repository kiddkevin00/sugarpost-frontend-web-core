require('babel-register');

const jsDomWrapper = require('jsdom');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

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

global.expect = chai.expect;
global.spy = sinon.spy;
global.stub = sinon.stub;
