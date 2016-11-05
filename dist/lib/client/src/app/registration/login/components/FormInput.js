'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseComponent2 = require('../../../../common/components/BaseComponent');

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormInput = function (_BaseComponent) {
  _inherits(FormInput, _BaseComponent);

  function FormInput(props) {
    _classCallCheck(this, FormInput);

    var _this = _possibleConstructorReturn(this, (FormInput.__proto__ || Object.getPrototypeOf(FormInput)).call(this, props));

    _this._bind('_onChange');
    _this.state = {
      email: '',
      emailIsValid: false,
      password: '',
      passwordIsValid: false
    };
    return _this;
  }

  _createClass(FormInput, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('input', {
        onChange: this._onChange,
        className: this.props.className,
        placeholder: this.props.placeholder,
        value: this.props.value,
        type: this.props.type,
        required: 'required'
      });
    }
  }, {
    key: '_onChange',
    value: function _onChange(event) {
      this.props.onChange(event.target.value, event.target.checkValidity());
    }
  }]);

  return FormInput;
}(_BaseComponent3.default);

FormInput.propTypes = {
  onChange: _react2.default.PropTypes.func.isRequired,
  value: _react2.default.PropTypes.string.isRequired,
  type: _react2.default.PropTypes.string.isRequired,
  placeholder: _react2.default.PropTypes.string.isRequired,
  className: _react2.default.PropTypes.string.isRequired
};

exports.default = FormInput;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY2xpZW50L3NyYy9hcHAvcmVnaXN0cmF0aW9uL2xvZ2luL2NvbXBvbmVudHMvRm9ybUlucHV0LmpzIl0sIm5hbWVzIjpbIkZvcm1JbnB1dCIsInByb3BzIiwiX2JpbmQiLCJzdGF0ZSIsImVtYWlsIiwiZW1haWxJc1ZhbGlkIiwicGFzc3dvcmQiLCJwYXNzd29yZElzVmFsaWQiLCJfb25DaGFuZ2UiLCJjbGFzc05hbWUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwidHlwZSIsImV2ZW50Iiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJjaGVja1ZhbGlkaXR5IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLFM7OztBQUVKLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsc0hBQ1hBLEtBRFc7O0FBR2pCLFVBQUtDLEtBQUwsQ0FBVyxXQUFYO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU8sRUFESTtBQUVYQyxvQkFBYyxLQUZIO0FBR1hDLGdCQUFVLEVBSEM7QUFJWEMsdUJBQWlCO0FBSk4sS0FBYjtBQUppQjtBQVVsQjs7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFDRSxrQkFBVyxLQUFLQyxTQURsQjtBQUVFLG1CQUFXLEtBQUtQLEtBQUwsQ0FBV1EsU0FGeEI7QUFHRSxxQkFBYyxLQUFLUixLQUFMLENBQVdTLFdBSDNCO0FBSUUsZUFBUSxLQUFLVCxLQUFMLENBQVdVLEtBSnJCO0FBS0UsY0FBTyxLQUFLVixLQUFMLENBQVdXLElBTHBCO0FBTUUsa0JBQVM7QUFOWCxRQURGO0FBVUQ7Ozs4QkFFU0MsSyxFQUFPO0FBQ2YsV0FBS1osS0FBTCxDQUFXYSxRQUFYLENBQW9CRCxNQUFNRSxNQUFOLENBQWFKLEtBQWpDLEVBQXdDRSxNQUFNRSxNQUFOLENBQWFDLGFBQWIsRUFBeEM7QUFDRDs7Ozs7O0FBR0hoQixVQUFVaUIsU0FBVixHQUFzQjtBQUNwQkgsWUFBVSxnQkFBTUksU0FBTixDQUFnQkMsSUFBaEIsQ0FBcUJDLFVBRFg7QUFFcEJULFNBQU8sZ0JBQU1PLFNBQU4sQ0FBZ0JHLE1BQWhCLENBQXVCRCxVQUZWO0FBR3BCUixRQUFNLGdCQUFNTSxTQUFOLENBQWdCRyxNQUFoQixDQUF1QkQsVUFIVDtBQUlwQlYsZUFBYSxnQkFBTVEsU0FBTixDQUFnQkcsTUFBaEIsQ0FBdUJELFVBSmhCO0FBS3BCWCxhQUFXLGdCQUFNUyxTQUFOLENBQWdCRyxNQUFoQixDQUF1QkQ7QUFMZCxDQUF0Qjs7a0JBUWVwQixTIiwiZmlsZSI6IkZvcm1JbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jb21wb25lbnRzL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgRm9ybUlucHV0IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLl9iaW5kKCdfb25DaGFuZ2UnKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZW1haWw6ICcnLFxuICAgICAgZW1haWxJc1ZhbGlkOiBmYWxzZSxcbiAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgIHBhc3N3b3JkSXNWYWxpZDogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8aW5wdXRcbiAgICAgICAgb25DaGFuZ2U9eyB0aGlzLl9vbkNoYW5nZSB9XG4gICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9XG4gICAgICAgIHBsYWNlaG9sZGVyPXsgdGhpcy5wcm9wcy5wbGFjZWhvbGRlciB9XG4gICAgICAgIHZhbHVlPXsgdGhpcy5wcm9wcy52YWx1ZSB9XG4gICAgICAgIHR5cGU9eyB0aGlzLnByb3BzLnR5cGUgfVxuICAgICAgICByZXF1aXJlZD1cInJlcXVpcmVkXCJcbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIF9vbkNoYW5nZShldmVudCkge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlLCBldmVudC50YXJnZXQuY2hlY2tWYWxpZGl0eSgpKTtcbiAgfVxuXG59XG5Gb3JtSW5wdXQucHJvcFR5cGVzID0ge1xuICBvbkNoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgdmFsdWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdHlwZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBwbGFjZWhvbGRlcjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybUlucHV0O1xuIl19
//# sourceMappingURL=FormInput.js.map
