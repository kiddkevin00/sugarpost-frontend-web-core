'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _loginStore = require('../stores/loginStore');

var _loginStore2 = _interopRequireDefault(_loginStore);

var _loginActionCreator = require('../actions/loginActionCreator');

var _loginActionCreator2 = _interopRequireDefault(_loginActionCreator);

var _LoginForm = require('./LoginForm');

var _LoginForm2 = _interopRequireDefault(_LoginForm);

var _BaseComponent2 = require('../../../../common/components/BaseComponent');

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * A private method. It should only be used by `setState()` and `getInitialState()` to sync with
 * the data in the Flux store.
 */
function _getState() {
  return {
    isLoggedIn: _loginStore2.default.isLoggedIn
  };
}

var LoginApp = function (_BaseComponent) {
  _inherits(LoginApp, _BaseComponent);

  function LoginApp(props) {
    _classCallCheck(this, LoginApp);

    var _this = _possibleConstructorReturn(this, (LoginApp.__proto__ || Object.getPrototypeOf(LoginApp)).call(this, props));

    _this._bind('_onChange', '_onSubmit');
    _this.state = _getState();
    return _this;
  }

  _createClass(LoginApp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _loginStore2.default.addChangeListener(this._onChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _loginStore2.default.removeChangeListener(this._onChange);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-lg-12' },
            _react2.default.createElement('div', { style: { paddingTop: '15%' } })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-lg-offset-4 col-lg-4' },
            _react2.default.createElement(
              'div',
              { className: 'panel panel-default' },
              _react2.default.createElement(
                'div',
                { className: 'panel-heading text-center' },
                _react2.default.createElement(
                  'h4',
                  null,
                  _react2.default.createElement(
                    'span',
                    { className: 'label label-primary' },
                    'The English University'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'panel-body' },
                _react2.default.createElement(_LoginForm2.default, { onSubmit: this._onSubmit }),
                _react2.default.createElement(
                  'div',
                  { className: 'panel-footer text-center' },
                  _react2.default.createElement(
                    'p',
                    { className: 'text-muted' },
                    _react2.default.createElement(
                      'a',
                      { href: 'mailto:inquiries@TheEnglishUniversity.com' },
                      'Development Support'
                    )
                  ),
                  _react2.default.createElement(
                    'p',
                    null,
                    'v0.0.0'
                  )
                )
              )
            )
          )
        )
      );
    }
  }, {
    key: '_onChange',
    value: function _onChange() {
      this.setState(_getState());
    }
  }, {
    key: '_onSubmit',
    value: function _onSubmit(event, email, password) {
      // Prevents browser's default navigation (page refresh).
      event.preventDefault();

      _loginActionCreator2.default.login(email, password);
    }
  }]);

  return LoginApp;
}(_BaseComponent3.default);

exports.default = LoginApp;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY2xpZW50L3NyYy9hcHAvcmVnaXN0cmF0aW9uL2xvZ2luL2NvbXBvbmVudHMvTG9naW5BcHAuanMiXSwibmFtZXMiOlsiX2dldFN0YXRlIiwiaXNMb2dnZWRJbiIsIkxvZ2luQXBwIiwicHJvcHMiLCJfYmluZCIsInN0YXRlIiwiYWRkQ2hhbmdlTGlzdGVuZXIiLCJfb25DaGFuZ2UiLCJyZW1vdmVDaGFuZ2VMaXN0ZW5lciIsInBhZGRpbmdUb3AiLCJfb25TdWJtaXQiLCJzZXRTdGF0ZSIsImV2ZW50IiwiZW1haWwiLCJwYXNzd29yZCIsInByZXZlbnREZWZhdWx0IiwibG9naW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7QUFJQSxTQUFTQSxTQUFULEdBQXFCO0FBQ25CLFNBQU87QUFDTEMsZ0JBQVkscUJBQVdBO0FBRGxCLEdBQVA7QUFHRDs7SUFFS0MsUTs7O0FBRUosb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSEFDWEEsS0FEVzs7QUFHakIsVUFBS0MsS0FBTCxDQUFXLFdBQVgsRUFBd0IsV0FBeEI7QUFDQSxVQUFLQyxLQUFMLEdBQWFMLFdBQWI7QUFKaUI7QUFLbEI7Ozs7d0NBRW1CO0FBQ2xCLDJCQUFXTSxpQkFBWCxDQUE2QixLQUFLQyxTQUFsQztBQUNEOzs7MkNBRXNCO0FBQ3JCLDJCQUFXQyxvQkFBWCxDQUFnQyxLQUFLRCxTQUFyQztBQUNEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsV0FBZjtBQUNFLG1EQUFLLE9BQVEsRUFBQ0UsWUFBWSxLQUFiLEVBQWI7QUFERjtBQURGLFNBREY7QUFNRTtBQUFBO0FBQUEsWUFBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLDBCQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUscUJBQWY7QUFDRTtBQUFBO0FBQUEsa0JBQUssV0FBVSwyQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxzQkFBTSxXQUFVLHFCQUFoQjtBQUFBO0FBQUE7QUFBSjtBQURGLGVBREY7QUFJRTtBQUFBO0FBQUEsa0JBQUssV0FBVSxZQUFmO0FBQ0UscUVBQVcsVUFBVyxLQUFLQyxTQUEzQixHQURGO0FBRUU7QUFBQTtBQUFBLG9CQUFLLFdBQVUsMEJBQWY7QUFDRTtBQUFBO0FBQUEsc0JBQUcsV0FBVSxZQUFiO0FBQTBCO0FBQUE7QUFBQSx3QkFBRyxNQUFLLDJDQUFSO0FBQUE7QUFBQTtBQUExQixtQkFERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUZGO0FBSkY7QUFERjtBQURGO0FBTkYsT0FERjtBQXlCRDs7O2dDQUVXO0FBQ1YsV0FBS0MsUUFBTCxDQUFjWCxXQUFkO0FBQ0Q7Ozs4QkFFU1ksSyxFQUFPQyxLLEVBQU9DLFEsRUFBVTtBQUNoQztBQUNBRixZQUFNRyxjQUFOOztBQUVBLG1DQUFtQkMsS0FBbkIsQ0FBeUJILEtBQXpCLEVBQWdDQyxRQUFoQztBQUNEOzs7Ozs7a0JBSVlaLFEiLCJmaWxlIjoiTG9naW5BcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9naW5TdG9yZSBmcm9tICcuLi9zdG9yZXMvbG9naW5TdG9yZSc7XG5pbXBvcnQgbG9naW5BY3Rpb25DcmVhdG9yIGZyb20gJy4uL2FjdGlvbnMvbG9naW5BY3Rpb25DcmVhdG9yJztcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSAnLi9Mb2dpbkZvcm0nO1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2NvbXBvbmVudHMvQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vKlxuICogQSBwcml2YXRlIG1ldGhvZC4gSXQgc2hvdWxkIG9ubHkgYmUgdXNlZCBieSBgc2V0U3RhdGUoKWAgYW5kIGBnZXRJbml0aWFsU3RhdGUoKWAgdG8gc3luYyB3aXRoXG4gKiB0aGUgZGF0YSBpbiB0aGUgRmx1eCBzdG9yZS5cbiAqL1xuZnVuY3Rpb24gX2dldFN0YXRlKCkge1xuICByZXR1cm4ge1xuICAgIGlzTG9nZ2VkSW46IGxvZ2luU3RvcmUuaXNMb2dnZWRJbixcbiAgfTtcbn1cblxuY2xhc3MgTG9naW5BcHAgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuX2JpbmQoJ19vbkNoYW5nZScsICdfb25TdWJtaXQnKTtcbiAgICB0aGlzLnN0YXRlID0gX2dldFN0YXRlKCk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBsb2dpblN0b3JlLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuX29uQ2hhbmdlKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGxvZ2luU3RvcmUucmVtb3ZlQ2hhbmdlTGlzdGVuZXIodGhpcy5fb25DaGFuZ2UpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLWxnLTEyJz5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9eyB7cGFkZGluZ1RvcDogJzE1JSd9IH0+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLWxnLW9mZnNldC00IGNvbC1sZy00Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYW5lbCBwYW5lbC1kZWZhdWx0Jz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BhbmVsLWhlYWRpbmcgdGV4dC1jZW50ZXInPlxuICAgICAgICAgICAgICAgIDxoND48c3BhbiBjbGFzc05hbWU9J2xhYmVsIGxhYmVsLXByaW1hcnknPlRoZSBFbmdsaXNoIFVuaXZlcnNpdHk8L3NwYW4+PC9oND5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYW5lbC1ib2R5Jz5cbiAgICAgICAgICAgICAgICA8TG9naW5Gb3JtIG9uU3VibWl0PXsgdGhpcy5fb25TdWJtaXQgfSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYW5lbC1mb290ZXIgdGV4dC1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LW11dGVkJz48YSBocmVmPSdtYWlsdG86aW5xdWlyaWVzQFRoZUVuZ2xpc2hVbml2ZXJzaXR5LmNvbSc+RGV2ZWxvcG1lbnQgU3VwcG9ydDwvYT48L3A+XG4gICAgICAgICAgICAgICAgICA8cD52MC4wLjA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIF9vbkNoYW5nZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKF9nZXRTdGF0ZSgpKTtcbiAgfVxuXG4gIF9vblN1Ym1pdChldmVudCwgZW1haWwsIHBhc3N3b3JkKSB7XG4gICAgLy8gUHJldmVudHMgYnJvd3NlcidzIGRlZmF1bHQgbmF2aWdhdGlvbiAocGFnZSByZWZyZXNoKS5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgbG9naW5BY3Rpb25DcmVhdG9yLmxvZ2luKGVtYWlsLCBwYXNzd29yZCk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkFwcDtcbiJdfQ==
//# sourceMappingURL=LoginApp.js.map
