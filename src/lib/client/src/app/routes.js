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
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
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
    let tabsShownWhenUserLoggedIn;

    if (this.state.isLoggedIn) {
      tabsShownWhenUserLoggedIn = (
        <Nav>
          <LinkContainer to="/logout">
            <NavItem>Logout</NavItem>
          </LinkContainer>
        </Nav>
      );
    } else {
      tabsShownWhenUserLoggedIn = (
        <div>
          <Nav>
            <LinkContainer to="/signup">
              <NavItem>Signup</NavItem>
            </LinkContainer>
          </Nav>
          <Nav>
            <LinkContainer to="/login">
              <NavItem>Login</NavItem>
            </LinkContainer>
          </Nav>
        </div>
      );
    }

    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <img src="assets/images/logo.jpeg" width="70px" />
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Nav>
            <LinkContainer to="/home">
              <NavItem>Home</NavItem>
            </LinkContainer>
          </Nav>
          <Nav>
            <LinkContainer to="/products">
              <NavItem>Products</NavItem>
            </LinkContainer>
          </Nav>
          <Nav>
            <LinkContainer to="/quote">
              <NavItem>Get a Quote</NavItem>
            </LinkContainer>
          </Nav>
          <Nav>
            <LinkContainer to="/teachers">
              <NavItem>Our Teachers</NavItem>
            </LinkContainer>
          </Nav>
          <Nav>
            <LinkContainer to="/memo">
              <NavItem>Memo</NavItem>
            </LinkContainer>
          </Nav>
          { tabsShownWhenUserLoggedIn }
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
