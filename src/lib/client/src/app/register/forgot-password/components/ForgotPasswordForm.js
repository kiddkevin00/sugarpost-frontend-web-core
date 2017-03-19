import FormInput from '../../../../common/components/FormInput';
import BaseComponent from '../../../../common/components/BaseComponent';
import React from 'react';
import classNames from 'classnames';

class ForgotPasswordForm extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onChange', '_onSubmit');
    this.state = {
      email: '',
    };
  }

  render() {
    const alertBoxClasses = classNames({
      alert: true,
      'alert-info': true,
      'alert-dismissible': true,
      collapse: !this.props.isInfoVisible,
    });

    return (
      <form onSubmit={ this._onSubmit } role="form">
        <div className={ alertBoxClasses } role="alert">
          <a className="close" data-dismiss="alert">×</a>
          <i className="fa fa-info-circle" />
          &nbsp; { this.props.infoMsg }
        </div>
        <FormInput
          text="Email Address"
          ref={ (formInputObj) => { this.email = formInputObj; } }
          validate={ FormInput.validateEmailField }
          value={ this.state.email }
          onChange={ this._onChange.bind(this, 'email') } /* eslint-disable-line react/jsx-no-bind */
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
    this.setState({
      [field]: value,
    });
  }

  _onSubmit(event) {
    // Prevents browser's default navigation (page refresh).
    event.preventDefault();

    if (this.email.isValid()) {
      this.props.onSubmit(event, this.state.email);
    } else {
      this.email.isValid();
    }
  }

}
ForgotPasswordForm.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  isInfoVisible: React.PropTypes.bool.isRequired,
  infoMsg: React.PropTypes.string,
};
ForgotPasswordForm.defaultProps = {
  infoMsg: 'Oops! Something went wrong. Please try again.',
};

export default ForgotPasswordForm;
