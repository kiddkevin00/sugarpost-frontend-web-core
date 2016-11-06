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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //import memoStore from '../stores/memoStore';
//import Header from './Header';
//import MainSection from './MainSection';
//import Footer from './Footer';


/*
 * A private method. It should only be used by `setState()` and `getInitialState()` to sync with
 * the data in the Flux's store.
 */
function _getState() {
  return {};
}

var QuoteApp = function (_BaseComponent) {
  _inherits(QuoteApp, _BaseComponent);

  function QuoteApp(props) {
    _classCallCheck(this, QuoteApp);

    var _this = _possibleConstructorReturn(this, (QuoteApp.__proto__ || Object.getPrototypeOf(QuoteApp)).call(this, props));

    _this._bind('_onChange');
    _this.state = _getState();
    return _this;
  }

  _createClass(QuoteApp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      //memoStore.addChangeListener(this._onChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      //memoStore.removeChangeListener(this._onChange);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-lg-12' },
          _react2.default.createElement(
            'p',
            null,
            'Get a Quote Box Program of study- (allow person option to choose several programs) English classes (fulltime), Skype lessons etc Length of study- Have a calendar to choose start date and for end date Level of study- Drop down of 1-10, 1 being a complete beginner and 10 being advanced Name Email Address Phone number'
          )
        )
      );
    }
  }, {
    key: '_onChange',
    value: function _onChange() {
      this.setState(_getState());
    }
  }]);

  return QuoteApp;
}(_BaseComponent3.default);

exports.default = QuoteApp;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY2xpZW50L3NyYy9hcHAvZGFzaGJvYXJkL3F1b3RlL2NvbXBvbmVudHMvUXVvdGVBcHAuanMiXSwibmFtZXMiOlsiX2dldFN0YXRlIiwiUXVvdGVBcHAiLCJwcm9wcyIsIl9iaW5kIiwic3RhdGUiLCJzZXRTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFJQTs7OztBQUNBOzs7Ozs7Ozs7OytlQUxBO0FBQ0E7QUFDQTtBQUNBOzs7QUFJQTs7OztBQUlBLFNBQVNBLFNBQVQsR0FBcUI7QUFDbkIsU0FBTyxFQUFQO0FBRUQ7O0lBRUtDLFE7OztBQUVKLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0hBQ1hBLEtBRFc7O0FBR2pCLFVBQUtDLEtBQUwsQ0FBVyxXQUFYO0FBQ0EsVUFBS0MsS0FBTCxHQUFhSixXQUFiO0FBSmlCO0FBS2xCOzs7O3dDQUVtQjtBQUNsQjtBQUNEOzs7MkNBRXNCO0FBQ3JCO0FBQ0Q7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxLQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBREYsT0FERjtBQWdCRDs7O2dDQUVXO0FBQ1YsV0FBS0ssUUFBTCxDQUFjTCxXQUFkO0FBQ0Q7Ozs7OztrQkFJWUMsUSIsImZpbGUiOiJRdW90ZUFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IG1lbW9TdG9yZSBmcm9tICcuLi9zdG9yZXMvbWVtb1N0b3JlJztcbi8vaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG4vL2ltcG9ydCBNYWluU2VjdGlvbiBmcm9tICcuL01haW5TZWN0aW9uJztcbi8vaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY29tcG9uZW50cy9CYXNlQ29tcG9uZW50JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8qXG4gKiBBIHByaXZhdGUgbWV0aG9kLiBJdCBzaG91bGQgb25seSBiZSB1c2VkIGJ5IGBzZXRTdGF0ZSgpYCBhbmQgYGdldEluaXRpYWxTdGF0ZSgpYCB0byBzeW5jIHdpdGhcbiAqIHRoZSBkYXRhIGluIHRoZSBGbHV4J3Mgc3RvcmUuXG4gKi9cbmZ1bmN0aW9uIF9nZXRTdGF0ZSgpIHtcbiAgcmV0dXJuIHtcbiAgfTtcbn1cblxuY2xhc3MgUXVvdGVBcHAgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuX2JpbmQoJ19vbkNoYW5nZScpO1xuICAgIHRoaXMuc3RhdGUgPSBfZ2V0U3RhdGUoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vbWVtb1N0b3JlLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuX29uQ2hhbmdlKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIC8vbWVtb1N0b3JlLnJlbW92ZUNoYW5nZUxpc3RlbmVyKHRoaXMuX29uQ2hhbmdlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctMTInPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgR2V0IGEgUXVvdGUgQm94XG5cbiAgICAgICAgICAgIFByb2dyYW0gb2Ygc3R1ZHktIChhbGxvdyBwZXJzb24gb3B0aW9uIHRvIGNob29zZSBzZXZlcmFsIHByb2dyYW1zKSBFbmdsaXNoIGNsYXNzZXMgKGZ1bGx0aW1lKSwgU2t5cGUgbGVzc29ucyBldGNcbiAgICAgICAgICAgIExlbmd0aCBvZiBzdHVkeS0gSGF2ZSBhIGNhbGVuZGFyIHRvIGNob29zZSBzdGFydCBkYXRlIGFuZCBmb3IgZW5kIGRhdGVcbiAgICAgICAgICAgIExldmVsIG9mIHN0dWR5LSBEcm9wIGRvd24gb2YgMS0xMCwgMSBiZWluZyBhIGNvbXBsZXRlIGJlZ2lubmVyIGFuZCAxMCBiZWluZyBhZHZhbmNlZFxuICAgICAgICAgICAgTmFtZVxuICAgICAgICAgICAgRW1haWwgQWRkcmVzc1xuICAgICAgICAgICAgUGhvbmUgbnVtYmVyXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBfb25DaGFuZ2UoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShfZ2V0U3RhdGUoKSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBRdW90ZUFwcDtcbiJdfQ==
//# sourceMappingURL=QuoteApp.js.map
