import FormInput from '../../../../common/components/FormInput';
import BaseComponent from '../../../../common/components/BaseComponent';
import StripeCheckout from 'react-stripe-checkout';
import React from 'react';
import couponCode from 'coupon-code';

class PaymentForm extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onToken');
    this.state = {
      referCode: '',
    };
  }

  render() {
    return (
      <form role="form">
        <FormInput
          text="Refer Code"
          validate={ PaymentForm._validateCouponCode }
          value={ this.state.referCode }
          onChange={ this._onChange.bind(this, 'referCode') } /* eslint-disable-line react/jsx-no-bind */
        />
        <StripeCheckout
          token={ this._onToken }
          stripeKey="pk_test_jx78Ig5R5FcBYoGcMoTvNnia"
          name="Sugarpost LLC"
          description="Premium subscription service"
          image="/assets/images/sugarpost-logo.png"
          ComponentClass="div"
          panelLabel="Get Your April Treat"
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
            className="btn btn-block"
            type="button"
          >
            Get Your April Treat $19.99
          </button>
        </StripeCheckout>
      </form>
    );
  }

  _onChange(field, value) {
    this.setState({
      [field]: value,
    });
  }

  _onToken(token) {
    this.props.onSubmit(token, this.state.referCode);
  }

  static _validateCouponCode(inputText) {
    return !!(couponCode.validate(inputText, {
      parts: 1,
      partLen: 5,
    }));
  }

}
PaymentForm.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
};

export default PaymentForm;
