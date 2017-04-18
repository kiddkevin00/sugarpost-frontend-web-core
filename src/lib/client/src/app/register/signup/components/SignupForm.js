import FormInput from '../../../../common/components/FormInput';
import BaseComponent from '../../../../common/components/BaseComponent';
import React from 'react';
import classNames from 'classnames';
import ReactGA from 'react-ga';

class SignupForm extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onSubmit', 'isConfirmPasswordMatched');
    this.state = {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
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
          text="Full Name"
          ref={ (formInputObj) => { this.fullName = formInputObj; } }
          value={ this.state.fullName }
          onChange={ this._onChange.bind(this, 'fullName') } /* eslint-disable-line react/jsx-no-bind */
          errorMessage="Full name is invalid"
          emptyMessage="Full name can't be empty"
        />
        <FormInput
          text="Email Address"
          ref={ (formInputObj) => { this.email = formInputObj; } }
          validate={ FormInput.validateEmailField }
          value={ this.state.email }
          onChange={ this._onChange.bind(this, 'email') } /* eslint-disable-line react/jsx-no-bind */
          errorMessage="Email is invalid"
          emptyMessage="Email can't be empty"
        />
        <FormInput
          text="Password"
          type="password"
          ref={ (formInputObj) => { this.password = formInputObj; } }
          value={ this.state.password }
          onChange={ this._onChange.bind(this, 'password') } /* eslint-disable-line react/jsx-no-bind */
          useValidator={ true }
          minCharacters={ 8 }
          requireCapitals={ 1 }
          requireNumbers={ 1 }
          forbiddenWords={ ['password', 'user', 'username'] }
          emptyMessage={ window.innerWidth > 870 ? 'Password is invalid' : '8+ chars, 1+ uppers, 1+ numbers' }
        />
        <FormInput
          text="Confirm Password"
          type="password"
          ref={ (formInputObj) => { this.confirmPassword = formInputObj; } }
          validate={ this.isConfirmPasswordMatched }
          value={ this.state.confirmPassword }
          onChange={ this._onChange.bind(this, 'confirmPassword') } /* eslint-disable-line react/jsx-no-bind */
          emptyMessage="Please confirm your password"
          errorMessage="Passwords don't match"
        />
        <button
          className="btn btn-block"
          type="submit"
        >
          Sign Up
        </button>
      </form>
    );
  }

  _onChange(field, value) {
    this.setState({
      [field]: value,
    });
  }

  _onSubmit(event) {
    // Prevents browser's default navigation (page refresh).
    event.preventDefault();

    if (
      this.fullName.isValid() &&
      this.email.isValid() &&
      this.password.isValid() &&
      this.confirmPassword.isValid()
    ) {
      ReactGA.event({
        category: 'User',
        action: 'signup form submitted',
      });

      this.props.onSubmit(event, this.state.email, this.state.password, this.state.fullName);
    } else {
      ReactGA.event({
        category: 'User',
        action: 'signup form invalid',
      });

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
  isErrorVisible: React.PropTypes.bool.isRequired,
  errorMsg: React.PropTypes.string,
};
SignupForm.defaultProps = {
  errorMsg: 'Oops! Something went wrong. Please try again.',
};

export default SignupForm;
