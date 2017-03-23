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
      referCode: this.props.referCode,
      charge: this.props.regularChargeAmount,
    };
  }

  render() {
    const chargeStr = window.parseFloat(this.state.charge).toFixed(2);
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
          panelLabel={ `Get Your ${this.props.subscribedMonth} Treat $${chargeStr}` }
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
            Get Your { this.props.subscribedMonth } Treat ${ this.state.charge }
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
  isInfoVisible: React.PropTypes.bool.isRequired,
  isErrorVisible: React.PropTypes.bool.isRequired,
  infoMsg: React.PropTypes.string,
  errorMsg: React.PropTypes.string,
  referCode: React.PropTypes.string,
  subscribedMonth: React.PropTypes.string,
  regularChargeAmount: React.PropTypes.number,
  referralChargeAmount: React.PropTypes.number,
};
PaymentForm.defaultProps = {
  infoMsg: 'Request has been completed.',
  errorMsg: 'Oops! Something went wrong. Please try again.',
  referCode: '',
  subscribedMonth: 'Unknown',
  regularChargeAmount: 0,
  referralChargeAmount: 0,
};

export default PaymentForm;
