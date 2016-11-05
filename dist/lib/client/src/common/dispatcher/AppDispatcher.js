'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _flux = require('flux');

var AppDispatcher = new _flux.Dispatcher();

exports.default = AppDispatcher;

/*
 * Source code for `require('flux').Dispatcher` is the following:
 */

//var Promise = require('es6-promise').Promise;
//
//var _callbacks = [];
//var _promises = [];
//
//var Dispatcher = function() {};
//Dispatcher.prototype = Object.assign({}, Dispatcher.prototype, {
//
//  /**
//   * Register a Store's callback so that it may be invoked by an action.
//   *
//   * @param  {Function} callback                                              - the callback to be registered
//   * @return {number}   the index of the callback within the _callbacks array
//   */
//  register: function(callback) {
//    _callbacks.push(callback);
//    return _callbacks.length - 1; // index
//  },
//
//  /**
//   * Dispatch an action.
//   *
//   * @param {Object} payload - the data from the action
//   */
//  dispatch: function(payload) {
//    // first create an array of promises for callbacks to reference.
//    var resolves = [];
//    var rejects = [];
//    _promises = _callbacks.map(function(_, i) {
//      return new Promise(function(resolve, reject) {
//        resolves[i] = resolve;
//        rejects[i] = reject;
//      });
//    });
//    // dispatch to callbacks and resolve/reject promises.
//    _callbacks.forEach(function(callback, i) {
//      // `callback` can return an obj, to resolve, or a promise, to chain
//      // check `waitFor()` for why this might be useful
//      Promise.resolve(callback(payload)).then(function() {
//        resolves[i](payload);
//      }, function() {
//        rejects[i](new Error('Dispatcher callback unsuccessful'));
//      });
//    });
//    _promises = [];
//  },
//
//  /**
//   * @param  {Array}    promiseIndexes
//   * @param  {Function} callback
//   */
//  waitFor: function(promiseIndexes, callback) {
//    var selectedPromises = promiseIndexes.map(function(index) {
//      return _promises[index];
//    });
//    return Promise.all(selectedPromises).then(callback);
//  }
//});

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY2xpZW50L3NyYy9jb21tb24vZGlzcGF0Y2hlci9BcHBEaXNwYXRjaGVyLmpzIl0sIm5hbWVzIjpbIkFwcERpc3BhdGNoZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBLElBQU1BLGdCQUFnQixzQkFBdEI7O2tCQUVlQSxhOztBQUVmOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiQXBwRGlzcGF0Y2hlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpc3BhdGNoZXIgfSBmcm9tICdmbHV4JztcblxuY29uc3QgQXBwRGlzcGF0Y2hlciA9IG5ldyBEaXNwYXRjaGVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEFwcERpc3BhdGNoZXI7XG5cbi8qXG4gKiBTb3VyY2UgY29kZSBmb3IgYHJlcXVpcmUoJ2ZsdXgnKS5EaXNwYXRjaGVyYCBpcyB0aGUgZm9sbG93aW5nOlxuICovXG5cbi8vdmFyIFByb21pc2UgPSByZXF1aXJlKCdlczYtcHJvbWlzZScpLlByb21pc2U7XG4vL1xuLy92YXIgX2NhbGxiYWNrcyA9IFtdO1xuLy92YXIgX3Byb21pc2VzID0gW107XG4vL1xuLy92YXIgRGlzcGF0Y2hlciA9IGZ1bmN0aW9uKCkge307XG4vL0Rpc3BhdGNoZXIucHJvdG90eXBlID0gT2JqZWN0LmFzc2lnbih7fSwgRGlzcGF0Y2hlci5wcm90b3R5cGUsIHtcbi8vXG4vLyAgLyoqXG4vLyAgICogUmVnaXN0ZXIgYSBTdG9yZSdzIGNhbGxiYWNrIHNvIHRoYXQgaXQgbWF5IGJlIGludm9rZWQgYnkgYW4gYWN0aW9uLlxuLy8gICAqXG4vLyAgICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gdGhlIGNhbGxiYWNrIHRvIGJlIHJlZ2lzdGVyZWRcbi8vICAgKiBAcmV0dXJuIHtudW1iZXJ9ICAgdGhlIGluZGV4IG9mIHRoZSBjYWxsYmFjayB3aXRoaW4gdGhlIF9jYWxsYmFja3MgYXJyYXlcbi8vICAgKi9cbi8vICByZWdpc3RlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcbi8vICAgIF9jYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4vLyAgICByZXR1cm4gX2NhbGxiYWNrcy5sZW5ndGggLSAxOyAvLyBpbmRleFxuLy8gIH0sXG4vL1xuLy8gIC8qKlxuLy8gICAqIERpc3BhdGNoIGFuIGFjdGlvbi5cbi8vICAgKlxuLy8gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXlsb2FkIC0gdGhlIGRhdGEgZnJvbSB0aGUgYWN0aW9uXG4vLyAgICovXG4vLyAgZGlzcGF0Y2g6IGZ1bmN0aW9uKHBheWxvYWQpIHtcbi8vICAgIC8vIGZpcnN0IGNyZWF0ZSBhbiBhcnJheSBvZiBwcm9taXNlcyBmb3IgY2FsbGJhY2tzIHRvIHJlZmVyZW5jZS5cbi8vICAgIHZhciByZXNvbHZlcyA9IFtdO1xuLy8gICAgdmFyIHJlamVjdHMgPSBbXTtcbi8vICAgIF9wcm9taXNlcyA9IF9jYWxsYmFja3MubWFwKGZ1bmN0aW9uKF8sIGkpIHtcbi8vICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuLy8gICAgICAgIHJlc29sdmVzW2ldID0gcmVzb2x2ZTtcbi8vICAgICAgICByZWplY3RzW2ldID0gcmVqZWN0O1xuLy8gICAgICB9KTtcbi8vICAgIH0pO1xuLy8gICAgLy8gZGlzcGF0Y2ggdG8gY2FsbGJhY2tzIGFuZCByZXNvbHZlL3JlamVjdCBwcm9taXNlcy5cbi8vICAgIF9jYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihjYWxsYmFjaywgaSkge1xuLy8gICAgICAvLyBgY2FsbGJhY2tgIGNhbiByZXR1cm4gYW4gb2JqLCB0byByZXNvbHZlLCBvciBhIHByb21pc2UsIHRvIGNoYWluXG4vLyAgICAgIC8vIGNoZWNrIGB3YWl0Rm9yKClgIGZvciB3aHkgdGhpcyBtaWdodCBiZSB1c2VmdWxcbi8vICAgICAgUHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKHBheWxvYWQpKS50aGVuKGZ1bmN0aW9uKCkge1xuLy8gICAgICAgIHJlc29sdmVzW2ldKHBheWxvYWQpO1xuLy8gICAgICB9LCBmdW5jdGlvbigpIHtcbi8vICAgICAgICByZWplY3RzW2ldKG5ldyBFcnJvcignRGlzcGF0Y2hlciBjYWxsYmFjayB1bnN1Y2Nlc3NmdWwnKSk7XG4vLyAgICAgIH0pO1xuLy8gICAgfSk7XG4vLyAgICBfcHJvbWlzZXMgPSBbXTtcbi8vICB9LFxuLy9cbi8vICAvKipcbi8vICAgKiBAcGFyYW0gIHtBcnJheX0gICAgcHJvbWlzZUluZGV4ZXNcbi8vICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2tcbi8vICAgKi9cbi8vICB3YWl0Rm9yOiBmdW5jdGlvbihwcm9taXNlSW5kZXhlcywgY2FsbGJhY2spIHtcbi8vICAgIHZhciBzZWxlY3RlZFByb21pc2VzID0gcHJvbWlzZUluZGV4ZXMubWFwKGZ1bmN0aW9uKGluZGV4KSB7XG4vLyAgICAgIHJldHVybiBfcHJvbWlzZXNbaW5kZXhdO1xuLy8gICAgfSk7XG4vLyAgICByZXR1cm4gUHJvbWlzZS5hbGwoc2VsZWN0ZWRQcm9taXNlcykudGhlbihjYWxsYmFjayk7XG4vLyAgfVxuLy99KTtcbiJdfQ==
//# sourceMappingURL=AppDispatcher.js.map
