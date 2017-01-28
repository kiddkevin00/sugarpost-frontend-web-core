import FormInput from '../../../../common/components/FormInput';
import BaseComponent from '../../../../common/components/BaseComponent';
import StripeCheckout from 'react-stripe-checkout';
import React from 'react';

class PaymentForm extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onToken');
    this.state = {
      referCode: '',
      referCodeIsValid: false,
    };
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="email">Refer Code</label>
          <FormInput
            onChange={ this._onChange.bind(this, 'referCode') } /* eslint-disable-line react/jsx-no-bind */
            value={ this.state.referCode }
            type="text"
            placeholder="Refer Code"
            className="form-control"
            id="refer-code"
          />
        </div>
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

  _onChange(field, value, isValid) {
    this.setState({
      [field]: value,
      [`${field}IsValid`]: isValid,
    });
  }

  _onToken(token) {
    this.props.onSubmit(token, this.state.referCode);
  }

}
PaymentForm.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
};

export default PaymentForm;
