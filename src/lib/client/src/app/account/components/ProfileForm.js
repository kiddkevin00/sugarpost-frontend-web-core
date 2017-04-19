import actionCreator from '../actionCreator';
import FormInput from '../../../common/components/FormInput';
import BaseComponent from '../../../common/components/BaseComponent';
import { connect } from 'react-redux';
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class ProfileForm extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onSave', '_onReset', '_isConfirmNewPasswordMatched');
    this.state = {
      fullName: props.fullName,
      email: props.email,
      password: '',
      newPassword: '',
      confirmNewPassword: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      fullName: nextProps.fullName,
      email: nextProps.email,
    });
  }

  render() {
    const alertSuccessBoxClasses = classNames({
      alert: true,
      'alert-success': true,
      'alert-dismissible': true,
      collapse: !this.props.isInfoVisible,
    });
    const alertErrorBoxClasses = classNames({
      alert: true,
      'alert-danger': true,
      'alert-dismissible': true,
      collapse: !this.props.isErrorVisible,
    });

    return (
      <form className="form-horizontal" role="form">
        <div className={ alertSuccessBoxClasses } role="alert">
          <a className="close" data-dismiss="alert">×</a>
          <i className="fa fa-check-square-o" />
          &nbsp; { this.props.infoMsg }
        </div>
        <div className={ alertErrorBoxClasses } role="alert">
          <a className="close" data-dismiss="alert">×</a>
          <i className="fa fa-exclamation-triangle" />
          &nbsp; { this.props.errorMsg }
        </div>
        <FormInput
          text="Full Name"
          ref={ (formInputObj) => { this.fullName = formInputObj; } }
          value={ this.props.formFullName === undefined ? this.props.originalFullName : this.props.formFullName }
          onChange={ this._onChange.bind(this, 'FullName') } /* eslint-disable-line react/jsx-no-bind */
          errorMessage="Full name is invalid"
          emptyMessage="Full name can't be empty"
        />
        <FormInput
          text="Email Address"
          ref={ (formInputObj) => { this.email = formInputObj; } }
          validate={ FormInput.validateEmailField }
          value={ this.props.formEmail === undefined ? this.props.originalEmail : this.props.formEmail }
          onChange={ this._onChange.bind(this, 'Email') } /* eslint-disable-line react/jsx-no-bind */
          disabled={ true }
          errorMessage="Email is invalid"
          emptyMessage="Email can't be empty"
        />
        <FormInput
          text="Old Password"
          type="password"
          ref={ (formInputObj) => { this.password = formInputObj; } }
          value={ this.props.formPassword }
          onChange={ this._onChange.bind(this, 'Password') } /* eslint-disable-line react/jsx-no-bind */
          errorMessage="Old password is invalid"
          emptyMessage="Old password can't be empty"
        />
        <FormInput
          text="New Password"
          type="password"
          ref={ (formInputObj) => { this.newPassword = formInputObj; } }
          value={ this.props.formNewPassword }
          onChange={ this._onChange.bind(this, 'NewPassword') } /* eslint-disable-line react/jsx-no-bind */
          useValidator={ true }
          minCharacters={ 8 }
          requireCapitals={ 1 }
          requireNumbers={ 1 }
          forbiddenWords={ ['password', 'user', 'username'] }
          emptyMessage={ window.innerWidth > 870 ? 'Password is invalid' : '8+ chars, 1+ uppers, 1+ numbers' }
        />
        <FormInput
          text="Confirm New Password"
          type="password"
          ref={ (formInputObj) => { this.confirmNewPassword = formInputObj; } }
          validate={ this._isConfirmNewPasswordMatched }
          value={ this.props.formConfirmNewPassword }
          onChange={ this._onChange.bind(this, 'ConfirmNewPassword') } /* eslint-disable-line react/jsx-no-bind */
          emptyMessage="Please confirm your new password"
          errorMessage="Passwords don't match"
        />
        <div className="form-group">
          <div className="col-sm-6">
            <input
              onClick={ this._onSave }
              type="button"
              className="btn btn-primary btn-block"
              value="Save Changes"
            />
          </div>
          <div className="col-sm-6">
            <input
              onClick={ this._onReset }
              type="button"
              className="btn btn-default btn-block"
              value="Cancel"
            />
          </div>
        </div>
      </form>
    );
  }

  _onChange(field, value) {
    this.props.dispatchSetFormField(field, value);
  }

  _onSave(event) {
    if (
      this.fullName.isValid() &&
      this.email.isValid() &&
      this.password.isValid() &&
      this.newPassword.isValid() &&
      this.confirmNewPassword.isValid()
    ) {
      const formFullName = this.props.formFullName || this.props.originalFullName;

      this.props.dispatchUpdateProfile(formFullName, this.props.formPassword,
        this.props.formNewPassword);
    } else {
      this.fullName.isValid();
      this.email.isValid();
      this.password.isValid();
      this.newPassword.isValid();
      this.confirmNewPassword.isValid();
    }
  }

  _onReset(event) {
    this.props.dispatchResetForm(this.props.originalFullName, this.props.originalEmail);
  }

  _isConfirmNewPasswordMatched(inputText) {
    return inputText === this.props.formNewPassword;
  }

}
ProfileForm.propTypes = {
  dispatchSetFormField: PropTypes.func.isRequired,
  dispatchUpdateProfile: PropTypes.func.isRequired,
  dispatchResetForm: PropTypes.func.isRequired,
  formFullName: PropTypes.string,
  formEmail: PropTypes.string,
  formPassword: PropTypes.string.isRequired,
  formNewPassword: PropTypes.string.isRequired,
  formConfirmNewPassword: PropTypes.string.isRequired,
  originalFullName: PropTypes.string,
  originalEmail: PropTypes.string,
  isInfoVisible: PropTypes.bool.isRequired,
  infoMsg: PropTypes.string.isRequired,
  isErrorVisible: PropTypes.bool.isRequired,
  errorMsg: PropTypes.string.isRequired,
};
ProfileForm.defaultProps = {
  originalFullName: 'loading...',
  originalEmail: 'loading...',
};

function mapStateToProps(state) {
  return {
    formFullName: state.accountProfile.formFullName,
    formEmail: state.accountProfile.formEmail,
    formPassword: state.accountProfile.formPassword,
    formNewPassword: state.accountProfile.formNewPassword,
    formConfirmNewPassword: state.accountProfile.formConfirmNewPassword,
    originalFullName: state.auth.user.fullName,
    originalEmail: state.auth.user.email,
    isInfoVisible: state.accountProfile.info.isVisible,
    infoMsg: state.accountProfile.info.message,
    isErrorVisible: state.accountProfile.error.isVisible,
    errorMsg: state.accountProfile.error.message,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatchSetFormField(field, value) {
      dispatch(actionCreator.setFormField(field, value));
    },

    dispatchUpdateProfile(fullName, password, newPassword) {
      dispatch(actionCreator.updateProfile(fullName, password, newPassword));
    },

    dispatchResetForm(fullName, email) {
      dispatch(actionCreator.resetForm(fullName, email));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
