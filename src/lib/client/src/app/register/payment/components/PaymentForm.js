import actionCreator from '../actioncreators/paymentForm';
import FormInput from '../../../../common/components/FormInput';
import BaseComponent from '../../../../common/components/BaseComponent';
import constants from '../../../../common/constants/';
import StripeCheckout from 'react-stripe-checkout';
import couponCode from 'coupon-code';
import classNames from 'classnames';
import ReactGA from 'react-ga';
import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';

class PaymentForm extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onClick', '_onToken');
  }

  render() {
    const alertSuccessBoxClasses = classNames({
      alert: true,
      'alert-success': true,
      'alert-dismissible': true,
      collapse: !this.props.isInfoVisible,
    });
    const alertErrorBoxClasses = classNames({
      alert: true,
      'alert-danger': true,
      'alert-dismissible': true,
      collapse: !this.props.isErrorVisible,
    });
    const showDiscountStr = this.props.isReferralCodeValid ? '50% Off Included' : '\u00A0';
    const totalCost = this.props.isReferralCodeValid ? '$6.81' : '$13.61';
    let loader;

    if (this.props.isLoading) {
      loader = (
        <div className="slow-loader" />
      );
    } else {
      loader = null;
    }

    return (
      <form role="form">
        { loader }
        <div className={ alertSuccessBoxClasses } role="alert">
          <a className="close" data-dismiss="alert">×</a>
          <i className="fa fa-check-square-o" />
          &nbsp; { this.props.infoMsg }
        </div>
        <div className={ alertErrorBoxClasses } role="alert">
          <a className="close" data-dismiss="alert">×</a>
          <i className="fa fa-exclamation-triangle" />
          &nbsp; { this.props.errorMsg }
        </div>
        <div className="text-center">
          <h3><b>Monthly Subscription</b></h3>
          <p>_______________________________</p>
          <h1><b>$12.50</b></h1>
          <span>+</span>
          <br />
          <span>Tax (8.875%)</span>
          <p>___________</p>
          <h3>Total: { totalCost }</h3>
          <h4><i>{ showDiscountStr }</i></h4>
        </div>
        <br />
        <div>
          Do you have a referral code?
        </div>
        <FormInput
          text="Optional"
          validate={ PaymentForm._validateReferralCode }
          value={ this.props.formReferralCode }
          onChange={ this._onChange.bind(this, 'ReferralCode') } /* eslint-disable-line react/jsx-no-bind */
          errorMessage="Referral code is invalid"
        />
        <StripeCheckout
          token={ this._onToken }
          stripeKey={ constants.CREDENTIAL.STRIPE.PUBLIC_KEY }
          name="Sugarpost"
          description="Premium Subscription Service"
          image="/assets/images/sugarpost-logo.png"
          ComponentClass="div"
          panelLabel={ `Get Your ${this.props.subscribedMonth} E-Package!` }
          currency="USD"
          locale="en"
          email={ this.props.email }
          billingAddress={ true }
          zipCode={ true }
          alipay={ false }
          bitcoin={ false }
          reconfigureOnUpdate={ false }
          triggerEvent="onClick"
          allowRememberMe={ false }
        >
          <button
            onClick={ this._onClick }
            className="btn btn-block"
            type="button"
          >
            Checkout Now
          </button>
          <div className="text-center">
            <h6><i>Charge for { this.props.subscribedMonth }&#39;s e-package is final.</i></h6>
          </div>
        </StripeCheckout>
      </form>
    );
  }

  _onChange(field, value) {
    this.props.dispatchSetFormField(field, value, PaymentForm._validateReferralCode);
  }

  _onClick(event) {
    if (!PaymentForm._validateReferralCode(this.props.formReferralCode)) {
      event.stopPropagation();
    } else {
      ReactGA.event({
        category: 'User',
        action: 'payment button clicked',
      });
    }
  }

  _onToken(token) {
    ReactGA.event({
      category: 'User',
      action: 'payment form verified',
    });

    this.props.dispatchPay(token, this.props.formReferralCode);
  }

  static _validateReferralCode(inputText) {
    if (inputText.trim().length === 0) {
      return true;
    }

    try {
      return !!couponCode.validate(inputText, {
        parts: 1,
        partLen: 6,
      });
    } catch (err) {
      return false;
    }
  }

}
PaymentForm.propTypes = {
  dispatchSetFormField: PropTypes.func.isRequired,
  dispatchPay: PropTypes.func.isRequired,

  email: PropTypes.string.isRequired,
  subscribedMonth: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  formReferralCode: PropTypes.string.isRequired,
  isReferralCodeValid: PropTypes.bool.isRequired,
  isInfoVisible: PropTypes.bool.isRequired,
  infoMsg: PropTypes.string.isRequired,
  isErrorVisible: PropTypes.bool.isRequired,
  errorMsg: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    isLoading: state.payment.isLoading,
    formReferralCode: state.payment.formReferralCode,
    isReferralCodeValid: state.payment.isReferralCodeValid,
    isInfoVisible: state.payment.info.isVisible,
    infoMsg: state.payment.info.message,
    isErrorVisible: state.payment.error.isVisible,
    errorMsg: state.payment.error.message,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatchSetFormField(field, value, validateReferralCode) {
      dispatch(actionCreator.setFormField(field, value, validateReferralCode));
    },

    dispatchPay(token, referralCode) {
      dispatch(actionCreator.pay(token, referralCode));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentForm);
