'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LoginApp = require('./registration/login/components/LoginApp');

var _LoginApp2 = _interopRequireDefault(_LoginApp);

var _MemoApp = require('./dashboard/memo/components/MemoApp.js');

var _MemoApp2 = _interopRequireDefault(_MemoApp);

var _BaseComponent3 = require('../common/components/BaseComponent.js');

var _BaseComponent4 = _interopRequireDefault(_BaseComponent3);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactBootstrap = require('react-bootstrap');

var _reactRouterBootstrap = require('react-router-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_BaseComponent) {
  _inherits(App, _BaseComponent);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.props.children
      );
    }
  }]);

  return App;
}(_BaseComponent4.default);

var Dashboard = function (_BaseComponent2) {
  _inherits(Dashboard, _BaseComponent2);

  function Dashboard() {
    _classCallCheck(this, Dashboard);

    return _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).apply(this, arguments));
  }

  _createClass(Dashboard, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactBootstrap.Navbar,
          null,
          _react2.default.createElement(
            _reactBootstrap.Navbar.Header,
            null,
            _react2.default.createElement(
              _reactBootstrap.Navbar.Brand,
              null,
              _react2.default.createElement('img', { src: 'assets/images/logo.jpeg', width: '70px' })
            ),
            _react2.default.createElement(_reactBootstrap.Navbar.Toggle, null)
          ),
          _react2.default.createElement(
            _reactBootstrap.Nav,
            null,
            _react2.default.createElement(
              _reactRouterBootstrap.LinkContainer,
              { to: '/dashbpard/memo' },
              _react2.default.createElement(
                _reactBootstrap.NavItem,
                null,
                'Memo'
              )
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Nav,
            null,
            _react2.default.createElement(
              _reactRouterBootstrap.LinkContainer,
              { to: '/login' },
              _react2.default.createElement(
                _reactBootstrap.NavItem,
                null,
                'Logout'
              )
            )
          )
        ),
        this.props.children
      );
    }
  }]);

  return Dashboard;
}(_BaseComponent4.default);

var clientRoutes = _react2.default.createElement(
  _reactRouter.Router,
  { history: _reactRouter.hashHistory },
  _react2.default.createElement(
    _reactRouter.Route,
    { path: '/', component: App },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _LoginApp2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'login', component: _LoginApp2.default }),
    _react2.default.createElement(
      _reactRouter.Route,
      { path: 'dashboard', component: Dashboard },
      _react2.default.createElement(_reactRouter.IndexRoute, { component: _MemoApp2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: 'memo', component: _MemoApp2.default })
    )
  )
);

exports.default = clientRoutes;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY2xpZW50L3NyYy9hcHAvcm91dGVzLmpzIl0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwiY2hpbGRyZW4iLCJEYXNoYm9hcmQiLCJjbGllbnRSb3V0ZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTUEsRzs7Ozs7Ozs7Ozs7NkJBRUs7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNJLGFBQUtDLEtBQUwsQ0FBV0M7QUFEZixPQURGO0FBS0Q7Ozs7OztJQUlHQyxTOzs7Ozs7Ozs7Ozs2QkFFSztBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQSxtQ0FBUSxNQUFSO0FBQUE7QUFDRTtBQUFBLHFDQUFRLEtBQVI7QUFBQTtBQUNFLHFEQUFLLEtBQUkseUJBQVQsRUFBbUMsT0FBTSxNQUF6QztBQURGLGFBREY7QUFJRSxpRUFBUSxNQUFSO0FBSkYsV0FERjtBQU9FO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxnQkFBZSxJQUFHLGlCQUFsQjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQURGLFdBUEY7QUFZRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsZ0JBQWUsSUFBRyxRQUFsQjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQURGO0FBWkYsU0FERjtBQW1CSSxhQUFLRixLQUFMLENBQVdDO0FBbkJmLE9BREY7QUF1QkQ7Ozs7OztBQUlILElBQU1FLGVBQ0o7QUFBQTtBQUFBLElBQVEsaUNBQVI7QUFDRTtBQUFBO0FBQUEsTUFBTyxNQUFLLEdBQVosRUFBZ0IsV0FBWUosR0FBNUI7QUFDRSw2REFBWSw2QkFBWixHQURGO0FBRUUsd0RBQU8sTUFBSyxPQUFaLEVBQW9CLDZCQUFwQixHQUZGO0FBR0U7QUFBQTtBQUFBLFFBQU8sTUFBSyxXQUFaLEVBQXdCLFdBQVlHLFNBQXBDO0FBQ0UsK0RBQVksNEJBQVosR0FERjtBQUVFLDBEQUFPLE1BQUssTUFBWixFQUFtQiw0QkFBbkI7QUFGRjtBQUhGO0FBREYsQ0FERjs7a0JBYWVDLFkiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgTG9naW5BcHAgZnJvbSAnLi9yZWdpc3RyYXRpb24vbG9naW4vY29tcG9uZW50cy9Mb2dpbkFwcCc7XG5pbXBvcnQgTWVtb0FwcCBmcm9tICcuL2Rhc2hib2FyZC9tZW1vL2NvbXBvbmVudHMvTWVtb0FwcC5qcyc7XG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi9jb21tb24vY29tcG9uZW50cy9CYXNlQ29tcG9uZW50LmpzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlLCBJbmRleFJvdXRlLCBMaW5rLCBoYXNoSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBOYXZiYXIsIE5hdiwgTmF2SXRlbSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBMaW5rQ29udGFpbmVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWJvb3RzdHJhcCc7XG5cbmNsYXNzIEFwcCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgeyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufVxuXG5jbGFzcyBEYXNoYm9hcmQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxOYXZiYXI+XG4gICAgICAgICAgPE5hdmJhci5IZWFkZXI+XG4gICAgICAgICAgICA8TmF2YmFyLkJyYW5kPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvbG9nby5qcGVnXCIgd2lkdGg9XCI3MHB4XCIgLz5cbiAgICAgICAgICAgIDwvTmF2YmFyLkJyYW5kPlxuICAgICAgICAgICAgPE5hdmJhci5Ub2dnbGUgLz5cbiAgICAgICAgICA8L05hdmJhci5IZWFkZXI+XG4gICAgICAgICAgPE5hdj5cbiAgICAgICAgICAgIDxMaW5rQ29udGFpbmVyIHRvPVwiL2Rhc2hicGFyZC9tZW1vXCI+XG4gICAgICAgICAgICAgIDxOYXZJdGVtPk1lbW88L05hdkl0ZW0+XG4gICAgICAgICAgICA8L0xpbmtDb250YWluZXI+XG4gICAgICAgICAgPC9OYXY+XG4gICAgICAgICAgPE5hdj5cbiAgICAgICAgICAgIDxMaW5rQ29udGFpbmVyIHRvPVwiL2xvZ2luXCI+XG4gICAgICAgICAgICAgIDxOYXZJdGVtPkxvZ291dDwvTmF2SXRlbT5cbiAgICAgICAgICAgIDwvTGlua0NvbnRhaW5lcj5cbiAgICAgICAgICA8L05hdj5cbiAgICAgICAgPC9OYXZiYXI+XG4gICAgICAgIHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn1cblxuY29uc3QgY2xpZW50Um91dGVzID0gKFxuICA8Um91dGVyIGhpc3Rvcnk9eyBoYXNoSGlzdG9yeSB9PlxuICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17IEFwcCB9PlxuICAgICAgPEluZGV4Um91dGUgY29tcG9uZW50PXsgTG9naW5BcHAgfSAvPlxuICAgICAgPFJvdXRlIHBhdGg9XCJsb2dpblwiIGNvbXBvbmVudD17IExvZ2luQXBwIH0gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiZGFzaGJvYXJkXCIgY29tcG9uZW50PXsgRGFzaGJvYXJkIH0+XG4gICAgICAgIDxJbmRleFJvdXRlIGNvbXBvbmVudD17IE1lbW9BcHAgfSAvPlxuICAgICAgICA8Um91dGUgcGF0aD1cIm1lbW9cIiBjb21wb25lbnQ9eyBNZW1vQXBwIH0gLz5cbiAgICAgIDwvUm91dGU+XG4gICAgPC9Sb3V0ZT5cbiAgPC9Sb3V0ZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGllbnRSb3V0ZXM7XG4iXX0=
//# sourceMappingURL=routes.js.map
