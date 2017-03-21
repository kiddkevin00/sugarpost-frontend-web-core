import authStore from '../../../../common/auth/stores/authStore';
import paymentStore from '../stores/paymentStore';
import authActionCreator from '../../../../common/auth/actions/authActionCreator';
import paymentActionCreator from '../actions/paymentActionCreator';
import PaymentForm from './PaymentForm';
import BaseComponent from '../../../../common/components/BaseComponent';
import React from 'react';

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
    }
  }

  componentWillUnmount() {
    authStore.removeChangeListener(this._onChange);
    paymentStore.removeChangeListener(this._onChange);
  }

  render() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();

    return (
      <div>
        <div className="form-top">
          <div className="form-top-left">
            <h3>Pay now</h3>
            <p>Fill in the form below to get started:</p>
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
            referCode={ this.state.referCode }
            subscribedMonth={ currentMonth + 1 }
            regularChargeAmount={ 19.99 }
            referralChargeAmount={ 17.99 }
          />
        </div>
      </div>
    );
  }

  _onChange() {
    this.setState(_getState());
  }

  static _onSubmit(token, referCode) {
    paymentActionCreator.pay(token, referCode);
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
    referCode: authStore.gerReferCode(),
    error: paymentStore.getError(),
    info: paymentStore.getInfo(),
  };
}

export default PaymentApp;
