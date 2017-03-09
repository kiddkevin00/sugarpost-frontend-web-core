import authStore from '../../../../common/auth/stores/authStore';
import authActionCreator from '../../../../common/auth/actions/authActionCreator';
import ShareSection from './ShareSection';
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
            <div className="row">
              <div className="col-xs-12">
                <h4>YOUR REFERRAL CODE:</h4>
                <h2>{ this.state.user.referCode || 'N/A' }</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <p>Outstanding Sugarpost Credits:</p>
                <p>{ `$${window.parseFloat(this.state.user.referralAmount * 2.0).toFixed(2)}` }</p>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-xs-offset-1 col-xs-10">
                <button className="btn btn-block">REDEEM NOW</button>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-xs-12">
                <ShareSection
                  myEmail={ this.state.user.email }
                  myFullName={ this.state.user.fullName }
                  myReferCode={ this.state.user.referCode }
                />
              </div>
            </div>
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
