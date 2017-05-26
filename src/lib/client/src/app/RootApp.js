import authActionCreator from '../common/auth/actioncreator/';
import HomeApp from './home/components/App';
import AsyncRoute from '../common/components/AsyncRoute';
import BaseComponent from '../common/components/BaseComponent';
import constants from '../common/constants/';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link, NavLink, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';

class RootApp extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onLogout');
  }

  render() {
    const tabsShownWhenUserLoggedIn = [];
    const accountTab = (
      <li key="1">
        <NavLink
          to="/account"
          activeClassName="active"
          className="page-scroll"
        >
          Account
        </NavLink>
      </li>
    );
    const paymentTab = (
      <li key="2">
        <NavLink
          to={ { pathname: '/register/payment', search: `?email=${this.props.userEmail}` } }
          activeClassName="active"
          className="page-scroll"
        >
          Payment
        </NavLink>
      </li>
    );
    const voucherTab = (
      <li key="3">
        <NavLink
          to="/vouchers"
          activeClassName="active"
          className="page-scroll"
        >
          Vouchers
        </NavLink>
      </li>
    );
    const referralTab = (
      <li key="4">
        <NavLink
          to="/register/referral"
          activeClassName="active"
          className="page-scroll"
        >
          Referral
        </NavLink>
      </li>
    );
    const logoutTab = (
      /* eslint-disable jsx-a11y/no-static-element-interactions */
      <NavItem key="5">
        <span onClick={ this._onLogout }>
          Logout
        </span>
      </NavItem>
      /* eslint-enable */
    );
    const aboutTab = (
      <li key="6">
        <a href="/#about" className="page-scroll">
          About
        </a>
      </li>
    );
    const servicesTab = (
      <li key="7">
        <a href="/#services" className="page-scroll">
          Services
        </a>
      </li>
    );
    const portfolioTab = (
      <li key="8">
        <a href="/#portfolio" className="page-scroll">
          Featured
        </a>
      </li>
    );
    const contactTab = (
      <li key="9">
        <a href="/#contact" className="page-scroll">
          Contact
        </a>
      </li>
    );
    const signupTab = (
      <li key="10">
        <NavLink
          to="/register/signup"
          activeClassName="active"
          className="page-scroll"
        >
          Signup
        </NavLink>
      </li>
    );
    const loginTab = (
      <li key="11">
        <NavLink
          to="/register/login"
          activeClassName="active"
          className="page-scroll"
        >
          Login
        </NavLink>
      </li>
    );

    if (this.props.isLoggedIn) {
      switch (this.props.userType) {
        case constants.SYSTEM.USER_TYPES.UNPAID:
          tabsShownWhenUserLoggedIn.push(accountTab, paymentTab, logoutTab);
          break;
        case constants.SYSTEM.USER_TYPES.PAID:
          tabsShownWhenUserLoggedIn.push(accountTab, voucherTab, referralTab, logoutTab);
          break;
        case constants.SYSTEM.USER_TYPES.CANCELLED:
          tabsShownWhenUserLoggedIn.push(accountTab, paymentTab, voucherTab, referralTab,
            logoutTab);
          break;
        case constants.SYSTEM.USER_TYPES.INFLUENCER:
          tabsShownWhenUserLoggedIn.push(accountTab, paymentTab, voucherTab, referralTab,
            logoutTab);
          break;
        case constants.SYSTEM.USER_TYPES.VENDOR:
          tabsShownWhenUserLoggedIn.push(accountTab, logoutTab);
          break;
        case constants.SYSTEM.USER_TYPES.ADMIN:
          tabsShownWhenUserLoggedIn.push(accountTab, paymentTab, voucherTab, referralTab,
            logoutTab);
          break;
        default:
          tabsShownWhenUserLoggedIn.push(logoutTab);
          break;
      }
    } else if (typeof window !== 'undefined' && window.innerWidth < 768) {
      tabsShownWhenUserLoggedIn.push(aboutTab, signupTab, loginTab);
    } else {
      tabsShownWhenUserLoggedIn.push(aboutTab, servicesTab, portfolioTab, contactTab, signupTab,
        loginTab);
    }

    return (
      <div id="root-app">
        <Navbar fixedTop={ true } default={ true } collapseOnSelect={ true } fluid={ true }>
          <Navbar.Header>
            <Navbar.Brand>
              <NavLink to="/" activeClassName="active" className="page-scroll">
                Sugarpost
              </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle>Menu</Navbar.Toggle>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight={ true }>
              { tabsShownWhenUserLoggedIn }
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route exact={ true } path="/" component={ HomeApp } />
        <Route
          path="/register"
          render={ (props) => (
            <AsyncRoute
              props={ props }
              loadingPromise={ System.import('./register/') }
            />
          ) }
        />
        <Route
          exact={ true }
          path="/privacy-policy"
          render={ (props) => (
            <AsyncRoute
              props={ props }
              loadingPromise={ System.import('./privacy-policy/components/App') }
            />
          ) }
        />
        <Route
          exact={ true }
          path="/terms-of-use"
          render={ (props) => (
            <AsyncRoute
              props={ props }
              loadingPromise={ System.import('./terms-of-use/components/App') }
            />
          ) }
        />
        <Route
          exact={ true }
          path="/account"
          render={ (props) => (
            <AsyncRoute
              props={ props }
              loadingPromise={ System.import('./account/components/App') }
            />
          ) }
        />
        <Route
          exact={ true }
          path="/vouchers"
          render={ (props) => (
            <AsyncRoute
              props={ props }
              loadingPromise={ System.import('./voucher/components/VoucherApp') }
            />
          ) }
        />
      </div>
    );
  }

  _onLogout() {
    this.props.dispatchLogout();
  }

  static _onLink(url) {
    const win = window.open(url, '_blank');

    win.focus();
  }

}
RootApp.propTypes = {
  dispatchLogout: PropTypes.func.isRequired,

  isLoggedIn: PropTypes.bool.isRequired,
  userType: PropTypes.string,
  userEmail: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    userType: state.auth.user.type,
    userEmail: state.auth.user.email,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatchLogout() {
      dispatch(authActionCreator.logout());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RootApp);
