import FormInput from '../../../../common/components/FormInput';
import BaseComponent from '../../../../common/components/BaseComponent';
import StripeCheckout from 'react-stripe-checkout';
import React from 'react';
import couponCode from 'coupon-code';

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'];

class PaymentForm extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onClick', '_onToken');
    this.state = {
      referCode: this.props.referCode,
      charge: this.props.regularChargeAmount,
    };
  }

  render() {
    const chargeStr = window.parseFloat(this.state.charge).toFixed(2);

    return (
      <form role="form">
        <FormInput
          text="Refer Code (Optional)"
          validate={ PaymentForm._validateCouponCode }
          value={ this.state.referCode }
          onChange={ this._onChange.bind(this, 'referCode') } /* eslint-disable-line react/jsx-no-bind */
          errorMessage="Refer code is invalid"
          emptyMessage="Proceed with no refer code?"
        />
        <StripeCheckout
          token={ this._onToken }
          stripeKey="pk_test_jx78Ig5R5FcBYoGcMoTvNnia"
          name="Sugarpost LLC"
          description="Premium subscription service"
          image="/assets/images/sugarpost-logo.png"
          ComponentClass="div"
          panelLabel={ `Get Your ${monthNames[this.props.subscribedMonth]} Treat $${chargeStr}` }
          amount={ 1999 }
          currency="USD"
          locale="en"
          email={ this.props.email }
          billingAddress={ false }
          alipay={ false }
          bitcoin={ false }
          allowRememberMe={ false }
          reconfigureOnUpdate={ false }
          triggerEvent="onClick"
        >
          <button
            onClick={ this._onClick }
            className="btn btn-block"
            type="button"
          >
            Get Your { monthNames[this.props.subscribedMonth] } Treat ${ this.state.charge }
          </button>
        </StripeCheckout>
      </form>
    );
  }

  _onChange(field, value) {
    if (PaymentForm._validateCouponCode(value)) {
      if (value.trim().length === 0) {
        this.setState({
          charge: this.props.regularChargeAmount,
        });
      } else {
        this.setState({
          charge: this.props.referralChargeAmount,
        });
      }
    } else {
      this.setState({
        charge: this.props.regularChargeAmount,
      });
    }

    this.setState({
      [field]: value,
    });
  }

  _onClick(event) {
    if (!PaymentForm._validateCouponCode(this.state.referCode)) {
      event.stopPropagation();
    }
  }

  _onToken(token) {
    this.props.onSubmit(token, this.state.referCode);
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
  referCode: React.PropTypes.string,
  subscribedMonth: React.PropTypes.number,
  regularChargeAmount: React.PropTypes.number,
  referralChargeAmount: React.PropTypes.number,
};
PaymentForm.defaultProps = {
  referCode: '',
  subscribedMonth: (new Date()).getMonth(),
  regularChargeAmount: 0,
  referralChargeAmount: 0,
};

export default PaymentForm;
