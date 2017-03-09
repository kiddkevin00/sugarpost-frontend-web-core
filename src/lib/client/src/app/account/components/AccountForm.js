import FormInput from '../../../common/components/FormInput';
import BaseComponent from '../../../common/components/BaseComponent';
import React from 'react';
import classNames from 'classnames';

class AccountForm extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onSave', '_onReset', 'isConfirmPasswordMatched');
    this.state = {
      fullName: this.props.fullName,
      email: this.props.email,
      password: '',
      confirmPassword: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      fullName: nextProps.fullName,
      email: nextProps.email,
    });
  }

  render() {
    const alertBoxClasses = classNames({
      alert: true,
      'alert-danger': true,
      'alert-dismissible': true,
      collapse: !this.props.isErrorVisible,
    });

    return (
      <form className="form-horizontal" role="form">
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
          disabled={ true }
          errorMessage="Email is invalid"
          emptyMessage="Email can't be empty"
        />
        <FormInput
          text="New Password"
          type="password"
          ref={ (formInputObj) => { this.password = formInputObj; } }
          value={ this.state.password }
          onChange={ this._onChange.bind(this, 'password') } /* eslint-disable-line react/jsx-no-bind */
          useValidator={ true }
          minCharacters={ 8 }
          requireCapitals={ 1 }
          requireNumbers={ 1 }
          forbiddenWords={ ['password', 'user', 'username'] }
          emptyMessage="Password is invalid"
        />
        <FormInput
          text="Confirm New Password"
          type="password"
          ref={ (formInputObj) => { this.confirmPassword = formInputObj; } }
          validate={ this.isConfirmPasswordMatched }
          value={ this.state.confirmPassword }
          onChange={ this._onChange.bind(this, 'confirmPassword') } /* eslint-disable-line react/jsx-no-bind */
          emptyMessage="Please confirm your password"
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
      this.confirmPassword.isValid()
    ) {
      this.props.onSubmit(event, this.state.email, this.state.password, this.state.fullName);
    } else {
      this.fullName.isValid();
      this.email.isValid();
      this.password.isValid();
      this.confirmPassword.isValid();
    }
  }

  _onReset() {
    this.setState({
      fullName: this.props.fullName,
      email: this.props.email,
      password: '',
      confirmPassword: '',
    });
  }

  isConfirmPasswordMatched(inputText) {
    return inputText === this.state.password;
  }

}
AccountForm.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  fullName: React.PropTypes.string,
  email: React.PropTypes.string,
  isErrorVisible: React.PropTypes.bool.isRequired,
  errorMsg: React.PropTypes.string,
};
AccountForm.defaultProps = {
  fullName: 'Loading...',
  email: 'Loading...',
  errorMsg: 'Oops! Something went wrong. Please try again.',
};

export default AccountForm;
