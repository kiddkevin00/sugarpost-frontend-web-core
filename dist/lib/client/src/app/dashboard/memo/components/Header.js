'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TextInput = require('./TextInput');

var _TextInput2 = _interopRequireDefault(_TextInput);

var _memoActionCreator = require('../actions/memoActionCreator');

var _memoActionCreator2 = _interopRequireDefault(_memoActionCreator);

var _BaseComponent2 = require('../../../../common/components/BaseComponent');

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_BaseComponent) {
  _inherits(Header, _BaseComponent);

  function Header(props) {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
          'h1',
          null,
          'Memo'
        ),
        _react2.default.createElement(_TextInput2.default, {
          onSave: this._onSave,
          value: '',
          placeholder: 'What needs to be done?'
        })
      );
    }
  }, {
    key: '_onSave',
    value: function _onSave(text) {
      if (text.trim()) {
        _memoActionCreator2.default.create(text);
      }
    }
  }]);

  return Header;
}(_BaseComponent3.default);

exports.default = Header;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY2xpZW50L3NyYy9hcHAvZGFzaGJvYXJkL21lbW8vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOlsiSGVhZGVyIiwicHJvcHMiLCJfb25TYXZlIiwidGV4dCIsInRyaW0iLCJjcmVhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxNOzs7QUFFSixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDJHQUNYQSxLQURXO0FBRWxCOzs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUNFLGtCQUFTLEtBQUtDLE9BRGhCO0FBRUUsaUJBQU0sRUFGUjtBQUdFLHVCQUFZO0FBSGQ7QUFGRixPQURGO0FBVUQ7Ozs0QkFFT0MsSSxFQUFNO0FBQ1osVUFBSUEsS0FBS0MsSUFBTCxFQUFKLEVBQWlCO0FBQ2Ysb0NBQWtCQyxNQUFsQixDQUF5QkYsSUFBekI7QUFDRDtBQUNGOzs7Ozs7a0JBSVlILE0iLCJmaWxlIjoiSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRleHRJbnB1dCBmcm9tICcuL1RleHRJbnB1dCc7XG5pbXBvcnQgbWVtb0FjdGlvbkNyZWF0b3IgZnJvbSAnLi4vYWN0aW9ucy9tZW1vQWN0aW9uQ3JlYXRvcic7XG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY29tcG9uZW50cy9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8aGVhZGVyPlxuICAgICAgICA8aDE+TWVtbzwvaDE+XG4gICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICBvblNhdmU9eyB0aGlzLl9vblNhdmUgfVxuICAgICAgICAgIHZhbHVlPVwiXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgbmVlZHMgdG8gYmUgZG9uZT9cIlxuICAgICAgICAvPlxuICAgICAgPC9oZWFkZXI+XG4gICAgKTtcbiAgfVxuXG4gIF9vblNhdmUodGV4dCkge1xuICAgIGlmICh0ZXh0LnRyaW0oKSkge1xuICAgICAgbWVtb0FjdGlvbkNyZWF0b3IuY3JlYXRlKHRleHQpO1xuICAgIH1cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ==
//# sourceMappingURL=Header.js.map
