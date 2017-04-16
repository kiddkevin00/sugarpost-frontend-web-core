import authStore from '../../../common/auth/stores/authStore';
import accountStore from '../stores/accountStore';
import authActionCreator from '../../../common/auth/actions/authActionCreator';
import accountActionCreator from '../actionCreator';
import SubscriptionSection from './SubscriptionSection';
import AccountForm from './AccountForm';
import BaseComponent from '../../../common/components/BaseComponent';
import React from 'react';

class AccountApp extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onChange', '_onCancelSubscription');
    this.state = _getState();
  }

  componentDidMount() {
    authStore.addChangeListener(this._onChange);
    accountStore.addChangeListener(this._onChange);

    if (!this.state.isLoggedIn) {
      authActionCreator.authCheck();
    }
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    if (!nextState.isLoggedIn) {
      nextContext.router.push('/register/login');
    }
  }

  componentWillUnmount() {
    authStore.removeChangeListener(this._onChange);
    accountStore.removeChangeListener(this._onChange);
  }

  render() {
    let loader;

    if (this.state.isLoading) {
      loader = (
        <div className="slow-loader" />
      );
    } else {
      loader = null;
    }

    return (
      <div id="account-app">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="header-placeholder-custom" />
              { loader }
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-5">
              <div className="panel panel-default">
                <div className="panel-heading"><h4>Subscription</h4></div>
                <div className="panel-body">
                  <div className="col-lg-xs-12">
                    <SubscriptionSection
                      onUnsubscribe={ this._onCancelSubscription }
                      onUpdatePayment={ AccountApp._onUpdatePayment }
                      isInfoVisible={ this.state.subscriptionInfo.isVisible }
                      isErrorVisible={ this.state.subscriptionError.isVisible }
                      infoMsg={ this.state.subscriptionInfo.message }
                      errorMsg={ this.state.subscriptionError.message }
                      status={ this.state.user.type }
                      creditCardLast4={ this.state.user.creditCardLast4 }
                    />
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-7">
              <div className="panel panel-default">
                <div className="panel-heading"><h4>Profile</h4></div>
                <div className="panel-body">
                  <div className="col-lg-offset-1 col-lg-10 col-lg-xs-12">
                    <AccountForm
                      onSubmit={ AccountApp._onUpdateProfile }
                      isInfoVisible={ this.state.profileInfo.isVisible }
                      isErrorVisible={ this.state.profileError.isVisible }
                      infoMsg={ this.state.profileInfo.message }
                      errorMsg={ this.state.profileError.message }
                      fullName={ this.state.user.fullName }
                      email={ this.state.user.email }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  _onChange() {
    this.setState(_getState());
  }

  _onCancelSubscription() {
    accountActionCreator.cancelSubscription(this.context.router, this.state.user.email);
  }

  static _onUpdatePayment() {

  }

  static _onUpdateProfile(event, _password, _newPassword, _fullName) {
    const password = _password && _password.trim();
    const newPassword = _newPassword && _newPassword.trim();
    const fullName = _fullName && _fullName.trim();

    accountActionCreator.updateProfile(password, newPassword, fullName);
  }

}
AccountApp.contextTypes = {
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
    profileInfo: accountStore.getInfo('profile'),
    profileError: accountStore.getError('profile'),
    subscriptionInfo: accountStore.getInfo('subscription'),
    subscriptionError: accountStore.getError('subscription'),
    isLoading: accountStore.isLoading(),
  };
}

export default AccountApp;