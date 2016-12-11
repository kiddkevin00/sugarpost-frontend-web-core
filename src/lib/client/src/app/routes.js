import authStore from '../common/auth/stores/authStore';
import authActionCreator from '../common/auth/actions/authActionCreator';
import HomeApp from './home/components/HomeApp';
import LoginApp from './login/components/LoginApp';
import SignupApp from './signup/components/SignupApp';
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
    authStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    authStore.removeChangeListener(this._onChange);
  }

  render() {
    const tabsShownWhenUserLoggedIn = [];

    if (this.state.isLoggedIn) {
      /* eslint-disable jsx-a11y/no-static-element-interactions */
      tabsShownWhenUserLoggedIn.push(
        <NavItem key="0">
          <div onClick={ RootApp._onLogout }>
            Log out
          </div>
        </NavItem>
      );
      /* eslint-enable */
    } else {
      tabsShownWhenUserLoggedIn.push((
        <LinkContainer key="1" to="/signup">
          <NavItem>Sign Up</NavItem>
        </LinkContainer>
      ), (
        <LinkContainer key="2" to="/login">
          <NavItem>Log In</NavItem>
        </LinkContainer>
      ));
    }

    return (
      <div>
        {/*
        <Navbar className="navbar-fixed-top navbar-custom">
          <Navbar.Header>
            <Navbar.Brand>
              <img className="icon-custom" src="/assets/images/logo-tmp.jpg" alt="Icon" />
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav className="navbar-right">
              <LinkContainer to="/home">
                <NavItem>Home</NavItem>
              </LinkContainer>
              { tabsShownWhenUserLoggedIn }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        */}

        { this.props.children }

        <div className="footer-hack" />
        <Navbar className="navbar footer-custom">
          <Navbar.Header>
            <Navbar.Brand>
              <img className="icon-custom" src="/assets/images/logo-tmp.jpg" alt="Sugarpost Icon" />
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse className="navbar-collapse-custom">
            <Nav className="navbar-right">
              <NavItem>
                {/* eslint-disable jsx-a11y/no-static-element-interactions */}
                <div onClick={ RootApp._onLink.bind(null, 'https://www.facebook.com/mysugarpost') } className="bold-font-custom">
                  <img src="/assets/images/facebook.ico" alt="Facebook Icon" />
                </div>
              </NavItem>
              <NavItem>
                <div onClick={ RootApp._onLink.bind(null, 'https://www.instagram.com/mysugarpost/') } className="bold-font-custom">
                  <img src="/assets/images/instagram.ico" alt="Instagram Icon" />
                </div>
              </NavItem>
              <NavItem>
                <div onClick={ RootApp._onLink.bind(null, 'https://twitter.com/mysugarpost') } className="bold-font-custom">
                  <img src="/assets/images/twitter.ico" alt="Twitter Icon" />
                </div>
                {/* eslint-enable */}
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

const clientRoutes = (
  <Router history={ hashHistory }>
    <Route path="/" component={ RootApp }>
      <IndexRoute component={ HomeApp } />
      <Route path="home" component={ HomeApp } />
      <Route path="memo" component={ MemoApp } />
      <Route path="signup" component={ SignupApp } />
      <Route path="login" component={ LoginApp } />
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
