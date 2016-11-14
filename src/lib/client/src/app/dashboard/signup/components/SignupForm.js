import FormInput from '../../login/components/FormInput';
import BaseComponent from '../../../../common/components/BaseComponent';
import React from 'react';

class SignupForm extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onChange', '_onSubmit');
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      emailIsValid: false,
      passwordIsValid: false,
    };
  }

  render() {
    return (
      <form onSubmit={ this._onSubmit }>
        <div className="form-group">
          <label>First Name</label>
          <FormInput
            onChange={ this._onChange.bind(this, 'firstName') }
            value={ this.state.firstName }
            type="text"
            placeholder="First name"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <FormInput
            onChange={ this._onChange.bind(this, 'lastName') }
            value={ this.state.lastName }
            type="text"
            placeholder="Last name"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <FormInput
            onChange={ this._onChange.bind(this, 'email') }
            value={ this.state.email }
            type="email"
            placeholder="Email address"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <FormInput
            onChange={ this._onChange.bind(this, 'password') }
            value={ this.state.password }
            type="password"
            placeholder=" New password"
            className="form-control"
          />
        </div>
        <button
          disabled={ this.state.emailIsValid && this.state.passwordIsValid ? '' : 'disabled' }
          className="btn btn-success btn-sm btn-block"
          type="submit"
        >
          Sign up
        </button>
      </form>
    );
  }

  _onChange(field, value, isValid) {
    this.setState({
      [field]: value,
      [field + 'IsValid']: isValid,
    });
  }

  _onSubmit(event) {
    this.props.onSubmit(event, this.state.email, this.state.password);
  }

}

export default SignupForm;
