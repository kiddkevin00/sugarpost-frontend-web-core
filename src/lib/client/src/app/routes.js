import authStore from '../common/auth/stores/authStore';
import authActionCreator from '../common/auth/actions/authActionCreator';
import RegisterApp from './register/';
import LoginApp from './register/login/components/LoginApp';
import ForgotPasswordApp from './register/forgot-password/components/ForgotPasswordApp';
import SignupApp from './register/signup/components/SignupApp';
import PaymentApp from './register/payment/components/PaymentApp';
import AccountApp from './account/components/AccountApp';
import VoucherApp from './voucher/components/VoucherApp';
import ReferralApp from './register/referral/components/ReferralApp';
import HomeApp from './home/components/HomeApp';
import MemoApp from './memo/components/MemoApp';
import ScrollDiv from '../common/components/ScrollDiv';
import BaseComponent from '../common/components/BaseComponent';
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-scroll';

class RootApp extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onChange');
    this.state = _getState();
  }

  componentDidMount() {
    authStore.addChangeListener(this._onChange);

    //if (!this.state.isLoggedIn) {
    //  authActionCreator.authCheck();
    //}
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    //if (!nextState.isLoggedIn && (
    //  nextContext.router.isActive('/account') ||
    //  nextContext.router.isActive('/register/payment')
    //)) {
    //  nextContext.router.push('/login');
    //}
  }

  componentWillUnmount() {
    authStore.removeChangeListener(this._onChange);
  }

  render() {
    const tabsShownWhenUserLoggedIn = [];

    if (this.state.isLoggedIn) {
      tabsShownWhenUserLoggedIn.push((
        <LinkContainer key="1" to="/account">
          <NavItem>Account</NavItem>
        </LinkContainer>
      ), (
        <LinkContainer key="2" to={ { pathname: '/register/payment', query: { email: this.state.user.email } } }>
          <NavItem>Payment</NavItem>
        </LinkContainer>
      ), (
        <LinkContainer key="3" to="/voucher">
          <NavItem>Voucher</NavItem>
        </LinkContainer>
      ), (
        <LinkContainer key="4" to="/register/referral">
          <NavItem>Referral</NavItem>
        </LinkContainer>
      ), (
        /* eslint-disable jsx-a11y/no-static-element-interactions */
        <NavItem key="5">
          <span onClick={ RootApp._onLogout }>
            Log Out
          </span>
        </NavItem>
        /* eslint-enable */
      ));
    } else {
      tabsShownWhenUserLoggedIn.push((
        <li key="1">
          <LinkContainer to="/">
            <Link
              activeClass="active"
              className="page-scroll"
              to="about"
              spy={ true }
              smooth={ true }
              duration={ 700 }
              delay={ 300 }
            >
              About
            </Link>
          </LinkContainer>
        </li>
      ), (
        <li key="2">
          <LinkContainer to="/">
            <Link
              activeClass="active"
              className="page-scroll"
              to="services"
              spy={ true }
              smooth={ true }
              duration={ 700 }
              delay={ 300 }
            >
              Services
            </Link>
          </LinkContainer>
        </li>
      ), (
        <li key="3">
          <LinkContainer to="/">
            <Link
              activeClass="active"
              className="page-scroll"
              to="portfolio"
              spy={ true }
              smooth={ true }
              duration={ 700 }
              delay={ 300 }
            >
              Featured
            </Link>
          </LinkContainer>
        </li>
      ), (
        <li key="4">
          <LinkContainer to="/">
            <Link
              activeClass="active"
              className="page-scroll"
              to="contact"
              spy={ true }
              smooth={ true }
              duration={ 700 }
              delay={ 300 }
            >
              Contact
            </Link>
          </LinkContainer>
        </li>
      ), (
        <li key="5">
          <LinkContainer to="/register/signup">
            <Link
              activeClass="active"
              className="page-scroll"
              to="registration"
              spy={ true }
              smooth={ true }
              duration={ 700 }
              delay={ 300 }
            >
              Signup
            </Link>
          </LinkContainer>
        </li>
      ), (
        <li key="6">
          <LinkContainer to="/register/login">
            <Link
              activeClass="active"
              className="page-scroll"
              to="registration"
              spy={ true }
              smooth={ true }
              duration={ 700 }
              delay={ 300 }
            >
              Login
            </Link>
          </LinkContainer>
        </li>
      ));
    }

    return (
      <div id="root-app">
        <ScrollDiv
          activeClass="scroll"
          className="navbar navbar-default navbar-fixed-top"
          to="main"
          spy={ true }
          smooth={ true }
        >
          <Navbar fixedTop={ true } default={ true } collapseOnSelect={ true } fluid={ true }>
            <Navbar.Header>
              <Navbar.Brand>
                <LinkContainer to="/">
                  <a className="page-scroll" href="/">Sugarpost</a>
                </LinkContainer>
              </Navbar.Brand>
              <Navbar.Toggle>Menu</Navbar.Toggle>
            </Navbar.Header>
            <Navbar.Collapse>
              <ul className="nav navbar-nav navbar-right">
                { tabsShownWhenUserLoggedIn }
              </ul>
            </Navbar.Collapse>
          </Navbar>
        </ScrollDiv>

        { this.props.children }

      </div>
    );
  }

  _onChange() {
    this.setState(_getState());
  }

  static _onLogout() {
    authActionCreator.logout();
  }

  static _onLink(url) {
    const win = window.open(url, '_blank');

    win.focus();
  }

}
RootApp.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

/*
 * A private method. It should only be used by `setState()` and `getInitialState()` to sync up
 * the data in the Flux's store.
 */
function _getState() {
  return {
    isLoggedIn: authStore.isLoggedIn(),
    user: authStore.getUser(),
  };
}

const clientRoutes = (
  <Router history={ browserHistory }>
    <Route path="/" component={ RootApp }>
      <IndexRoute component={ HomeApp } />
      <Route path="register" component={ RegisterApp }>
        <Route path="login" component={ LoginApp } />
        <Route path="signup" component={ SignupApp } />
        <Route path="payment" component={ PaymentApp } />
        <Route path="forgot-password" component={ ForgotPasswordApp } />
        <Route path="referral" component={ ReferralApp } onEnter={ inTransition } />
      </Route>
      <Route path="account" component={ AccountApp } onEnter={ inTransition } />
      <Route path="voucher" component={ VoucherApp } onEnter={ inTransition } />
      <Route path="memo" component={ MemoApp } />
    </Route>
  </Router>
);

function inTransition(nextState, replace) {
  authActionCreator.inTransition(nextState, replace);
}

export default clientRoutes;
