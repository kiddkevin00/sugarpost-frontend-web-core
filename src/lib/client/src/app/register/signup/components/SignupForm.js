import FormInput from '../../../../common/components/FormInput';
import BaseComponent from '../../../../common/components/BaseComponent';
import React from 'react';

class SignupForm extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onClick');
    this.state = {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  render() {
    return (
      <form role="form">
        <FormInput
          text="Full Name"
          ref={ (formInputObj) => { this.fullName = formInputObj; } }
          validate={ SignupForm._isNotEmpty }
          value={ this.state.fullName }
          onChange={ this._onChange.bind(this, 'fullName') }
          emptyMessage="Empty"
        />

        <FormInput
          text="Email Address"
          ref={ (formInputObj) => { this.email = formInputObj; } }
          validate={ SignupForm._validateEmail }
          value={ this.state.email }
          onChange={ this._onChange.bind(this, 'email') }
          emptyMessage="Empty"
          errorMessage="Invalid"
        />

        <FormInput
          text="Password"
          ref={ (formInputObj) => { this.password = formInputObj; } }
          validate={ SignupForm._isNotEmpty }
          value={ this.state.password }
          onChange={ this._onChange.bind(this, 'password') }
          emptyMessage="Empty"
          errorMessage="Invalid"
        />

        <FormInput
          text="Confirm Password"
          ref={ (formInputObj) => { this.confirmPassword = formInputObj; } }
          validate={ SignupForm._isNotEmpty }
          value={ this.state.confirmPassword }
          onChange={ this._onChange.bind(this, 'confirmPassword') }
          emptyMessage="Empty"
          errorMessage="Unmatched"
        />

        <button
          onClick={ this._onClick }
          className="btn btn-block"
          type="button"
        >
          Sign Me Up!
        </button>
      </form>
    );
  }

  _onChange(field, value) {
    this.setState({
      [field]: value,
    });
  }

  _onClick(event) {
    if (SignupForm._isNotEmpty(this.state.password) && SignupForm._validateEmail(this.state.email)) {
      this.props.onSubmit(event, this.state.email, this.state.password, this.state.fullName);
    } else {
      this.fullName.isValid();
      this.email.isValid();
      this.password.isValid();
      this.confirmPassword.isValid();
    }
  }

  static _isNotEmpty(inputText) {
    return !!inputText && inputText.length !== 0;
  }

  static _validateEmail(inputText) {
    const regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regExp.test(inputText);
  }

}
SignupForm.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
};

export default SignupForm;
