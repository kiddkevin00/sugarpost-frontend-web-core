import actionCreator from '../actioncreators/forgotPasswordForm';
import FormInput from '../../../../common/components/FormInput';
import BaseComponent from '../../../../common/components/BaseComponent';
import { connect } from 'react-redux';
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class ForgotPasswordForm extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onSubmit');
  }

  componentDidMount() {
    if (this.props.isInfoVisible) {
      this.props.dispatchResetFormAlertBoxes();
    }
  }

  render() {
    const alertBoxClasses = classNames({
      alert: true,
      'alert-info': true,
      'alert-dismissible': true,
      collapse: !this.props.isInfoVisible,
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
      <form onSubmit={ this._onSubmit } role="form">
        { loader }
        <div className={ alertBoxClasses } role="alert">
          <a className="close" data-dismiss="alert">×</a>
          <i className="fa fa-info-circle" />
          &nbsp; { this.props.infoMsg }
        </div>
        <FormInput
          text="Email Address"
          ref={ (formInputObj) => { this.email = formInputObj; } }
          validate={ FormInput.validateEmailField }
          onChange={ this._onChange.bind(this, 'Email') }
          value={ this.props.formEmail }
          errorMessage="Email is invalid"
          emptyMessage="Email can't be empty"
        />
        <button
          className="btn btn-block"
          type="submit"
        >
          Reset Password
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

    if (this.email.isValid()) {
      const email = this.props.formEmail.trim() && this.props.formEmail.toLowerCase();

      this.props.dispatchForgotPassword(email);
    } else {
      this.email.isValid();
    }
  }

}
ForgotPasswordForm.propTypes = {
  dispatchResetFormAlertBoxes: PropTypes.func.isRequired,
  dispatchSetFormField: PropTypes.func.isRequired,
  dispatchForgotPassword: PropTypes.func.isRequired,

  formEmail: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isInfoVisible: PropTypes.bool.isRequired,
  infoMsg: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    formEmail: state.forgotPassword.formEmail,
    isLoading: state.forgotPassword.isLoading,
    isInfoVisible: state.forgotPassword.info.isVisible,
    infoMsg: state.forgotPassword.info.message,
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

    dispatchForgotPassword(email) {
      dispatch(actionCreator.forgotPassword(email));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordForm);
