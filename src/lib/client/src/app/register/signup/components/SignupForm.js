import FormInput from '../../../../common/components/FormInput';
import BaseComponent from '../../../../common/components/BaseComponent';
import React from 'react';

class SignupForm extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onClick', 'isConfirmPasswordMatched');
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
          value={ this.state.fullName }
          onChange={ this._onChange.bind(this, 'fullName') } /* eslint-disable-line react/jsx-no-bind */
        />
        <FormInput
          text="Email Address"
          ref={ (formInputObj) => { this.email = formInputObj; } }
          validate={ FormInput.validateEmailField }
          value={ this.state.email }
          onChange={ this._onChange.bind(this, 'email') } /* eslint-disable-line react/jsx-no-bind */
        />
        <FormInput
          text="Password"
          type="password"
          ref={ (formInputObj) => { this.password = formInputObj; } }
          value={ this.state.password }
          onChange={ this._onChange.bind(this, 'password') } /* eslint-disable-line react/jsx-no-bind */
          useValidator={ true }
          minCharacters="8"
          requireCapitals="1"
          requireNumbers="1"
          forbiddenWords={ ['password', 'user', 'username'] }
          emptyMessage="Invalid"
        />
        <FormInput
          text="Confirm Password"
          type="password"
          ref={ (formInputObj) => { this.confirmPassword = formInputObj; } }
          validate={ this.isConfirmPasswordMatched }
          value={ this.state.confirmPassword }
          onChange={ this._onChange.bind(this, 'confirmPassword') } /* eslint-disable-line react/jsx-no-bind */
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
    if (
      this.fullName.isValid() &&
      this.email.isValid() &&
      this.password.isValid() &&
      this.confirmPassword.isValid()
    ) {
      this.props.onSubmit(event, this.state.email, this.state.password, this.state.fullName);
    } else {
      this.fullName.isValid();
      this.email.isValid();
      this.password.isValid();
      this.confirmPassword.isValid();
    }
  }

  isConfirmPasswordMatched(inputText) {
    return inputText === this.state.password;
  }

}
SignupForm.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
};

export default SignupForm;
