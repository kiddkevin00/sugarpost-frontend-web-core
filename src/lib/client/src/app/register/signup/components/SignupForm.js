import FormInput from '../../../../common/components/FormInput';
import BaseComponent from '../../../../common/components/BaseComponent';
import React from 'react';

class SignupForm extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onClick', 'isConfirmedPassword');
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
          type="password"
          ref={ (formInputObj) => { this.password = formInputObj; } }
          validate={ SignupForm._isNotEmpty }
          validator="true"
          minCharacters="8"
          requireCapitals="1"
          requireNumbers="1"
          value={ this.state.password }
          onChange={ this._onChange.bind(this, 'password') }
          emptyMessage="Password is invalid"
        />

        <FormInput
          text="Confirm Password"
          ref={ (formInputObj) => { this.passwordConfirm = formInputObj; } }
          validate={ this.isConfirmedPassword }
          value={ this.state.confirmPassword }
          onChange={ this._onChange.bind(this, 'confirmPassword') }
          emptyMessage="Empty"
          errorMessage="Unmatched"
        />

        <button
          onClick={ this._onClick }
          disabled={ false }
          className="btn btn-block"
          type="button"
        >
          Sign Me Up!
        </button>
      </form>

    );
  }

  _onChange(field, value) {
    if (field === 'password') {
      if (SignupForm._isNotEmpty(this.state.confirmPassword)) {
        this.passwordConfirm.isValid();
      }
      this.passwordConfirm.hideError();
    }
    this.setState({
      [field]: value,
    });
  }

  _onClick(event) {
    if (SignupForm._isNotEmpty(this.state.fullName)
        && SignupForm.validateEmail(this.state.email)
        && this.password.isValid()
        && this.passwordConfirm.isValid()) {
      /// TODO
      //this.props.onSubmit(event, this.state.email, this.state.password, this.state.fullName);
      alert('Thanks.');
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

  isConfirmedPassword(value) {
    return (value === this.state.password)
  }

}
SignupForm.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
};

export default SignupForm;
