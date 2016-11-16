import { Dispatcher } from 'flux';

const AppDispatcher = new Dispatcher();

export default AppDispatcher;

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
//  /**
//   * Register a Store's callback so that it may be invoked by an action.
//   *
//   * @param  {Function} callback - the callback to be registered
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
