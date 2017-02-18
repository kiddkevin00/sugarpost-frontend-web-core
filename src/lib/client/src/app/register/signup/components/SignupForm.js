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
      fullNameIsValid: false,
      emailIsValid: false,
      passwordIsValid: false,
      confirmPasswordIsValid: false,
    };
  }

  render() {
    return (
      <form role="form">
        <div className="form-group">
          <label className="sr-only" htmlFor="form-full-name">Full Name</label>
          <FormInput
            onChange={ this._onChange.bind(this, 'fullName') } /* eslint-disable-line react/jsx-no-bind */
            value={ this.state.fullName }
            type="text"
            placeholder="Full name..."
            className="form-control"
            id="form-full-name"
          />
        </div>
        <div className="form-group">
          <label className="sr-only" htmlFor="form-email">Email Address</label>
          <FormInput
            onChange={ this._onChange.bind(this, 'email') } /* eslint-disable-line react/jsx-no-bind */
            value={ this.state.email }
            type="email"
            placeholder="Email address..."
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
            placeholder="New password..."
            className="form-control"
            id="form-password"
          />
        </div>
        <div className="form-group">
          <label className="sr-only" htmlFor="form-confirm-password">Confirm Password</label>
          <FormInput
            onChange={ this._onChange.bind(this, 'confirmPassword') } /* eslint-disable-line react/jsx-no-bind */
            value={ this.state.confirmPassword }
            type="password"
            placeholder="Confirm password..."
            className="form-control"
            id="form-confirm-password"
          />
        </div>
        <button
          onClick={ this._onClick }
          disabled={ false }
          className="btn btn-block"
          type="button"
        >
          Sign me up!
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

  _onClick(event) {
    this.props.onSubmit(event, this.state.email, this.state.password, this.state.fullName);
  }

}
SignupForm.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
};

export default SignupForm;
