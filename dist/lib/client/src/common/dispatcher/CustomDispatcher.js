'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AppDispatcher = require('./AppDispatcher');

var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CustomDispatcher = Object.assign({}, _AppDispatcher2.default.prototype, {
  /**
   * A bridge function between the views and the dispatcher, marking the action
   * as a view action.  Another variant here could be `handleServerAction` method.
   *
   * @param {Object} action - the data coming from the view.
   */
  handleViewAction: function handleViewAction(action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });
  },
  handleServerAction: function handleServerAction(action) {
    this.dispatch({
      source: 'SERVER_ACTION',
      action: action
    });
  }
});

exports.default = CustomDispatcher;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY2xpZW50L3NyYy9jb21tb24vZGlzcGF0Y2hlci9DdXN0b21EaXNwYXRjaGVyLmpzIl0sIm5hbWVzIjpbIkN1c3RvbURpc3BhdGNoZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJoYW5kbGVWaWV3QWN0aW9uIiwiYWN0aW9uIiwiZGlzcGF0Y2giLCJzb3VyY2UiLCJoYW5kbGVTZXJ2ZXJBY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7QUFFQSxJQUFNQSxtQkFBbUJDLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLHdCQUFXQyxTQUE3QixFQUF3QztBQUMvRDs7Ozs7O0FBTUFDLGtCQVArRCw0QkFPOUNDLE1BUDhDLEVBT3RDO0FBQ3ZCLFNBQUtDLFFBQUwsQ0FBYztBQUNaQyxjQUFRLGFBREk7QUFFWkYsY0FBUUE7QUFGSSxLQUFkO0FBSUQsR0FaOEQ7QUFjL0RHLG9CQWQrRCw4QkFjNUNILE1BZDRDLEVBY3BDO0FBQ3pCLFNBQUtDLFFBQUwsQ0FBYztBQUNaQyxjQUFRLGVBREk7QUFFWkYsY0FBUUE7QUFGSSxLQUFkO0FBSUQ7QUFuQjhELENBQXhDLENBQXpCOztrQkFzQmVMLGdCIiwiZmlsZSI6IkN1c3RvbURpc3BhdGNoZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGlzcGF0Y2hlciBmcm9tICcuL0FwcERpc3BhdGNoZXInO1xuXG5jb25zdCBDdXN0b21EaXNwYXRjaGVyID0gT2JqZWN0LmFzc2lnbih7fSwgRGlzcGF0Y2hlci5wcm90b3R5cGUsIHtcbiAgLyoqXG4gICAqIEEgYnJpZGdlIGZ1bmN0aW9uIGJldHdlZW4gdGhlIHZpZXdzIGFuZCB0aGUgZGlzcGF0Y2hlciwgbWFya2luZyB0aGUgYWN0aW9uXG4gICAqIGFzIGEgdmlldyBhY3Rpb24uICBBbm90aGVyIHZhcmlhbnQgaGVyZSBjb3VsZCBiZSBgaGFuZGxlU2VydmVyQWN0aW9uYCBtZXRob2QuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gLSB0aGUgZGF0YSBjb21pbmcgZnJvbSB0aGUgdmlldy5cbiAgICovXG4gIGhhbmRsZVZpZXdBY3Rpb24oYWN0aW9uKSB7XG4gICAgdGhpcy5kaXNwYXRjaCh7XG4gICAgICBzb3VyY2U6ICdWSUVXX0FDVElPTicsXG4gICAgICBhY3Rpb246IGFjdGlvblxuICAgIH0pO1xuICB9LFxuXG4gIGhhbmRsZVNlcnZlckFjdGlvbihhY3Rpb24pIHtcbiAgICB0aGlzLmRpc3BhdGNoKHtcbiAgICAgIHNvdXJjZTogJ1NFUlZFUl9BQ1RJT04nLFxuICAgICAgYWN0aW9uOiBhY3Rpb25cbiAgICB9KTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbURpc3BhdGNoZXI7XG4iXX0=
//# sourceMappingURL=CustomDispatcher.js.map
