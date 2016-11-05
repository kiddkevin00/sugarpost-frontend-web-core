'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AppDispatcher = require('../../../../common/dispatcher/AppDispatcher');

var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);

var _memoConstants = require('../constants/memoConstants');

var _memoConstants2 = _interopRequireDefault(_memoConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var memoActionCreator = {
  create: function create(text) {
    _AppDispatcher2.default.dispatch({
      text: text,
      actionType: _memoConstants2.default.TODO_CREATE
    });
  },
  toggleComplete: function toggleComplete(todo) {
    var id = todo.id;
    var isComplete = todo.isComplete;

    _AppDispatcher2.default.dispatch({
      id: id, isComplete: isComplete,
      actionType: _memoConstants2.default.TODO_TOGGLE_COMPLETE
    });
  },
  toggleCompleteAll: function toggleCompleteAll() {
    _AppDispatcher2.default.dispatch({
      actionType: _memoConstants2.default.TODO_TOGGLE_COMPLETE_ALL
    });
  },
  destroy: function destroy(id) {
    _AppDispatcher2.default.dispatch({
      id: id,
      actionType: _memoConstants2.default.TODO_DESTROY
    });
  },
  updateText: function updateText(id, text) {
    _AppDispatcher2.default.dispatch({
      id: id, text: text,
      actionType: _memoConstants2.default.TODO_UPDATE_TEXT
    });
  },
  destroyCompleted: function destroyCompleted() {
    _AppDispatcher2.default.dispatch({
      actionType: _memoConstants2.default.TODO_DESTROY_COMPLETED
    });
  }
};

exports.default = memoActionCreator;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY2xpZW50L3NyYy9hcHAvZGFzaGJvYXJkL21lbW8vYWN0aW9ucy9tZW1vQWN0aW9uQ3JlYXRvci5qcyJdLCJuYW1lcyI6WyJtZW1vQWN0aW9uQ3JlYXRvciIsImNyZWF0ZSIsInRleHQiLCJkaXNwYXRjaCIsImFjdGlvblR5cGUiLCJUT0RPX0NSRUFURSIsInRvZ2dsZUNvbXBsZXRlIiwidG9kbyIsImlkIiwiaXNDb21wbGV0ZSIsIlRPRE9fVE9HR0xFX0NPTVBMRVRFIiwidG9nZ2xlQ29tcGxldGVBbGwiLCJUT0RPX1RPR0dMRV9DT01QTEVURV9BTEwiLCJkZXN0cm95IiwiVE9ET19ERVNUUk9ZIiwidXBkYXRlVGV4dCIsIlRPRE9fVVBEQVRFX1RFWFQiLCJkZXN0cm95Q29tcGxldGVkIiwiVE9ET19ERVNUUk9ZX0NPTVBMRVRFRCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsb0JBQW9CO0FBQ3hCQyxRQUR3QixrQkFDakJDLElBRGlCLEVBQ1g7QUFDWCw0QkFBY0MsUUFBZCxDQUF1QjtBQUNyQkQsZ0JBRHFCO0FBRXJCRSxrQkFBWSx3QkFBY0M7QUFGTCxLQUF2QjtBQUlELEdBTnVCO0FBUXhCQyxnQkFSd0IsMEJBUVRDLElBUlMsRUFRSDtBQUNuQixRQUFNQyxLQUFLRCxLQUFLQyxFQUFoQjtBQUNBLFFBQU1DLGFBQWFGLEtBQUtFLFVBQXhCOztBQUVBLDRCQUFjTixRQUFkLENBQXVCO0FBQ3JCSyxZQURxQixFQUNqQkMsc0JBRGlCO0FBRXJCTCxrQkFBWSx3QkFBY007QUFGTCxLQUF2QjtBQUlELEdBaEJ1QjtBQWtCeEJDLG1CQWxCd0IsK0JBa0JKO0FBQ2xCLDRCQUFjUixRQUFkLENBQXVCO0FBQ3JCQyxrQkFBWSx3QkFBY1E7QUFETCxLQUF2QjtBQUdELEdBdEJ1QjtBQXdCeEJDLFNBeEJ3QixtQkF3QmhCTCxFQXhCZ0IsRUF3Qlo7QUFDViw0QkFBY0wsUUFBZCxDQUF1QjtBQUNyQkssWUFEcUI7QUFFckJKLGtCQUFZLHdCQUFjVTtBQUZMLEtBQXZCO0FBSUQsR0E3QnVCO0FBK0J4QkMsWUEvQndCLHNCQStCYlAsRUEvQmEsRUErQlROLElBL0JTLEVBK0JIO0FBQ25CLDRCQUFjQyxRQUFkLENBQXVCO0FBQ3JCSyxZQURxQixFQUNqQk4sVUFEaUI7QUFFckJFLGtCQUFZLHdCQUFjWTtBQUZMLEtBQXZCO0FBSUQsR0FwQ3VCO0FBc0N4QkMsa0JBdEN3Qiw4QkFzQ0w7QUFDakIsNEJBQWNkLFFBQWQsQ0FBdUI7QUFDckJDLGtCQUFZLHdCQUFjYztBQURMLEtBQXZCO0FBR0Q7QUExQ3VCLENBQTFCOztrQkE2Q2VsQixpQiIsImZpbGUiOiJtZW1vQWN0aW9uQ3JlYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHBEaXNwYXRjaGVyIGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9kaXNwYXRjaGVyL0FwcERpc3BhdGNoZXInO1xuaW1wb3J0IG1lbW9Db25zdGFudHMgZnJvbSAnLi4vY29uc3RhbnRzL21lbW9Db25zdGFudHMnO1xuXG5jb25zdCBtZW1vQWN0aW9uQ3JlYXRvciA9IHtcbiAgY3JlYXRlKHRleHQpIHtcbiAgICBBcHBEaXNwYXRjaGVyLmRpc3BhdGNoKHtcbiAgICAgIHRleHQsXG4gICAgICBhY3Rpb25UeXBlOiBtZW1vQ29uc3RhbnRzLlRPRE9fQ1JFQVRFXG4gICAgfSk7XG4gIH0sXG5cbiAgdG9nZ2xlQ29tcGxldGUodG9kbykge1xuICAgIGNvbnN0IGlkID0gdG9kby5pZDtcbiAgICBjb25zdCBpc0NvbXBsZXRlID0gdG9kby5pc0NvbXBsZXRlO1xuXG4gICAgQXBwRGlzcGF0Y2hlci5kaXNwYXRjaCh7XG4gICAgICBpZCwgaXNDb21wbGV0ZSxcbiAgICAgIGFjdGlvblR5cGU6IG1lbW9Db25zdGFudHMuVE9ET19UT0dHTEVfQ09NUExFVEVcbiAgICB9KTtcbiAgfSxcblxuICB0b2dnbGVDb21wbGV0ZUFsbCgpIHtcbiAgICBBcHBEaXNwYXRjaGVyLmRpc3BhdGNoKHtcbiAgICAgIGFjdGlvblR5cGU6IG1lbW9Db25zdGFudHMuVE9ET19UT0dHTEVfQ09NUExFVEVfQUxMXG4gICAgfSk7XG4gIH0sXG5cbiAgZGVzdHJveShpZCkge1xuICAgIEFwcERpc3BhdGNoZXIuZGlzcGF0Y2goe1xuICAgICAgaWQsXG4gICAgICBhY3Rpb25UeXBlOiBtZW1vQ29uc3RhbnRzLlRPRE9fREVTVFJPWVxuICAgIH0pO1xuICB9LFxuXG4gIHVwZGF0ZVRleHQoaWQsIHRleHQpIHtcbiAgICBBcHBEaXNwYXRjaGVyLmRpc3BhdGNoKHtcbiAgICAgIGlkLCB0ZXh0LFxuICAgICAgYWN0aW9uVHlwZTogbWVtb0NvbnN0YW50cy5UT0RPX1VQREFURV9URVhUXG4gICAgfSk7XG4gIH0sXG5cbiAgZGVzdHJveUNvbXBsZXRlZCgpIHtcbiAgICBBcHBEaXNwYXRjaGVyLmRpc3BhdGNoKHtcbiAgICAgIGFjdGlvblR5cGU6IG1lbW9Db25zdGFudHMuVE9ET19ERVNUUk9ZX0NPTVBMRVRFRFxuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtZW1vQWN0aW9uQ3JlYXRvcjtcbiJdfQ==
//# sourceMappingURL=memoActionCreator.js.map
