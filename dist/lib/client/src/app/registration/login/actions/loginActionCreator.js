'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AppDispatcher = require('../../../../common/dispatcher/AppDispatcher');

var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);

var _loginConstants = require('../constants/loginConstants');

var _loginConstants2 = _interopRequireDefault(_loginConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loginActionCreator = {
  login: function login(email, password) {
    _AppDispatcher2.default.dispatch({
      email: email, password: password,
      actionType: _loginConstants2.default.BASIC_LOGIN
    });
  }
};

exports.default = loginActionCreator;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY2xpZW50L3NyYy9hcHAvcmVnaXN0cmF0aW9uL2xvZ2luL2FjdGlvbnMvbG9naW5BY3Rpb25DcmVhdG9yLmpzIl0sIm5hbWVzIjpbImxvZ2luQWN0aW9uQ3JlYXRvciIsImxvZ2luIiwiZW1haWwiLCJwYXNzd29yZCIsImRpc3BhdGNoIiwiYWN0aW9uVHlwZSIsIkJBU0lDX0xPR0lOIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxxQkFBcUI7QUFDekJDLE9BRHlCLGlCQUNuQkMsS0FEbUIsRUFDWkMsUUFEWSxFQUNGO0FBQ3JCLDRCQUFjQyxRQUFkLENBQXVCO0FBQ3JCRixrQkFEcUIsRUFDZEMsa0JBRGM7QUFFckJFLGtCQUFZLHlCQUFlQztBQUZOLEtBQXZCO0FBSUQ7QUFOd0IsQ0FBM0I7O2tCQVVlTixrQiIsImZpbGUiOiJsb2dpbkFjdGlvbkNyZWF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwRGlzcGF0Y2hlciBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vZGlzcGF0Y2hlci9BcHBEaXNwYXRjaGVyJztcbmltcG9ydCBsb2dpbkNvbnN0YW50cyBmcm9tICcuLi9jb25zdGFudHMvbG9naW5Db25zdGFudHMnO1xuXG5jb25zdCBsb2dpbkFjdGlvbkNyZWF0b3IgPSB7XG4gIGxvZ2luKGVtYWlsLCBwYXNzd29yZCkge1xuICAgIEFwcERpc3BhdGNoZXIuZGlzcGF0Y2goe1xuICAgICAgZW1haWwsIHBhc3N3b3JkLFxuICAgICAgYWN0aW9uVHlwZTogbG9naW5Db25zdGFudHMuQkFTSUNfTE9HSU5cbiAgICB9KTtcbiAgfSxcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9naW5BY3Rpb25DcmVhdG9yO1xuIl19
//# sourceMappingURL=loginActionCreator.js.map
