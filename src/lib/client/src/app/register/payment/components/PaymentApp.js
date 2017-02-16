import paymentActionCreator from '../actions/paymentActionCreator';
import PaymentForm from './PaymentForm';
import BaseComponent from '../../../../common/components/BaseComponent';
import React from 'react';

class PaymentApp extends BaseComponent {

  constructor(props) {
    super(props);

    this.state = _getState();
  }

  render() {
    return (
      <div>
        <div className="form-top">
          <div className="form-top-left">
            <h3>Sign up now</h3>
            <p>Fill in the form below to get started:</p>
          </div>
          <div className="form-top-right">
            <i className="fa fa-pencil" />
          </div>
        </div>
        <div className="form-bottom">
          <PaymentForm
            onSubmit={ PaymentApp._onSubmit }
            email={ this.props.location.query.email }
          />
        </div>
      </div>
    );
  }

  static _onSubmit(token, referCode) {
    paymentActionCreator.pay(token, referCode);
  }

}

/*
 * A private method. It should only be used by `setState()` and `getInitialState()` to sync up
 * the data in the Flux's store.
 */
function _getState() {
  return {};
}

export default PaymentApp;
