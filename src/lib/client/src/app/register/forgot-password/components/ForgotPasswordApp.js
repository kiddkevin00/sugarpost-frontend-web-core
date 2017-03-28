import authStore from '../../../../common/auth/stores/authStore';
import authActionCreator from '../../../../common/auth/actions/authActionCreator';
import ForgotPasswordForm from './ForgotPasswordForm';
import BaseComponent from '../../../../common/components/BaseComponent';
import React from 'react';

class ForgotPasswordApp extends BaseComponent {

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
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-7 text">
            <h1>Start Your Adventure Today</h1>
            {/* <div className="description">
             <p>
             For only $24.99 a month, you will receive e-packages curated
             by the insight of influential food bloggers and dessert connoisseurs! Within
             your e-package, you will find a little background on each featured dessert
             vendor and your vouchers which can claim in-store desserts or Sugarpost
             exclusives.
             </p>
             </div> */}
            <div className="top-big-link">
              <ol>
                <li>Learn more about this month’s featured vendors.</li>
                <li>View your vouchers and claim your desserts.</li>
                <li>Refer your friends and earn credits toward your next package.</li>
              </ol>
            </div>
          </div>
          <div className="col-lg-offset-1 col-lg-4 col-sm-5">
            <div className="form-top">
              <div className="form-top-left">
                <h3>Forgot password</h3>
                <p>Type in your email address below:</p>
              </div>
              <div className="form-top-right">
                <img src="/assets/images/sugarpost-logo.png" alt="" />
              </div>
            </div>
            <div className="form-bottom">
              <ForgotPasswordForm
                onSubmit={ ForgotPasswordApp._onSubmit }
                isInfoVisible={ this.state.info.isVisible }
                infoMsg={ this.state.info.message }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  _onChange() {
    this.setState(_getState());
  }

  static _onSubmit(event, _email) {
    const email = _email && _email.trim() && _email.toLowerCase();

    authActionCreator.forgotPassword(email);
  }

}
ForgotPasswordApp.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

/*
 * A private method. It should only be used by `setState()` and `getInitialState()` to sync up
 * the data in the Flux store.
 */
function _getState() {
  return {
    info: authStore.getInfo('forgotPassword'),
  };
}

export default ForgotPasswordApp;
