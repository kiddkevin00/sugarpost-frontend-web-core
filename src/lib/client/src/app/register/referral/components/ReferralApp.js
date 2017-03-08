import authStore from '../../../../common/auth/stores/authStore';
import authActionCreator from '../../../../common/auth/actions/authActionCreator';
import ReferralSection from './ReferralSection';
import BaseComponent from '../../../../common/components/BaseComponent';
import { Thumbnail, Form, FormGroup } from 'react-bootstrap';
import React from 'react';

class ReferralApp extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onChange');
    this.state = _getState();
  }

  componentDidMount() {
    authStore.addChangeListener(this._onChange);

    if (!this.state.isLoggedIn) {
      authActionCreator.authCheck();
    }
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    if (!nextState.isLoggedIn) {
      nextContext.router.push('/login');
    }
  }

  componentWillUnmount() {
    authStore.removeChangeListener(this._onChange);
  }

  render() {
    return (
      <div id="referral-app">
        <div className="form-top">
          <Thumbnail src="/assets/images/sugarpost-logo.png" alt="">
            <Form horizontal={ true }>
              <FormGroup>
                <span>Your Refer Code: &nbsp;</span>
                <input type="text" readOnly={ true } placeholder={ this.state.user.referCode } />
              </FormGroup>
              <br />
              <FormGroup>
                <ReferralSection
                  myEmail={ this.state.user.email }
                  myFullName={ this.state.user.fullName }
                  myReferCode={ this.state.user.referCode }
                />
              </FormGroup>
            </Form>
          </Thumbnail>
        </div>
      </div>
    );
  }

  _onChange() {
    this.setState(_getState());
  }

}
ReferralApp.contextTypes = {
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

export default ReferralApp;
