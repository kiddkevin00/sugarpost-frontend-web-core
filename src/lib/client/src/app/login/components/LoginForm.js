import FormInput from '../../../common/components/FormInput';
import BaseComponent from '../../../common/components/BaseComponent';
import React from 'react';

class LoginForm extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onChange', '_onSubmit');
    this.state = {
      email: '',
      password: '',
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
        <FormInput
          text="Password"
          ref={ (formInputObj) => { this.password = formInputObj; } }
          value={ this.state.password }
          onChange={ this._onChange.bind(this, 'password') } /* eslint-disable-line react/jsx-no-bind */
          emptyMessage="Empty"
          errorMessage="Invalid"
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
    this.setState({
      [field]: value,
    });
  }

  _onSubmit(event) {
    if (
      FormInput.validateEmailField(this.state.email) &&
      FormInput.validateEmptyField(this.state.password)
    ) {
      this.props.onSubmit(event, this.state.email, this.state.password);
    } else {
      this.email.isValid();
      this.password.isValid();
    }
  }

}
LoginForm.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
};

export default LoginForm;
