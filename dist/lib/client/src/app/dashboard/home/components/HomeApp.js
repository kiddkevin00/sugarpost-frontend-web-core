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

var HomeApp = function (_BaseComponent) {
  _inherits(HomeApp, _BaseComponent);

  function HomeApp(props) {
    _classCallCheck(this, HomeApp);

    var _this = _possibleConstructorReturn(this, (HomeApp.__proto__ || Object.getPrototypeOf(HomeApp)).call(this, props));

    _this._bind('_onChange');
    _this.state = _getState();
    return _this;
  }

  _createClass(HomeApp, [{
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
            'Welcome to English University!'
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

  return HomeApp;
}(_BaseComponent3.default);

exports.default = HomeApp;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY2xpZW50L3NyYy9hcHAvZGFzaGJvYXJkL2hvbWUvY29tcG9uZW50cy9Ib21lQXBwLmpzIl0sIm5hbWVzIjpbIl9nZXRTdGF0ZSIsIkhvbWVBcHAiLCJwcm9wcyIsIl9iaW5kIiwic3RhdGUiLCJzZXRTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFJQTs7OztBQUNBOzs7Ozs7Ozs7OytlQUxBO0FBQ0E7QUFDQTtBQUNBOzs7QUFJQTs7OztBQUlBLFNBQVNBLFNBQVQsR0FBcUI7QUFDbkIsU0FBTyxFQUFQO0FBRUQ7O0lBRUtDLE87OztBQUVKLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsa0hBQ1hBLEtBRFc7O0FBR2pCLFVBQUtDLEtBQUwsQ0FBVyxXQUFYO0FBQ0EsVUFBS0MsS0FBTCxHQUFhSixXQUFiO0FBSmlCO0FBS2xCOzs7O3dDQUVtQjtBQUNsQjtBQUNEOzs7MkNBRXNCO0FBQ3JCO0FBQ0Q7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxLQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBREYsT0FERjtBQU9EOzs7Z0NBRVc7QUFDVixXQUFLSyxRQUFMLENBQWNMLFdBQWQ7QUFDRDs7Ozs7O2tCQUlZQyxPIiwiZmlsZSI6IkhvbWVBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBtZW1vU3RvcmUgZnJvbSAnLi4vc3RvcmVzL21lbW9TdG9yZSc7XG4vL2ltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuLy9pbXBvcnQgTWFpblNlY3Rpb24gZnJvbSAnLi9NYWluU2VjdGlvbic7XG4vL2ltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInO1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2NvbXBvbmVudHMvQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vKlxuICogQSBwcml2YXRlIG1ldGhvZC4gSXQgc2hvdWxkIG9ubHkgYmUgdXNlZCBieSBgc2V0U3RhdGUoKWAgYW5kIGBnZXRJbml0aWFsU3RhdGUoKWAgdG8gc3luYyB3aXRoXG4gKiB0aGUgZGF0YSBpbiB0aGUgRmx1eCdzIHN0b3JlLlxuICovXG5mdW5jdGlvbiBfZ2V0U3RhdGUoKSB7XG4gIHJldHVybiB7XG4gIH07XG59XG5cbmNsYXNzIEhvbWVBcHAgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuX2JpbmQoJ19vbkNoYW5nZScpO1xuICAgIHRoaXMuc3RhdGUgPSBfZ2V0U3RhdGUoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vbWVtb1N0b3JlLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuX29uQ2hhbmdlKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIC8vbWVtb1N0b3JlLnJlbW92ZUNoYW5nZUxpc3RlbmVyKHRoaXMuX29uQ2hhbmdlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctMTInPlxuICAgICAgICAgIDxwPldlbGNvbWUgdG8gRW5nbGlzaCBVbml2ZXJzaXR5ITwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgX29uQ2hhbmdlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoX2dldFN0YXRlKCkpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZUFwcDtcbiJdfQ==
//# sourceMappingURL=HomeApp.js.map
