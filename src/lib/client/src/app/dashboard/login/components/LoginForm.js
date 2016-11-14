import FormInput from './FormInput';
import BaseComponent from '../../../../common/components/BaseComponent';
import React from 'react';

class LoginForm extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onChange', '_onSubmit');
    this.state = {
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
          <label>Email</label>
          <FormInput
            onChange={ this._onChange.bind(this, 'email') }
            value={ this.state.email }
            type="email"
            placeholder="Email"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <FormInput
            onChange={ this._onChange.bind(this, 'password') }
            value={ this.state.password }
            type="password"
            placeholder="Password"
            className="form-control"
          />
        </div>
        <button
          disabled={ this.state.emailIsValid && this.state.passwordIsValid ? '' : 'disabled' }
          className="btn btn-success btn-sm btn-block"
          type="submit"
        >
          Log in
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
LoginForm.propTypes = {
  onSubmit: React.PropTypes.func.isRequired
};

export default LoginForm;
