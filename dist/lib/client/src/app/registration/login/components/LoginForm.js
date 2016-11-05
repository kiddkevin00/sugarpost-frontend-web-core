'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _FormInput = require('./FormInput');

var _FormInput2 = _interopRequireDefault(_FormInput);

var _BaseComponent2 = require('../../../../common/components/BaseComponent');

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginForm = function (_BaseComponent) {
  _inherits(LoginForm, _BaseComponent);

  function LoginForm(props) {
    _classCallCheck(this, LoginForm);

    var _this = _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call(this, props));

    _this._bind('_onChange', '_onSubmit');
    _this.state = {
      email: '',
      emailIsValid: false,
      password: '',
      passwordIsValid: false
    };
    return _this;
  }

  _createClass(LoginForm, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'form',
        { onSubmit: this._onSubmit },
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            null,
            'Email'
          ),
          _react2.default.createElement(_FormInput2.default, {
            onChange: this._onChange.bind(this, 'email'),
            value: this.state.email,
            type: 'email',
            placeholder: 'Email',
            className: 'form-control'
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            null,
            'Password'
          ),
          _react2.default.createElement(_FormInput2.default, {
            onChange: this._onChange.bind(this, 'password'),
            value: this.state.password,
            type: 'password',
            placeholder: 'Password',
            className: 'form-control'
          })
        ),
        _react2.default.createElement(
          'button',
          {
            disabled: this.state.emailIsValid && this.state.passwordIsValid ? '' : 'disabled',
            className: 'btn btn-success btn-sm btn-block',
            type: 'submit'
          },
          'Login'
        )
      );
    }
  }, {
    key: '_onChange',
    value: function _onChange(field, value, isValid) {
      var _setState;

      console.log(field, value, isValid);

      this.setState((_setState = {}, _defineProperty(_setState, field, value), _defineProperty(_setState, field + 'IsValid', isValid), _setState));
    }
  }, {
    key: '_onSubmit',
    value: function _onSubmit(event) {
      this.props.onSubmit(event, this.state.email, this.state.password);
    }
  }]);

  return LoginForm;
}(_BaseComponent3.default);

LoginForm.propTypes = {
  onSubmit: _react2.default.PropTypes.func.isRequired
};

exports.default = LoginForm;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY2xpZW50L3NyYy9hcHAvcmVnaXN0cmF0aW9uL2xvZ2luL2NvbXBvbmVudHMvTG9naW5Gb3JtLmpzIl0sIm5hbWVzIjpbIkxvZ2luRm9ybSIsInByb3BzIiwiX2JpbmQiLCJzdGF0ZSIsImVtYWlsIiwiZW1haWxJc1ZhbGlkIiwicGFzc3dvcmQiLCJwYXNzd29yZElzVmFsaWQiLCJfb25TdWJtaXQiLCJfb25DaGFuZ2UiLCJiaW5kIiwiZmllbGQiLCJ2YWx1ZSIsImlzVmFsaWQiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJldmVudCIsIm9uU3VibWl0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVNQSxTOzs7QUFFSixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHNIQUNYQSxLQURXOztBQUdqQixVQUFLQyxLQUFMLENBQVcsV0FBWCxFQUF3QixXQUF4QjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxhQUFPLEVBREk7QUFFWEMsb0JBQWMsS0FGSDtBQUdYQyxnQkFBVSxFQUhDO0FBSVhDLHVCQUFpQjtBQUpOLEtBQWI7QUFKaUI7QUFVbEI7Ozs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFNLFVBQVUsS0FBS0MsU0FBckI7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFFRTtBQUNFLHNCQUFVLEtBQUtDLFNBQUwsQ0FBZUMsSUFBZixDQUFvQixJQUFwQixFQUEwQixPQUExQixDQURaO0FBRUUsbUJBQU8sS0FBS1AsS0FBTCxDQUFXQyxLQUZwQjtBQUdFLGtCQUFLLE9BSFA7QUFJRSx5QkFBWSxPQUpkO0FBS0UsdUJBQVU7QUFMWjtBQUZGLFNBREY7QUFXRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFFRTtBQUNFLHNCQUFXLEtBQUtLLFNBQUwsQ0FBZUMsSUFBZixDQUFvQixJQUFwQixFQUEwQixVQUExQixDQURiO0FBRUUsbUJBQU8sS0FBS1AsS0FBTCxDQUFXRyxRQUZwQjtBQUdFLGtCQUFLLFVBSFA7QUFJRSx5QkFBWSxVQUpkO0FBS0UsdUJBQVU7QUFMWjtBQUZGLFNBWEY7QUFxQkU7QUFBQTtBQUFBO0FBQ0Usc0JBQVUsS0FBS0gsS0FBTCxDQUFXRSxZQUFYLElBQTJCLEtBQUtGLEtBQUwsQ0FBV0ksZUFBdEMsR0FBd0QsRUFBeEQsR0FBNkQsVUFEekU7QUFFRSx1QkFBVSxrQ0FGWjtBQUdFLGtCQUFLO0FBSFA7QUFBQTtBQUFBO0FBckJGLE9BREY7QUErQkQ7Ozs4QkFFU0ksSyxFQUFPQyxLLEVBQU9DLE8sRUFBUztBQUFBOztBQUMvQkMsY0FBUUMsR0FBUixDQUFZSixLQUFaLEVBQW1CQyxLQUFuQixFQUEwQkMsT0FBMUI7O0FBRUEsV0FBS0csUUFBTCw2Q0FDR0wsS0FESCxFQUNXQyxLQURYLDhCQUVHRCxRQUFRLFNBRlgsRUFFdUJFLE9BRnZCO0FBSUQ7Ozs4QkFFU0ksSyxFQUFPO0FBQ2YsV0FBS2hCLEtBQUwsQ0FBV2lCLFFBQVgsQ0FBb0JELEtBQXBCLEVBQTJCLEtBQUtkLEtBQUwsQ0FBV0MsS0FBdEMsRUFBNkMsS0FBS0QsS0FBTCxDQUFXRyxRQUF4RDtBQUNEOzs7Ozs7QUFHSE4sVUFBVW1CLFNBQVYsR0FBc0I7QUFDcEJELFlBQVUsZ0JBQU1FLFNBQU4sQ0FBZ0JDLElBQWhCLENBQXFCQztBQURYLENBQXRCOztrQkFJZXRCLFMiLCJmaWxlIjoiTG9naW5Gb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZvcm1JbnB1dCBmcm9tICcuL0Zvcm1JbnB1dCc7XG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY29tcG9uZW50cy9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIExvZ2luRm9ybSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5fYmluZCgnX29uQ2hhbmdlJywgJ19vblN1Ym1pdCcpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlbWFpbDogJycsXG4gICAgICBlbWFpbElzVmFsaWQ6IGZhbHNlLFxuICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgcGFzc3dvcmRJc1ZhbGlkOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLl9vblN1Ym1pdH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwJz5cbiAgICAgICAgICA8bGFiZWw+RW1haWw8L2xhYmVsPlxuICAgICAgICAgIDxGb3JtSW5wdXRcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbkNoYW5nZS5iaW5kKHRoaXMsICdlbWFpbCcpfVxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9XG4gICAgICAgICAgICB0eXBlPSdlbWFpbCdcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbWFpbCdcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XG4gICAgICAgICAgPGxhYmVsPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICA8Rm9ybUlucHV0XG4gICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMuX29uQ2hhbmdlLmJpbmQodGhpcywgJ3Bhc3N3b3JkJykgfVxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9XG4gICAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdQYXNzd29yZCdcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuZW1haWxJc1ZhbGlkICYmIHRoaXMuc3RhdGUucGFzc3dvcmRJc1ZhbGlkID8gJycgOiAnZGlzYWJsZWQnfVxuICAgICAgICAgIGNsYXNzTmFtZT0nYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbSBidG4tYmxvY2snXG4gICAgICAgICAgdHlwZT0nc3VibWl0J1xuICAgICAgICA+XG4gICAgICAgICAgTG9naW5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgKTtcbiAgfVxuXG4gIF9vbkNoYW5nZShmaWVsZCwgdmFsdWUsIGlzVmFsaWQpIHtcbiAgICBjb25zb2xlLmxvZyhmaWVsZCwgdmFsdWUsIGlzVmFsaWQpXG4gICAgXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbZmllbGRdOiB2YWx1ZSxcbiAgICAgIFtmaWVsZCArICdJc1ZhbGlkJ106IGlzVmFsaWRcbiAgICB9KTtcbiAgfVxuXG4gIF9vblN1Ym1pdChldmVudCkge1xuICAgIHRoaXMucHJvcHMub25TdWJtaXQoZXZlbnQsIHRoaXMuc3RhdGUuZW1haWwsIHRoaXMuc3RhdGUucGFzc3dvcmQpO1xuICB9XG5cbn1cbkxvZ2luRm9ybS5wcm9wVHlwZXMgPSB7XG4gIG9uU3VibWl0OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07XG4iXX0=
//# sourceMappingURL=LoginForm.js.map
