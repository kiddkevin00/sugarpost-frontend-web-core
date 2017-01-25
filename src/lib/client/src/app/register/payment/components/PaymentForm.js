import BaseComponent from '../../../../common/components/BaseComponent';
import StripeCheckout from 'react-stripe-checkout';
import React from 'react';

class PaymentForm extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onToken');
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      firstNameIsValid: false,
      lastNameIsValid: false,
      emailIsValid: false,
      passwordIsValid: false,
      confirmPasswordIsValid: false,
    };
  }

  render() {
    return (
      <form>
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
          email="administrator@mysugarpost.com"
          billingAddress={ false }
          alipay={ false }
          bitcoin={ false }
          allowRememberMe={ false }
          reconfigureOnUpdate={ false }
          triggerEvent="onClick"
          color="black"
        >
          <button
            disabled={ false }
            className="btn btn-success btn-sm btn-block"
            type="button"
          >
            Get Your April Treat $19.99
          </button>
        </StripeCheckout>
      </form>
    );
  }

  _onToken(token) {
    this.props.onSubmit(token);
  }

}
PaymentForm.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
};

export default PaymentForm;
