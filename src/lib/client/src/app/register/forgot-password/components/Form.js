import actionCreator from '../actions/actionCreator';
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
    actionCreator.setForgotPasswordFormField(this.props.dispatch, field, value);
  }

  _onSubmit(event) {
    // Prevents browser's default navigation (page refresh).
    event.preventDefault();

    if (this.email.isValid()) {
      const _email = this.props.formEmail;
      const email = _email.trim() && _email.toLowerCase();

      actionCreator.forgotPassword(this.props.dispatch, email);
    } else {
      this.email.isValid();
    }
  }

}
ForgotPasswordForm.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  formEmail: React.PropTypes.string.isRequired,
  info: React.PropTypes
    .shape({
      isVisible: React.PropTypes.bool.isRequired,
      message: React.PropTypes.string.isRequired,
    })
    .isRequired,
};

function mapStateToProps(state) {
  return {
    formEmail: state.forgotPassword.formEmail,
    info: state.forgotPassword.info,
  };
}

export default connect(mapStateToProps)(ForgotPasswordForm);
