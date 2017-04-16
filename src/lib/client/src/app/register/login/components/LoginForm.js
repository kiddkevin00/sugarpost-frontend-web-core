import FormInput from '../../../../common/components/FormInput';
import BaseComponent from '../../../../common/components/BaseComponent';
import React from 'react';
import classNames from 'classnames';

const propTypes = {
  _onSubmit: React.PropTypes.func.isRequired,
  onLoginChange: React.PropTypes.func.isRequired,
  isErrorVisible: React.PropTypes.bool.isRequired,
  errorMsg: React.PropTypes.string,
  formEmail: React.PropTypes.string.isRequired,
  formPassword: React.PropTypes.string.isRequired,
};

class LoginForm extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onChange', '_onSubmit');
  }

  render() {
    const alertBoxClasses = classNames({
      alert: true,
      'alert-danger': true,
      'alert-dismissible': true,
      collapse: !this.props.isErrorVisible,
    });

    return (
      <form onSubmit={ this._onSubmit } role="form">
        <div className={ alertBoxClasses } role="alert">
          <a className="close" data-dismiss="alert">×</a>
          <i className="fa fa-exclamation-triangle" />
          &nbsp; { this.props.errorMsg }
        </div>
        <FormInput
          text="Email Address"
          ref={ (formInputObj) => { this.email = formInputObj; } }
          validate={ FormInput.validateEmailField }
          value={ this.props.formEmail }
          onChange={ this._onChange.bind(this, 'Email') } /* eslint-disable-line react/jsx-no-bind */
          errorMessage="Email is invalid"
          emptyMessage="Email can't be empty"
        />
        <FormInput
          text="Password"
          type="password"
          ref={ (formInputObj) => { this.password = formInputObj; } }
          value={ this.props.formPassword }
          onChange={ this._onChange.bind(this, 'Password') } /* eslint-disable-line react/jsx-no-bind */
          errorMessage="Password is invalid"
          emptyMessage="Password can't be empty"
        />
        <button
          className="btn btn-block"
          type="submit"
        >
          Log In
        </button>
      </form>
    );
  }

  _onChange(field, value) {
    this.props.onLoginChange(field, value)
  }

  _onSubmit(event) {
    // Prevents browser's default navigation (page refresh).
    event.preventDefault();
    if (this.email.isValid() && this.password.isValid()) {
      const _email = this.props.formEmail;
      const email = _email && _email.trim() && _email.toLowerCase();
      const _password = this.props.formPassword;
      const password = _password && _password.trim();
      this.props._onSubmit(email, password);
    } else {
      this.email.isValid();
      this.password.isValid();
    }
  }

}
LoginForm.propTypes = propTypes;
LoginForm.defaultProps = {
  errorMsg: 'Oops! Something went wrong. Please try again.',
};

export default LoginForm;
