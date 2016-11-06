'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LoginApp = require('./registration/login/components/LoginApp');

var _LoginApp2 = _interopRequireDefault(_LoginApp);

var _HomeApp = require('./dashboard/home/components/HomeApp');

var _HomeApp2 = _interopRequireDefault(_HomeApp);

var _ProductsApp = require('./dashboard/products/components/ProductsApp');

var _ProductsApp2 = _interopRequireDefault(_ProductsApp);

var _QuoteApp = require('./dashboard/quote/components/QuoteApp');

var _QuoteApp2 = _interopRequireDefault(_QuoteApp);

var _TeachersApp = require('./dashboard/teachers/components/TeachersApp');

var _TeachersApp2 = _interopRequireDefault(_TeachersApp);

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
              { to: '/dashboard/home' },
              _react2.default.createElement(
                _reactBootstrap.NavItem,
                null,
                'Home'
              )
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Nav,
            null,
            _react2.default.createElement(
              _reactRouterBootstrap.LinkContainer,
              { to: '/dashboard/products' },
              _react2.default.createElement(
                _reactBootstrap.NavItem,
                null,
                'Products'
              )
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Nav,
            null,
            _react2.default.createElement(
              _reactRouterBootstrap.LinkContainer,
              { to: '/dashboard/quote' },
              _react2.default.createElement(
                _reactBootstrap.NavItem,
                null,
                'Get a Quote'
              )
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Nav,
            null,
            _react2.default.createElement(
              _reactRouterBootstrap.LinkContainer,
              { to: '/dashboard/teachers' },
              _react2.default.createElement(
                _reactBootstrap.NavItem,
                null,
                'Our Teachers'
              )
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Nav,
            null,
            _react2.default.createElement(
              _reactRouterBootstrap.LinkContainer,
              { to: '/dashboard/memo' },
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
      _react2.default.createElement(_reactRouter.IndexRoute, { component: _HomeApp2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: 'home', component: _HomeApp2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: 'products', component: _ProductsApp2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: 'quote', component: _QuoteApp2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: 'teachers', component: _TeachersApp2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: 'memo', component: _MemoApp2.default })
    )
  )
);

exports.default = clientRoutes;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY2xpZW50L3NyYy9hcHAvcm91dGVzLmpzIl0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwiY2hpbGRyZW4iLCJEYXNoYm9hcmQiLCJjbGllbnRSb3V0ZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUVNQSxHOzs7Ozs7Ozs7Ozs2QkFFSztBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0ksYUFBS0MsS0FBTCxDQUFXQztBQURmLE9BREY7QUFLRDs7Ozs7O0lBSUdDLFM7Ozs7Ozs7Ozs7OzZCQUVLO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBLG1DQUFRLE1BQVI7QUFBQTtBQUNFO0FBQUEscUNBQVEsS0FBUjtBQUFBO0FBQ0UscURBQUssS0FBSSx5QkFBVCxFQUFtQyxPQUFNLE1BQXpDO0FBREYsYUFERjtBQUlFLGlFQUFRLE1BQVI7QUFKRixXQURGO0FBT0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGdCQUFlLElBQUcsaUJBQWxCO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBREYsV0FQRjtBQVlFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxnQkFBZSxJQUFHLHFCQUFsQjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQURGLFdBWkY7QUFpQkU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGdCQUFlLElBQUcsa0JBQWxCO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBREYsV0FqQkY7QUFzQkU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGdCQUFlLElBQUcscUJBQWxCO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBREYsV0F0QkY7QUEyQkU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGdCQUFlLElBQUcsaUJBQWxCO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBREYsV0EzQkY7QUFnQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGdCQUFlLElBQUcsUUFBbEI7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFERjtBQWhDRixTQURGO0FBdUNJLGFBQUtGLEtBQUwsQ0FBV0M7QUF2Q2YsT0FERjtBQTJDRDs7Ozs7O0FBSUgsSUFBTUUsZUFDSjtBQUFBO0FBQUEsSUFBUSxpQ0FBUjtBQUNFO0FBQUE7QUFBQSxNQUFPLE1BQUssR0FBWixFQUFnQixXQUFZSixHQUE1QjtBQUNFLDZEQUFZLDZCQUFaLEdBREY7QUFFRSx3REFBTyxNQUFLLE9BQVosRUFBb0IsNkJBQXBCLEdBRkY7QUFHRTtBQUFBO0FBQUEsUUFBTyxNQUFLLFdBQVosRUFBd0IsV0FBWUcsU0FBcEM7QUFDRSwrREFBWSw0QkFBWixHQURGO0FBRUUsMERBQU8sTUFBSyxNQUFaLEVBQW1CLDRCQUFuQixHQUZGO0FBR0UsMERBQU8sTUFBSyxVQUFaLEVBQXVCLGdDQUF2QixHQUhGO0FBSUUsMERBQU8sTUFBSyxPQUFaLEVBQW9CLDZCQUFwQixHQUpGO0FBS0UsMERBQU8sTUFBSyxVQUFaLEVBQXVCLGdDQUF2QixHQUxGO0FBTUUsMERBQU8sTUFBSyxNQUFaLEVBQW1CLDRCQUFuQjtBQU5GO0FBSEY7QUFERixDQURGOztrQkFpQmVDLFkiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgTG9naW5BcHAgZnJvbSAnLi9yZWdpc3RyYXRpb24vbG9naW4vY29tcG9uZW50cy9Mb2dpbkFwcCc7XG5pbXBvcnQgSG9tZUFwcCBmcm9tICcuL2Rhc2hib2FyZC9ob21lL2NvbXBvbmVudHMvSG9tZUFwcCc7XG5pbXBvcnQgUHJvZHVjdHNBcHAgZnJvbSAnLi9kYXNoYm9hcmQvcHJvZHVjdHMvY29tcG9uZW50cy9Qcm9kdWN0c0FwcCc7XG5pbXBvcnQgUXVvdGVBcHAgZnJvbSAnLi9kYXNoYm9hcmQvcXVvdGUvY29tcG9uZW50cy9RdW90ZUFwcCc7XG5pbXBvcnQgVGVhY2hlcnNBcHAgZnJvbSAnLi9kYXNoYm9hcmQvdGVhY2hlcnMvY29tcG9uZW50cy9UZWFjaGVyc0FwcCc7XG5pbXBvcnQgTWVtb0FwcCBmcm9tICcuL2Rhc2hib2FyZC9tZW1vL2NvbXBvbmVudHMvTWVtb0FwcC5qcyc7XG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuLi9jb21tb24vY29tcG9uZW50cy9CYXNlQ29tcG9uZW50LmpzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlLCBJbmRleFJvdXRlLCBMaW5rLCBoYXNoSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBOYXZiYXIsIE5hdiwgTmF2SXRlbSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBMaW5rQ29udGFpbmVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWJvb3RzdHJhcCc7XG5cbmNsYXNzIEFwcCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgeyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufVxuXG5jbGFzcyBEYXNoYm9hcmQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxOYXZiYXI+XG4gICAgICAgICAgPE5hdmJhci5IZWFkZXI+XG4gICAgICAgICAgICA8TmF2YmFyLkJyYW5kPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvbG9nby5qcGVnXCIgd2lkdGg9XCI3MHB4XCIgLz5cbiAgICAgICAgICAgIDwvTmF2YmFyLkJyYW5kPlxuICAgICAgICAgICAgPE5hdmJhci5Ub2dnbGUgLz5cbiAgICAgICAgICA8L05hdmJhci5IZWFkZXI+XG4gICAgICAgICAgPE5hdj5cbiAgICAgICAgICAgIDxMaW5rQ29udGFpbmVyIHRvPVwiL2Rhc2hib2FyZC9ob21lXCI+XG4gICAgICAgICAgICAgIDxOYXZJdGVtPkhvbWU8L05hdkl0ZW0+XG4gICAgICAgICAgICA8L0xpbmtDb250YWluZXI+XG4gICAgICAgICAgPC9OYXY+XG4gICAgICAgICAgPE5hdj5cbiAgICAgICAgICAgIDxMaW5rQ29udGFpbmVyIHRvPVwiL2Rhc2hib2FyZC9wcm9kdWN0c1wiPlxuICAgICAgICAgICAgICA8TmF2SXRlbT5Qcm9kdWN0czwvTmF2SXRlbT5cbiAgICAgICAgICAgIDwvTGlua0NvbnRhaW5lcj5cbiAgICAgICAgICA8L05hdj5cbiAgICAgICAgICA8TmF2PlxuICAgICAgICAgICAgPExpbmtDb250YWluZXIgdG89XCIvZGFzaGJvYXJkL3F1b3RlXCI+XG4gICAgICAgICAgICAgIDxOYXZJdGVtPkdldCBhIFF1b3RlPC9OYXZJdGVtPlxuICAgICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxuICAgICAgICAgIDwvTmF2PlxuICAgICAgICAgIDxOYXY+XG4gICAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9kYXNoYm9hcmQvdGVhY2hlcnNcIj5cbiAgICAgICAgICAgICAgPE5hdkl0ZW0+T3VyIFRlYWNoZXJzPC9OYXZJdGVtPlxuICAgICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxuICAgICAgICAgIDwvTmF2PlxuICAgICAgICAgIDxOYXY+XG4gICAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9kYXNoYm9hcmQvbWVtb1wiPlxuICAgICAgICAgICAgICA8TmF2SXRlbT5NZW1vPC9OYXZJdGVtPlxuICAgICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxuICAgICAgICAgIDwvTmF2PlxuICAgICAgICAgIDxOYXY+XG4gICAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9sb2dpblwiPlxuICAgICAgICAgICAgICA8TmF2SXRlbT5Mb2dvdXQ8L05hdkl0ZW0+XG4gICAgICAgICAgICA8L0xpbmtDb250YWluZXI+XG4gICAgICAgICAgPC9OYXY+XG4gICAgICAgIDwvTmF2YmFyPlxuICAgICAgICB7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59XG5cbmNvbnN0IGNsaWVudFJvdXRlcyA9IChcbiAgPFJvdXRlciBoaXN0b3J5PXsgaGFzaEhpc3RvcnkgfT5cbiAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9eyBBcHAgfT5cbiAgICAgIDxJbmRleFJvdXRlIGNvbXBvbmVudD17IExvZ2luQXBwIH0gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwibG9naW5cIiBjb21wb25lbnQ9eyBMb2dpbkFwcCB9IC8+XG4gICAgICA8Um91dGUgcGF0aD1cImRhc2hib2FyZFwiIGNvbXBvbmVudD17IERhc2hib2FyZCB9PlxuICAgICAgICA8SW5kZXhSb3V0ZSBjb21wb25lbnQ9eyBIb21lQXBwfSAvPlxuICAgICAgICA8Um91dGUgcGF0aD1cImhvbWVcIiBjb21wb25lbnQ9eyBIb21lQXBwIH0gLz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCJwcm9kdWN0c1wiIGNvbXBvbmVudD17IFByb2R1Y3RzQXBwIH0gLz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCJxdW90ZVwiIGNvbXBvbmVudD17IFF1b3RlQXBwIH0gLz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCJ0ZWFjaGVyc1wiIGNvbXBvbmVudD17IFRlYWNoZXJzQXBwIH0gLz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCJtZW1vXCIgY29tcG9uZW50PXsgTWVtb0FwcCB9IC8+XG4gICAgICA8L1JvdXRlPlxuICAgIDwvUm91dGU+XG4gIDwvUm91dGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xpZW50Um91dGVzO1xuIl19
//# sourceMappingURL=routes.js.map
