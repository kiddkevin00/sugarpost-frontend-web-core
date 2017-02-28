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
          value={ this.state.fullName }
          onChange={ this._onChange.bind(this, 'fullName') } /* eslint-disable-line react/jsx-no-bind */
          emptyMessage="Empty"
        />
        <FormInput
          text="Email Address"
          ref={ (formInputObj) => { this.email = formInputObj; } }
          validate={ FormInput.validateEmailField }
          value={ this.state.email }
          onChange={ this._onChange.bind(this, 'email') } /* eslint-disable-line react/jsx-no-bind */
          emptyMessage="Empty"
          errorMessage="Invalid"
        />
        <FormInput
          text="Password"
          ref={ (formInputObj) => { this.password = formInputObj; } }
          value={ this.state.password }
          onChange={ this._onChange.bind(this, 'password') } /* eslint-disable-line react/jsx-no-bind */
          emptyMessage="Empty"
          errorMessage="Invalid"
        />
        <FormInput
          text="Confirm Password"
          ref={ (formInputObj) => { this.confirmPassword = formInputObj; } }
          value={ this.state.confirmPassword }
          onChange={ this._onChange.bind(this, 'confirmPassword') } /* eslint-disable-line react/jsx-no-bind */
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
    if (
      FormInput.validateEmptyField(this.state.fullName) &&
      FormInput.validateEmailField(this.state.email) &&
      FormInput.validateEmptyField(this.state.password) &&
      FormInput.validateEmptyField(this.state.confirmPassword)
    ) {
      this.props.onSubmit(event, this.state.email, this.state.password, this.state.fullName);
    } else {
      this.fullName.isValid();
      this.email.isValid();
      this.password.isValid();
      this.confirmPassword.isValid();
    }
  }

}
SignupForm.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
};

export default SignupForm;
