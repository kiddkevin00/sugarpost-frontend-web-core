'use strict';

import LoginApp from './registration/login/components/LoginApp';
import MemoApp from './dashboard/memo/components/MemoApp.js';
import BaseComponent from '../common/components/BaseComponent.js';
import React from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class App extends BaseComponent {

  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }

}

class Dashboard extends BaseComponent {

  render() {
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
            <LinkContainer to="/memo">
              <NavItem>Memo</NavItem>
            </LinkContainer>
          </Nav>
          <Nav>
            <LinkContainer to="/login">
              <NavItem>Logout</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar>
        { this.props.children }
      </div>
    );
  }

}

const clientRoutes = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ LoginApp } />
      <Route path="login" component={ LoginApp } />
      <Route path="dashboard" component={ Dashboard }>
        <IndexRoute component={ MemoApp } />
        <Route path="memo" component={ MemoApp } />
      </Route>
    </Route>
  </Router>
);

export default clientRoutes;
