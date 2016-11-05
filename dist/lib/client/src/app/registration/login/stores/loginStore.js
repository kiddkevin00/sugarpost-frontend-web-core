'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AppDispatcher = require('../../../../common/dispatcher/AppDispatcher');

var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);

var _loginConstants = require('../constants/loginConstants');

var _loginConstants2 = _interopRequireDefault(_loginConstants);

var _events = require('events');

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var changeEvent = Symbol('change');
var storeContext = Symbol('loginStoreContext');

// A Flux's store.

var LoginStore = function (_EventEmitter) {
  _inherits(LoginStore, _EventEmitter);

  function LoginStore() {
    _classCallCheck(this, LoginStore);

    // All internal store data.
    var _this = _possibleConstructorReturn(this, (LoginStore.__proto__ || Object.getPrototypeOf(LoginStore)).call(this));

    _this[storeContext] = {
      isLoggedIn: false
    };
    return _this;
  }

  _createClass(LoginStore, [{
    key: 'isLoggedIn',
    value: function isLoggedIn() {
      return this[storeContext].isLoggedIn;
    }
  }, {
    key: 'emitChange',
    value: function emitChange() {
      this.emit(changeEvent);
    }
  }, {
    key: 'addChangeListener',
    value: function addChangeListener(callback) {
      this.on(changeEvent, callback);
    }
  }, {
    key: 'removeChangeListener',
    value: function removeChangeListener(callback) {
      this.removeListener(changeEvent, callback);
    }
  }, {
    key: '_login',
    value: function _login(email, password) {
      if (email === 'admin@teu.com' && password === 'admin') {
        this[storeContext].isLoggedIn = true;
      }
    }
  }]);

  return LoginStore;
}(_events2.default);

var loginStore = new LoginStore();

// The dispatcher registration for the current store component.
_AppDispatcher2.default.register(function (action) {
  console.log('Action in `loginStore`: ' + JSON.stringify(action, null, 2));

  var actionType = action.actionType;
  var email = action.email;
  var password = action.password;

  switch (actionType) {
    case _loginConstants2.default.BASIC_LOGIN:
      loginStore._login(email, password);

      loginStore.emitChange();
      break;
    default:
      return;
  }
});

exports.default = loginStore;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY2xpZW50L3NyYy9hcHAvcmVnaXN0cmF0aW9uL2xvZ2luL3N0b3Jlcy9sb2dpblN0b3JlLmpzIl0sIm5hbWVzIjpbImNoYW5nZUV2ZW50IiwiU3ltYm9sIiwic3RvcmVDb250ZXh0IiwiTG9naW5TdG9yZSIsImlzTG9nZ2VkSW4iLCJlbWl0IiwiY2FsbGJhY2siLCJvbiIsInJlbW92ZUxpc3RlbmVyIiwiZW1haWwiLCJwYXNzd29yZCIsImxvZ2luU3RvcmUiLCJyZWdpc3RlciIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwiYWN0aW9uVHlwZSIsIkJBU0lDX0xPR0lOIiwiX2xvZ2luIiwiZW1pdENoYW5nZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGNBQWNDLE9BQU8sUUFBUCxDQUFwQjtBQUNBLElBQU1DLGVBQWVELE9BQU8sbUJBQVAsQ0FBckI7O0FBRUE7O0lBQ01FLFU7OztBQUVKLHdCQUFjO0FBQUE7O0FBR1o7QUFIWTs7QUFJWixVQUFLRCxZQUFMLElBQXFCO0FBQ25CRSxrQkFBWTtBQURPLEtBQXJCO0FBSlk7QUFPYjs7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0YsWUFBTCxFQUFtQkUsVUFBMUI7QUFDRDs7O2lDQUVZO0FBQ1gsV0FBS0MsSUFBTCxDQUFVTCxXQUFWO0FBQ0Q7OztzQ0FFaUJNLFEsRUFBVTtBQUMxQixXQUFLQyxFQUFMLENBQVFQLFdBQVIsRUFBcUJNLFFBQXJCO0FBQ0Q7Ozt5Q0FFb0JBLFEsRUFBVTtBQUM3QixXQUFLRSxjQUFMLENBQW9CUixXQUFwQixFQUFpQ00sUUFBakM7QUFDRDs7OzJCQUVNRyxLLEVBQU9DLFEsRUFBVTtBQUN0QixVQUFJRCxVQUFVLGVBQVYsSUFBNkJDLGFBQWEsT0FBOUMsRUFBdUQ7QUFDckQsYUFBS1IsWUFBTCxFQUFtQkUsVUFBbkIsR0FBZ0MsSUFBaEM7QUFDRDtBQUNGOzs7Ozs7QUFJSCxJQUFNTyxhQUFhLElBQUlSLFVBQUosRUFBbkI7O0FBRUE7QUFDQSx3QkFBY1MsUUFBZCxDQUF1QixVQUFDQyxNQUFELEVBQVk7QUFDakNDLFVBQVFDLEdBQVIsOEJBQXlDQyxLQUFLQyxTQUFMLENBQWVKLE1BQWYsRUFBdUIsSUFBdkIsRUFBNkIsQ0FBN0IsQ0FBekM7O0FBRUEsTUFBTUssYUFBYUwsT0FBT0ssVUFBMUI7QUFDQSxNQUFNVCxRQUFRSSxPQUFPSixLQUFyQjtBQUNBLE1BQU1DLFdBQVdHLE9BQU9ILFFBQXhCOztBQUVBLFVBQVFRLFVBQVI7QUFDRSxTQUFLLHlCQUFlQyxXQUFwQjtBQUNFUixpQkFBV1MsTUFBWCxDQUFrQlgsS0FBbEIsRUFBeUJDLFFBQXpCOztBQUVBQyxpQkFBV1UsVUFBWDtBQUNBO0FBQ0Y7QUFDRTtBQVBKO0FBU0QsQ0FoQkQ7O2tCQWtCZVYsVSIsImZpbGUiOiJsb2dpblN0b3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcERpc3BhdGNoZXIgZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Rpc3BhdGNoZXIvQXBwRGlzcGF0Y2hlcic7XG5pbXBvcnQgbG9naW5Db25zdGFudHMgZnJvbSAnLi4vY29uc3RhbnRzL2xvZ2luQ29uc3RhbnRzJztcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnZXZlbnRzJztcblxuY29uc3QgY2hhbmdlRXZlbnQgPSBTeW1ib2woJ2NoYW5nZScpO1xuY29uc3Qgc3RvcmVDb250ZXh0ID0gU3ltYm9sKCdsb2dpblN0b3JlQ29udGV4dCcpO1xuXG4vLyBBIEZsdXgncyBzdG9yZS5cbmNsYXNzIExvZ2luU3RvcmUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICAvLyBBbGwgaW50ZXJuYWwgc3RvcmUgZGF0YS5cbiAgICB0aGlzW3N0b3JlQ29udGV4dF0gPSB7XG4gICAgICBpc0xvZ2dlZEluOiBmYWxzZSxcbiAgICB9O1xuICB9XG4gIFxuICBpc0xvZ2dlZEluKCkge1xuICAgIHJldHVybiB0aGlzW3N0b3JlQ29udGV4dF0uaXNMb2dnZWRJbjtcbiAgfVxuXG4gIGVtaXRDaGFuZ2UoKSB7XG4gICAgdGhpcy5lbWl0KGNoYW5nZUV2ZW50KTtcbiAgfVxuXG4gIGFkZENoYW5nZUxpc3RlbmVyKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5vbihjaGFuZ2VFdmVudCwgY2FsbGJhY2spO1xuICB9XG5cbiAgcmVtb3ZlQ2hhbmdlTGlzdGVuZXIoY2FsbGJhY2spIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKGNoYW5nZUV2ZW50LCBjYWxsYmFjayk7XG4gIH1cblxuICBfbG9naW4oZW1haWwsIHBhc3N3b3JkKSB7XG4gICAgaWYgKGVtYWlsID09PSAnYWRtaW5AdGV1LmNvbScgJiYgcGFzc3dvcmQgPT09ICdhZG1pbicpIHtcbiAgICAgIHRoaXNbc3RvcmVDb250ZXh0XS5pc0xvZ2dlZEluID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxufVxuXG5jb25zdCBsb2dpblN0b3JlID0gbmV3IExvZ2luU3RvcmUoKTtcblxuLy8gVGhlIGRpc3BhdGNoZXIgcmVnaXN0cmF0aW9uIGZvciB0aGUgY3VycmVudCBzdG9yZSBjb21wb25lbnQuXG5BcHBEaXNwYXRjaGVyLnJlZ2lzdGVyKChhY3Rpb24pID0+IHtcbiAgY29uc29sZS5sb2coYEFjdGlvbiBpbiBcXGBsb2dpblN0b3JlXFxgOiAke0pTT04uc3RyaW5naWZ5KGFjdGlvbiwgbnVsbCwgMil9YCk7XG5cbiAgY29uc3QgYWN0aW9uVHlwZSA9IGFjdGlvbi5hY3Rpb25UeXBlO1xuICBjb25zdCBlbWFpbCA9IGFjdGlvbi5lbWFpbDtcbiAgY29uc3QgcGFzc3dvcmQgPSBhY3Rpb24ucGFzc3dvcmQ7XG5cbiAgc3dpdGNoIChhY3Rpb25UeXBlKSB7XG4gICAgY2FzZSBsb2dpbkNvbnN0YW50cy5CQVNJQ19MT0dJTjpcbiAgICAgIGxvZ2luU3RvcmUuX2xvZ2luKGVtYWlsLCBwYXNzd29yZCk7XG5cbiAgICAgIGxvZ2luU3RvcmUuZW1pdENoYW5nZSgpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybjtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ2luU3RvcmU7XG4iXX0=
//# sourceMappingURL=loginStore.js.map
