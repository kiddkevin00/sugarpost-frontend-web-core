import authStore from '../common/auth/stores/authStore';
import authActionCreator from '../common/auth/actions/authActionCreator';
import HomeApp from './home/components/HomeApp';
import LoginApp from './login/components/LoginApp';
import RegisterApp from './register/';
import SignupApp from './register/signup/components/SignupApp';
import PaymentApp from './register/payment/components/PaymentApp';
import ProfileApp from './profile/components/ProfileApp';
import MemoApp from './memo/components/MemoApp';
import BaseComponent from '../common/components/BaseComponent';
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Scroll from 'react-scroll';

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
        /* eslint-disable jsx-a11y/no-static-element-interactions */
        <NavItem key="2">
          <span onClick={ RootApp._onLogout }>
            Log Out
          </span>
        </NavItem>
        /* eslint-enable */
      ));
    } else {
      tabsShownWhenUserLoggedIn.push((
        <li key="1">
          <a className="page-scroll" href="/#about">About</a>
        </li>
      ), (
        <li key="2">
          <a className="page-scroll" href="/#services">Services</a>
        </li>
      ), (
        <li key="3">
          <a className="page-scroll" href="/#portfolio">Feature</a>
        </li>
      ), (
        <li key="4">
          <a className="page-scroll" href="/#contact">Contact</a>
        </li>
      ), (
        <LinkContainer key="5" to="/register/signup">
          <NavItem>Sign Up</NavItem>
        </LinkContainer>
      ), (
        <LinkContainer key="6" to="/login">
          <NavItem>Log In</NavItem>
        </LinkContainer>
      ));
    }

    return (
      <div id="root-app">
        <Navbar fixedTop={ true } default={ true } collapseOnSelect={ true } fluid={ true }>
          <Navbar.Header>
            <Navbar.Brand>
              <a className="page-scroll" href="/">Sugarpost</a>
            </Navbar.Brand>
            <Navbar.Toggle>Menu</Navbar.Toggle>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav className="navbar-right">
              { tabsShownWhenUserLoggedIn }
            </Nav>
          </Navbar.Collapse>
        </Navbar>

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
