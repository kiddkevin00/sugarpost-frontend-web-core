import FormInput from '../../../common/components/FormInput';
import BaseComponent from '../../../common/components/BaseComponent';
import StripeCheckout from 'react-stripe-checkout';
import React from 'react';

class SignupForm extends BaseComponent {

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
        <div className="form-group">
          <label htmlFor="first-name">First Name</label>
          <FormInput
            onChange={ this._onChange.bind(this, 'firstName') } /* eslint-disable-line react/jsx-no-bind */
            value={ this.state.firstName }
            type="text"
            placeholder="First name"
            className="form-control"
            id="first-name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="last-name">Last Name</label>
          <FormInput
            onChange={ this._onChange.bind(this, 'lastName') } /* eslint-disable-line react/jsx-no-bind */
            value={ this.state.lastName }
            type="text"
            placeholder="Last name"
            className="form-control"
            id="last-name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <FormInput
            onChange={ this._onChange.bind(this, 'email') } /* eslint-disable-line react/jsx-no-bind */
            value={ this.state.email }
            type="email"
            placeholder="Email address"
            className="form-control"
            id="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <FormInput
            onChange={ this._onChange.bind(this, 'password') } /* eslint-disable-line react/jsx-no-bind */
            value={ this.state.password }
            type="password"
            placeholder="New password"
            className="form-control"
            id="password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <FormInput
            onChange={ this._onChange.bind(this, 'confirmPassword') } /* eslint-disable-line react/jsx-no-bind */
            value={ this.state.confirmPassword }
            type="password"
            placeholder="Confirm password"
            className="form-control"
            id="confirm-password"
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
          email="administrator@mysugarpost.com"
          billingAddress={ true }
          alipay={ true }
          bitcoin={ true }
          allowRememberMe={ true }
          reconfigureOnUpdate={ false }
          triggerEvent="onClick"
        >
          <button
            disabled={ !this.state.emailIsValid || !this.state.passwordIsValid ||
              !this.state.confirmPasswordIsValid || !this.state.firstNameIsValid ||
              !this.state.lastNameIsValid || (this.state.password !== this.state.confirmPassword) }
            className="btn btn-success btn-sm btn-block"
            type="button"
          >
            Pay Now
          </button>
        </StripeCheckout>
        {/*
        <button
          disabled={ !this.state.emailIsValid || !this.state.passwordIsValid ||
            !this.state.firstNameIsValid || !this.state.lastNameIsValid }
          className="btn btn-success btn-sm btn-block"
          type="submit"
        >
          Sign Up
        </button>
        */}
      </form>
    );
  }

  _onToken(token) {
    this.props.onSubmit(this.state.email, this.state.password, this.state.firstName,
      this.state.lastName, token);
  }

  _onChange(field, value, isValid) {
    this.setState({
      [field]: value,
      [`${field}IsValid`]: isValid,
    });
  }

}

export default SignupForm;
