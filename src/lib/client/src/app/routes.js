import authStore from '../common/stores/authStore';
import HomeApp from './dashboard/home/components/HomeApp';
import ProductsApp from './dashboard/products/components/ProductsApp';
import QuoteApp from './dashboard/quote/components/QuoteApp';
import TeachersApp from './dashboard/teachers/components/TeachersApp';
import LoginApp from './dashboard/login/components/LoginApp';
import SignupApp from './dashboard/signup/components/SignupApp';
import MemoApp from './dashboard/memo/components/MemoApp';
import BaseComponent from '../common/components/BaseComponent';
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class App extends BaseComponent {

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
      tabsShownWhenUserLoggedIn.push(
        <Nav key="0" className="navbar-right">
          <LinkContainer to="/logout">
            <NavItem>Log out</NavItem>
          </LinkContainer>
        </Nav>
      );
    } else {
      tabsShownWhenUserLoggedIn.push(
        <LinkContainer key="1" to="/signup">
          <NavItem>Sign Up</NavItem>
        </LinkContainer>
      );
      tabsShownWhenUserLoggedIn.push(
        <LinkContainer key="2" to="/login">
          <NavItem>Log In</NavItem>
        </LinkContainer>
      );
    }

    return (
      <div>
        <Navbar className="navbar-static-top navbar-custom">
          <Navbar.Header>
            <Navbar.Brand>
              <img className="main-icon" src="/assets/images/logo.jpeg" alt="Icon" />
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav className="navbar-right pointer-cursor">
              <LinkContainer to="/home">
                <NavItem>Home</NavItem>
              </LinkContainer>
              <LinkContainer to="/products">
                <NavItem>Products</NavItem>
              </LinkContainer>
              <LinkContainer to="/quote">
                <NavItem>Get a Quote</NavItem>
              </LinkContainer>
              <LinkContainer to="/teachers">
                <NavItem>Our Teachers</NavItem>
              </LinkContainer>
              <LinkContainer to="/memo">
                <NavItem>Memo</NavItem>
              </LinkContainer>
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

}

const clientRoutes = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ HomeApp} />
      <Route path="home" component={ HomeApp } />
      <Route path="products" component={ ProductsApp } />
      <Route path="quote" component={ QuoteApp } />
      <Route path="teachers" component={ TeachersApp } />
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
