import authStore from '../common/auth/stores/authStore';
import authActionCreator from '../common/auth/actions/authActionCreator';
import HomeApp from './home/components/HomeApp';
import ForgotPassword from './forgot-password/components/ForgotPasswordApp';
import LoginApp from './login/components/LoginApp';
import RegisterApp from './register/';
import SignupApp from './register/signup/components/SignupApp';
import PaymentApp from './register/payment/components/PaymentApp';
import ProfileApp from './profile/components/ProfileApp';
import MemoApp from './memo/components/MemoApp';
import BaseComponent from '../common/components/BaseComponent';
import ScrollDiv from '../common/components/ScrollDiv';
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
    if (!this.state.isLoggedIn) {
      authActionCreator.authCheck();
    }

    authStore.addChangeListener(this._onChange);
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    if (!nextState.isLoggedIn && (
      nextContext.router.isActive('/profile') ||
      nextContext.router.isActive('/register/payment')
    )) {
      this.context.router.push('/');
    }
  }

  componentWillUnmount() {
    authStore.removeChangeListener(this._onChange);
  }

  render() {
    const tabsShownWhenUserLoggedIn = [];

    if (this.state.isLoggedIn) {
      tabsShownWhenUserLoggedIn.push((
        <LinkContainer key="1" to="/profile">
          <NavItem>Profile</NavItem>
        </LinkContainer>
      ), (
        <LinkContainer key="2" to="/register/payment">
          <NavItem>Payment</NavItem>
        </LinkContainer>
      ), (
        /* eslint-disable jsx-a11y/no-static-element-interactions */
        <NavItem key="3">
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
        <LinkContainer key="5" to="/register/signup">
          <NavItem>Sign Up</NavItem>
        </LinkContainer>
      ), (
        <LinkContainer key="6" to="/login">
          <NavItem>Log In</NavItem>
        </LinkContainer>
      ), (
        <LinkContainer key="7" to="/forgot-password">
          <NavItem>Forgot Password</NavItem>
        </LinkContainer>
      ));
    }

    let navbar;

    if (
      !this.context.router.isActive('/register/signup') &&
      !this.context.router.isActive('/login') &&
      !this.context.router.isActive('/register/payment') &&
      !this.context.router.isActive('/forgot-password')
    ) {
      navbar = (
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
      );
    } else {
      navbar = (
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
      );
    }

    return (
      <div id="root-app">
        { navbar }

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

const clientRoutes = (
  <Router history={ browserHistory }>
    <Route path="/" component={ RootApp }>
      <IndexRoute component={ HomeApp } />
      <Route path="register" component={ RegisterApp }>
        <Route path="signup" component={ SignupApp } />
        <Route path="payment" component={ PaymentApp } />
      </Route>
      <Route path="login" component={ LoginApp } />
      <Route path="forgot-password" component={ ForgotPassword } />
      <Route path="profile" component={ ProfileApp } />
      <Route path="memo" component={ MemoApp } />
    </Route>
  </Router>
);

/*
 * A private method. It should only be used by `setState()` and `getInitialState()` to sync up
 * the data in the Flux's store.
 */
function _getState() {
  return {
    isLoggedIn: authStore.isLoggedIn(),
  };
}

export default clientRoutes;
