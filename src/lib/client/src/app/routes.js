'use strict';

import MemoApp from './dashboard/memo/components/MemoApp.js';
import BaseComponent from '../common/components/BaseComponent.js';
import React from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

/*
 * A private method should only be used for `setState()` and `getInitialState()` to sync with
 * the data in `AuthStore`.
 */
function _getState() {
  return {
    //isLoggedIn: AuthStore.isLoggedIn(),
    //unreadNotificationCount: PushNotificationStore.getPushNotificationBucket()
    //  .pushNotificationUnreadCount
  };
}

class App extends BaseComponent {

  constructor() {
    super();

    this._bind('_onChange');
    this.state = _getState();

    //PushNotificationActionCreator.asyncGetPushNotificationBucket();

    //console.log('SSR 2:', this.props);
    //console.log('CSR 2:', this.state);
  }

  componentDidMount() {
    //AuthStore.addChangeListener(this._onChange);
    //PushNotificationStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    //AuthStore.removeChangeListener(this._onChange);
    //PushNotificationStore.addChangeListener(this._onChange);
  }

  render() {
    //console.log('SSR 3', this.props);

    /*
     * The check of `this.props.isLoggedIn` is for server-side rendering while the
     * `this.state.isLoggedIn` one is for client-side rendering.
     */
    //if (this.props.isLoggedIn || this.state.isLoggedIn) {
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
    //}
    //return <LoginApp onLogin={this._onLogin} />;
  }

  _onChange() {
    this.setState(_getState());
  }

  _onClick() {
    //AuthActionCreator.asyncLogout();
  }

}

const clientRoutes = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ MemoApp } />
      <Route path="memo" component={ MemoApp } />
    </Route>
  </Router>
);

export { clientRoutes as default };
