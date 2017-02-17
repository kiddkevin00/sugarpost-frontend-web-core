import FormInput from '../../../common/components/FormInput';
import BaseComponent from '../../../common/components/BaseComponent';
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
      <form onSubmit={ this._onSubmit } role="form">
        <div className="form-group">
          <label className="sr-only" htmlFor="form-email">Email</label>
          <FormInput
            onChange={ this._onChange.bind(this, 'email') } /* eslint-disable-line react/jsx-no-bind */
            value={ this.state.email }
            type="email"
            placeholder="Email..."
            className="form-control"
            id="form-email"
          />
        </div>
        <div className="form-group">
          <label className="sr-only" htmlFor="form-password">Password</label>
          <FormInput
            onChange={ this._onChange.bind(this, 'password') } /* eslint-disable-line react/jsx-no-bind */
            value={ this.state.password }
            type="password"
            placeholder="Password..."
            className="form-control"
            id="form-password"
          />
        </div>
        <button
          disabled={ !this.state.emailIsValid || !this.state.passwordIsValid }
          className="btn btn-block"
          type="submit"
        >
          Log In
        </button>
      </form>
    );
  }

  _onChange(field, value, isValid) {
    this.setState({
      [field]: value,
      [`${field}IsValid`]: isValid,
    });
  }

  _onSubmit(event) {
    this.props.onSubmit(event, this.state.email, this.state.password);
  }

}
LoginForm.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
};

export default LoginForm;
