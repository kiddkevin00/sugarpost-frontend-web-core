import FormInput from '../../../common/components/FormInput';
import BaseComponent from '../../../common/components/BaseComponent';
import React from 'react';
import classNames from 'classnames';

class AccountForm extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onSave', '_onReset', 'isConfirmNewPasswordMatched');
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
          disabled={ true }
          errorMessage="Email is invalid"
          emptyMessage="Email can't be empty"
        />
        <FormInput
          text="Old Password"
          type="password"
          ref={ (formInputObj) => { this.password = formInputObj; } }
          value={ this.state.password }
          onChange={ this._onChange.bind(this, 'password') } /* eslint-disable-line react/jsx-no-bind */
          errorMessage="Old password is invalid"
          emptyMessage="Old password can't be empty"
        />
        <FormInput
          text="New Password"
          type="password"
          ref={ (formInputObj) => { this.newPassword = formInputObj; } }
          value={ this.state.newPassword }
          onChange={ this._onChange.bind(this, 'newPassword') } /* eslint-disable-line react/jsx-no-bind */
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
          validate={ this.isConfirmNewPasswordMatched }
          value={ this.state.confirmNewPassword }
          onChange={ this._onChange.bind(this, 'confirmNewPassword') } /* eslint-disable-line react/jsx-no-bind */
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
    this.setState({
      [field]: value,
    });
  }

  _onSave(event) {
    if (
      this.fullName.isValid() &&
      this.email.isValid() &&
      this.password.isValid() &&
      this.newPassword.isValid() &&
      this.confirmNewPassword.isValid()
    ) {
      this.props.onSubmit(event, this.state.password, this.state.newPassword, this.state.fullName);
    } else {
      this.fullName.isValid();
      this.email.isValid();
      this.password.isValid();
      this.newPassword.isValid();
      this.confirmNewPassword.isValid();
    }
  }

  _onReset(event) {
    this.setState({
      fullName: this.props.fullName,
      email: this.props.email,
      password: '',
      newPassword: '',
      confirmNewPassword: '',
    });
  }

  isConfirmNewPasswordMatched(inputText) {
    return inputText === this.state.newPassword;
  }

}
AccountForm.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  isInfoVisible: React.PropTypes.bool.isRequired,
  isErrorVisible: React.PropTypes.bool.isRequired,
  infoMsg: React.PropTypes.string,
  errorMsg: React.PropTypes.string,
  fullName: React.PropTypes.string,
  email: React.PropTypes.string,
};
AccountForm.defaultProps = {
  infoMsg: 'Request has been completed.',
  errorMsg: 'Oops! Something went wrong. Please try again.',
  fullName: 'Loading...',
  email: 'Loading...',
};

export default AccountForm;
