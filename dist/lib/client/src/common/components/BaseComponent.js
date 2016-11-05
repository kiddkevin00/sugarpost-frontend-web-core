'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseComponent = function (_React$Component) {
  _inherits(BaseComponent, _React$Component);

  function BaseComponent() {
    _classCallCheck(this, BaseComponent);

    return _possibleConstructorReturn(this, (BaseComponent.__proto__ || Object.getPrototypeOf(BaseComponent)).apply(this, arguments));
  }

  _createClass(BaseComponent, [{
    key: '_bind',
    value: function _bind() {
      var _this2 = this;

      for (var _len = arguments.length, methods = Array(_len), _key = 0; _key < _len; _key++) {
        methods[_key] = arguments[_key];
      }

      methods.forEach(function (method) {
        _this2[method] = _this2[method].bind(_this2);
      });
    }
  }]);

  return BaseComponent;
}(_react2.default.Component);

exports.default = BaseComponent;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY2xpZW50L3NyYy9jb21tb24vY29tcG9uZW50cy9CYXNlQ29tcG9uZW50LmpzIl0sIm5hbWVzIjpbIkJhc2VDb21wb25lbnQiLCJtZXRob2RzIiwiZm9yRWFjaCIsIm1ldGhvZCIsImJpbmQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVNQSxhOzs7Ozs7Ozs7Ozs0QkFDYztBQUFBOztBQUFBLHdDQUFUQyxPQUFTO0FBQVRBLGVBQVM7QUFBQTs7QUFDaEJBLGNBQVFDLE9BQVIsQ0FBZ0IsVUFBQ0MsTUFBRCxFQUFZO0FBQzFCLGVBQUtBLE1BQUwsSUFBZSxPQUFLQSxNQUFMLEVBQWFDLElBQWIsUUFBZjtBQUNELE9BRkQ7QUFHRDs7OztFQUx5QixnQkFBTUMsUzs7a0JBUW5CTCxhIiwiZmlsZSI6IkJhc2VDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBCYXNlQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgX2JpbmQoLi4ubWV0aG9kcykge1xuICAgIG1ldGhvZHMuZm9yRWFjaCgobWV0aG9kKSA9PiB7XG4gICAgICB0aGlzW21ldGhvZF0gPSB0aGlzW21ldGhvZF0uYmluZCh0aGlzKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNlQ29tcG9uZW50O1xuIl19
//# sourceMappingURL=BaseComponent.js.map
