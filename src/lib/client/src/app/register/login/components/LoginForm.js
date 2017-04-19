import actionCreator from '../actionCreator';
import FormInput from '../../../../common/components/FormInput';
import BaseComponent from '../../../../common/components/BaseComponent';
import { connect } from 'react-redux';
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

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
  dispatchSetFormField: PropTypes.func.isRequired,
  dispatchLogin: PropTypes.func.isRequired,

  formEmail: PropTypes.string.isRequired,
  formPassword: PropTypes.string.isRequired,
  isErrorVisible: PropTypes.bool.isRequired,
  errorMsg: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    formEmail: state.login.formEmail,
    formPassword: state.login.formPassword,
    isErrorVisible: state.login.error.isVisible,
    errorMsg: state.login.error.message,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatchSetFormField(field, value) {
      dispatch(actionCreator.setFormField(field, value));
    },

    dispatchLogin(email, password) {
      dispatch(actionCreator.login(email, password));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
