import AuthStore from './registration/login/stores/AuthStore';
import AuthActionCreator from './registration/login/actions/AuthActionCreator';
import PushNotificationStore from './dashboard/push-notification/stores/PushNotificationStore';
import PushNotificationActionCreator from './dashboard/push-notification/actions/PushNotificationActionCreator';
import LoginApp from './registration/login/components/LoginApp.jsx';
import HomeApp from './dashboard/home/components/HomeApp.jsx';
import MemoApp from './dashboard/memo/components/MemoApp.jsx';
import ComposerApp from './dashboard/composer/components/ComposerApp.jsx';
import PushNotificationApp from './dashboard/push-notification/components/PushNotificationApp.jsx';
import BaseComponent from '../common/components/BaseComponent.jsx';
import React from 'react';
import { DefaultRoute, Route , RouteHandler, NotFoundRoute } from 'react-router';

import { Navbar, Nav } from 'react-bootstrap';
import { NavItemLink } from 'react-router-bootstrap';

/**
 * Private method only for `setState()` and `getInitialState()` - sync with the data in `AuthStore`, `PushNotificationStore`.
 */
function _getState() {
  return {
    isLoggedIn: AuthStore.isLoggedIn(),
    unreadNotificationCount: PushNotificationStore.getPushNotificationBucket().pushNotificationUnreadCount
  };
}

// [Note] All listeners: `AuthStore`, `PushNotificationStore`.
class APP extends BaseComponent {
  constructor() {
    super();

    this._bind('_onChange');
    this.state = _getState();

    PushNotificationActionCreator.asyncGetPushNotificationBucket();

    //console.log('SSR 2:', this.props);
    //console.log('CSR 2:', this.state);
  }

  componentDidMount() {
    AuthStore.addChangeListener(this._onChange);
    PushNotificationStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    AuthStore.removeChangeListener(this._onChange);
    PushNotificationStore.addChangeListener(this._onChange);
  }

  render() {
    //console.log('SSR 3', this.props);

    // `this.props.isLoggedIn` is for server-side rendering and `this.state.isLoggedIn` is for client-side rendering
    if (this.props.isLoggedIn || this.state.isLoggedIn) {
      return (
        <div>
          <Navbar brand='Mailman' toggleNavKey={0}>
            <Nav eventKey={0}>
              <NavItemLink to='home'>Home</NavItemLink>
              <NavItemLink to='memo'>Memo</NavItemLink>
              <NavItemLink to='composer'>Composer</NavItemLink>
              <NavItemLink to='push-notification'>
               <span onClick={this._onRead}>
               Push Notification &nbsp;
                 <span style={{color: '#ED6262'}}>{this.state.unreadNotificationCount}</span>
               </span>
              </NavItemLink>
            </Nav>
          </Navbar>
          <button onClick={this._onClick} style={{marginLeft: '94%'}} className='btn-warning'>Logout</button>
          <RouteHandler />
        </div>
      );
    }
    return <LoginApp onLogin={this._onLogin} />;
  }

  _asyncGetUnreadNotificationCount(err, data) {
    if (err) return AuthActionCreator.asyncGetUnreadNotificationCount(err);

    if (data.test !== this.state.totalUnreadNotifications) {
      AuthActionCreator.asyncGetUnreadNotificationCount(null, data.test);
    }
  }

  _onChange() {
    this.setState(_getState());
  }

  _onClick() {
    AuthActionCreator.asyncLogout();
  }

  _onRead() {

  }

}

const clientRoutes = [
  <Route namepath='/' handler={APP}>
    <Route name='home' path='/home' handler={HomeApp} />
    <Route name='memo' path='/memo' handler={MemoApp} />
    <Route name='composer' path='/composer' handler={ComposerApp} />
    <Route name='push-notification' path='/push-notification' handler={PushNotificationApp} />*/}

    {/* <Redirect from='/*' to='home' /> */}
    <DefaultRoute handler={HomeApp} />
    <NotFoundRoute handler={HomeApp} />
  </Route>
];

export { clientRoutes as default };
