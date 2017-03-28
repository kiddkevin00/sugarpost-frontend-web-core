import authStore from '../../../../common/auth/stores/authStore';
import paymentStore from '../stores/paymentStore';
import authActionCreator from '../../../../common/auth/actions/authActionCreator';
import paymentActionCreator from '../actions/paymentActionCreator';
import PaymentForm from './PaymentForm';
import BaseComponent from '../../../../common/components/BaseComponent';
import constants from '../../../../common/constants/';
import React from 'react';

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'];

class PaymentApp extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onChange');
    this.state = _getState();
  }

  componentDidMount() {
    authStore.addChangeListener(this._onChange);
    paymentStore.addChangeListener(this._onChange);

    if (!this.state.isLoggedIn) {
      authActionCreator.authCheck();
    }
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    if (!nextState.isLoggedIn) {
      nextContext.router.push('/register/login');
    } else if (nextState.user.type === constants.SYSTEM.USER_TYPES.PAID) {
      nextContext.router.push('/account');
    }
  }

  componentWillUnmount() {
    authStore.removeChangeListener(this._onChange);
    paymentStore.removeChangeListener(this._onChange);
  }

  render() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();
    let monthNameToSubscribe;
    if (currentDay <= 25) {
      monthNameToSubscribe = monthNames[currentMonth + 1];
    } else {
      monthNameToSubscribe = monthNames[currentMonth + 2];
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-7 text">
            <h1>Start Your Adventure Today</h1>
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
                <h3>Pay now</h3>
                <p>Secure your { monthNameToSubscribe } e-package now:</p>
              </div>
              <div className="form-top-right">
                <img src="/assets/images/sugarpost-logo.png" alt="" />
              </div>
            </div>
            <div className="form-bottom">
              <PaymentForm
                onSubmit={ PaymentApp._onSubmit }
                email={ this.props.location.query.email || '' }
                isInfoVisible={ this.state.info.isVisible }
                isErrorVisible={ this.state.error.isVisible }
                infoMsg={ this.state.info.message }
                errorMsg={ this.state.error.message }
                referralCode={ this.state.referralCode }
                subscribedMonth={ monthNameToSubscribe }
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

  static _onSubmit(token, referralCode) {
    paymentActionCreator.pay(token, referralCode);
  }

}
PaymentApp.contextTypes = {
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
    referralCode: authStore.gerReferralCode(),
    info: paymentStore.getInfo(),
    error: paymentStore.getError(),
  };
}

export default PaymentApp;
