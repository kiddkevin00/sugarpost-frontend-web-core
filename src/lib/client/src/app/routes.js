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
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

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
      this.context.router.push('/home');
    }
  }

  componentWillUnmount() {
    authStore.removeChangeListener(this._onChange);
  }

  render() {
    const tabsShownWhenUserLoggedIn = [];

    if (this.state.isLoggedIn) {
      tabsShownWhenUserLoggedIn.push((
        <LinkContainer key="0" to="/profile">
          <NavItem>Profile</NavItem>
        </LinkContainer>
      ), (
        /* eslint-disable jsx-a11y/no-static-element-interactions */
        <NavItem key="1">
          <div onClick={ RootApp._onLogout }>
            Log Out
          </div>
        </NavItem>
        /* eslint-enable */
      ));
    } else {
      tabsShownWhenUserLoggedIn.push((
        <LinkContainer key="2" to="/register/signup">
          <NavItem>Sign Up</NavItem>
        </LinkContainer>
      ), (
        <LinkContainer key="3" to="/login">
          <NavItem>Log In</NavItem>
        </LinkContainer>
      ));

    }

    return (
      <div id="page-top">

      <nav id="mainNav" className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                </button>
                <a className="navbar-brand page-scroll" href="#page-top">Start Bootstrap</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <a className="page-scroll" href="#about">About</a>
                    </li>
                    <li>
                        <a className="page-scroll" href="#services">Services</a>
                    </li>
                    <li>
                        <a className="page-scroll" href="#portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a className="page-scroll" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

        {/* <div className="header-hack" /> */}

        { this.props.children }

        <div className="footer-hack" />
        <Navbar className="footer-custom">
          <Navbar.Header>
            <Navbar.Brand className="footer-navbar-brand-custom">
              <a>©Sugarpost 2016</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse className="navbar-collapse-custom">
            <Nav className="navbar-right">
              <NavItem>
                {/* eslint-disable jsx-a11y/no-static-element-interactions, max-len */}
                <div
                  onClick={ RootApp._onLink.bind(null, 'https://www.instagram.com/mysugarpost/') }
                >
                  <img src="/assets/images/instagram-icon.png" alt="instagram" />
                </div>
              </NavItem>
              <NavItem>
                <div onClick={ RootApp._onLink.bind(null, 'https://www.facebook.com/mysugarpost') }>
                  <img src="/assets/images/facebook-icon.png" alt="facebook" />
                </div>
              </NavItem>
              <NavItem>
                <div onClick={ RootApp._onLink.bind(null, 'https://twitter.com/mysugarpost') }>
                  {/* eslint-enable */}
                  <img src="/assets/images/twitter-icon.png" alt="twitter" />
                </div>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
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
  <Router history={ hashHistory }>
    <Route path="/" component={ RootApp }>
      <IndexRoute component={ HomeApp } />
      <Route path="home" component={ HomeApp } />
      <Route path="register" component={ RegisterApp }>
        <IndexRoute component={ SignupApp } />
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
