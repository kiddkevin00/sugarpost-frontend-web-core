import FormInput from '../../../common/components/FormInput';
import BaseComponent from '../../../common/components/BaseComponent';
import React from 'react';

class ForgotPasswordForm extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onChange', '_onSubmit');
    this.state = {
      email: '',
    };
  }

  render() {
    return (
      <form onSubmit={ this._onSubmit } role="form">
        <FormInput
          text="Email Address"
          ref={ (formInputObj) => { this.email = formInputObj; } }
          validate={ FormInput.validateEmailField }
          value={ this.state.email }
          onChange={ this._onChange.bind(this, 'email') } /* eslint-disable-line react/jsx-no-bind */
          emptyMessage="Empty"
          errorMessage="Invalid"
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
    if (FormInput.validateEmailField(this.state.email)) {
      this.props.onSubmit(event, this.state.email);
    } else {
      this.email.isValid();
    }
  }

}
ForgotPasswordForm.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
};

export default ForgotPasswordForm;
