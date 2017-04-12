import forgotPasswordCreator from '../actions/forgotPasswordActionCreator';
import FormInput from '../../../../common/components/FormInput';
import BaseComponent from '../../../../common/components/BaseComponent';
import { connect } from 'react-redux';
import React from 'react';
import classNames from 'classnames';

class ForgotPasswordForm extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onSubmit');
  }

  render() {
    const alertBoxClasses = classNames({
      alert: true,
      'alert-info': true,
      'alert-dismissible': true,
      collapse: !this.props.info.isVisible,
    });

    return (
      <form onSubmit={ this._onSubmit } role="form">
        <div className={ alertBoxClasses } role="alert">
          <a className="close" data-dismiss="alert">×</a>
          <i className="fa fa-info-circle" />
          &nbsp; { this.props.info.message }
        </div>
        <FormInput
          text="Email Address"
          ref={ (formInputObj) => { this.email = formInputObj; } }
          validate={ FormInput.validateEmailField }
          onChange={ this._onChange.bind(this, 'Email') } /* eslint-disable-line react/jsx-no-bind */
          value={ this.props.forgotPasswordFormEmail }
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
    forgotPasswordCreator.setForgotPasswordFormField(this.props.dispatch, field, value);
  }

  _onSubmit(event) {
    // Prevents browser's default navigation (page refresh).
    event.preventDefault();

    if (this.email.isValid()) {
      const _email = this.props.forgotPasswordFormEmail;
      const email = _email.trim() && _email.toLowerCase();

      forgotPasswordCreator.forgotPassword(this.props.dispatch, email);
    } else {
      this.email.isValid();
    }
  }

}
ForgotPasswordForm.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  forgotPasswordFormEmail: React.PropTypes.string.isRequired,
  isLoading: React.PropTypes.bool.isRequired,
  info: React.PropTypes
    .shape({
      isVisible: React.PropTypes.bool.isRequired,
      message: React.PropTypes.string.isRequired,
    })
    .isRequired,
};

function mapStateToProps(state) {
  return {
    forgotPasswordFormEmail: state.forgotPasswordFormEmail,
    isLoading: state.isLoading,
    info: state.forgotPasswordInfo,
  };
}

export default connect(mapStateToProps)(ForgotPasswordForm);
