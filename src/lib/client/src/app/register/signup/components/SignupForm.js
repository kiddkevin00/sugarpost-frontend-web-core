import actionCreator from '../actioncreators/signupForm';
import FormInput from '../../../../common/components/FormInput';
import BaseComponent from '../../../../common/components/BaseComponent';
import ReactGA from 'react-ga';
import { connect } from 'react-redux';
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';


class SignupForm extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onSubmit', '_onChange', 'isConfirmPasswordMatched');
  }

  componentDidMount() {
    if (this.props.isErrorVisible) {
      this.props.dispatchResetFormAlertBoxes();
    }
  }

  render() {
    const alertBoxClasses = classNames({
      alert: true,
      'alert-danger': true,
      'alert-dismissible': true,
      collapse: !this.props.isErrorVisible,
    });
    let loader;

    if (this.props.isLoading) {
      loader = (
        <div className="slow-loader" />
      );
    } else {
      loader = null;
    }

    return (
      <form onSubmit={ this._onSubmit }>
        { loader }
        <div className={ alertBoxClasses } role="alert">
          <a className="close" data-dismiss="alert">×</a>
          <i className="fa fa-exclamation-triangle" />
          &nbsp; { this.props.errorMsg }
        </div>
        <FormInput
          text="Full Name"
          ref={ (formInputObj) => { this.fullName = formInputObj; } }
          value={ this.props.formFullName }
          onChange={ this._onChange.bind(this, 'FullName') }
          errorMessage="Full name is invalid"
          emptyMessage="Full name can't be empty"
        />
        <FormInput
          text="Email Address"
          ref={ (formInputObj) => { this.email = formInputObj; } }
          validate={ FormInput.validateEmailField }
          value={ this.props.formEmail }
          onChange={ this._onChange.bind(this, 'Email') }
          errorMessage="Email is invalid"
          emptyMessage="Email can't be empty"
        />
        <FormInput
          text="Password"
          type="password"
          ref={ (formInputObj) => { this.password = formInputObj; } }
          value={ this.props.formPassword }
          onChange={ this._onChange.bind(this, 'Password') }
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
          value={ this.props.formConfirmPassword }
          onChange={ this._onChange.bind(this, 'ConfirmPassword') }
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
    this.props.dispatchSetFormField(field, value);
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

      const fullName = this.props.formFullName.trim();
      const email = this.props.formEmail.trim() && this.props.formEmail.toLowerCase();
      const password = this.props.formPassword.trim();

      this.props.dispatchSignUp(email, password, fullName);
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
    return inputText === this.props.formPassword;
  }

}
SignupForm.propTypes = {
  dispatchResetFormAlertBoxes: PropTypes.func.isRequired,
  dispatchSetFormField: PropTypes.func.isRequired,
  dispatchSignUp: PropTypes.func.isRequired,

  formFullName: PropTypes.string.isRequired,
  formEmail: PropTypes.string.isRequired,
  formPassword: PropTypes.string.isRequired,
  formConfirmPassword: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isErrorVisible: PropTypes.bool.isRequired,
  errorMsg: PropTypes.string.isRequired,
};


function mapStateToProps(state) {
  return {
    formFullName: state.signup.formFullName,
    formEmail: state.signup.formEmail,
    formPassword: state.signup.formPassword,
    formConfirmPassword: state.signup.formConfirmPassword,
    isLoading: state.signup.isLoading,
    isErrorVisible: state.signup.error.isVisible,
    errorMsg: state.signup.error.message,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatchResetFormAlertBoxes() {
      dispatch(actionCreator.resetFormAlertBoxes());
    },

    dispatchSetFormField(field, value) {
      dispatch(actionCreator.setFormField(field, value));
    },

    dispatchSignUp(email, password, fullName) {
      dispatch(actionCreator.signup(email, password, fullName));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
