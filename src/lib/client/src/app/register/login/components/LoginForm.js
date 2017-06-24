import actionCreator from '../actioncreators/loginForm';
import FormInput from '../../../../common/components/FormInput';
import BaseComponent from '../../../../common/components/BaseComponent';
import { connect } from 'react-redux';
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';


class LoginForm extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onSubmit');
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
    this.props.dispatchSetFormField(field, value);
  }

  _onSubmit(event) {
    // Prevents browser's default navigation (page refresh).
    event.preventDefault();

    if (this.email.isValid() && this.password.isValid()) {
      const email = this.props.formEmail.trim() && this.props.formEmail.toLowerCase();
      const password = this.props.formPassword.trim();

      this.props.dispatchLogin(email, password);
    } else {
      this.email.isValid();
      this.password.isValid();
    }
  }

}
LoginForm.propTypes = {
  dispatchResetFormAlertBoxes: PropTypes.func.isRequired,
  dispatchSetFormField: PropTypes.func.isRequired,
  dispatchLogin: PropTypes.func.isRequired,

  formEmail: PropTypes.string.isRequired,
  formPassword: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isErrorVisible: PropTypes.bool.isRequired,
  errorMsg: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    formEmail: state.login.formEmail,
    formPassword: state.login.formPassword,
    isLoading: state.login.isLoading,
    isErrorVisible: state.login.error.isVisible,
    errorMsg: state.login.error.message,
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

    dispatchLogin(email, password) {
      dispatch(actionCreator.login(email, password));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
