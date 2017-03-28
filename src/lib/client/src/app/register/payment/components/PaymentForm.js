import FormInput from '../../../../common/components/FormInput';
import BaseComponent from '../../../../common/components/BaseComponent';
import StripeCheckout from 'react-stripe-checkout';
import React from 'react';
import couponCode from 'coupon-code';
import classNames from 'classnames';

class PaymentForm extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onClick', '_onToken');
    this.state = {
      referralCode: this.props.referralCode,
      isReferralCodeValid: false,
    };
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
    const buttonEndingText = this.state.isReferralCodeValid ?
      ' With 10% Off' : '';

    return (
      <form role="form">
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
          <h1><b>$24.99</b></h1>
          <span>+</span>
          <br />
          <span>Tax</span>
        </div>
        <br />
        <div>
          Do you have an referral code?
        </div>
        <FormInput
          text="Optional"
          validate={ PaymentForm._validateCouponCode }
          value={ this.state.referralCode }
          onChange={ this._onChange.bind(this, 'referralCode') } /* eslint-disable-line react/jsx-no-bind */
          errorMessage="Referral code is invalid"
        />
        <StripeCheckout
          token={ this._onToken }
          stripeKey="pk_test_jx78Ig5R5FcBYoGcMoTvNnia"
          name="Sugarpost LLC"
          description="Premium subscription service"
          image="/assets/images/sugarpost-logo.png"
          ComponentClass="div"
          panelLabel={ `Get Your ${this.props.subscribedMonth} Treat!` }
          currency="USD"
          locale="en"
          email={ this.props.email }
          billingAddress={ false } /* Toggles to `true` when go live */
          zipCode={ false } /* Toggles to `true` when go live */
          alipay={ false }
          bitcoin={ false }
          reconfigureOnUpdate={ false }
          triggerEvent="onClick"
          allowRememberMe={ false } /* Toggles to `true` when go live */
        >
          <button
            onClick={ this._onClick }
            className="btn btn-block"
            type="button"
          >
            Checkout{ buttonEndingText } Now
          </button>
        </StripeCheckout>
      </form>
    );
  }

  _onChange(field, value) {
    if (PaymentForm._validateCouponCode(value)) {
      if (value.trim().length === 0) {
        this.setState({
          isReferralCodeValid: false,
        });
      } else {
        this.setState({
          isReferralCodeValid: true,
        });
      }
    } else {
      this.setState({
        isReferralCodeValid: false,
      });
    }

    this.setState({
      [field]: value,
    });
  }

  _onClick(event) {
    if (!PaymentForm._validateCouponCode(this.state.referralCode)) {
      event.stopPropagation();
    }
  }

  _onToken(token) {
    this.props.onSubmit(token, this.state.referralCode);
  }

  static _validateCouponCode(inputText) {
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
  onSubmit: React.PropTypes.func.isRequired,
  email: React.PropTypes.string.isRequired,
  isInfoVisible: React.PropTypes.bool.isRequired,
  isErrorVisible: React.PropTypes.bool.isRequired,
  infoMsg: React.PropTypes.string,
  errorMsg: React.PropTypes.string,
  referralCode: React.PropTypes.string,
  subscribedMonth: React.PropTypes.string,
};
PaymentForm.defaultProps = {
  infoMsg: 'Request has been completed.',
  errorMsg: 'Oops! Something went wrong. Please try again.',
  referralCode: '',
  subscribedMonth: 'Unknown',
};

export default PaymentForm;
