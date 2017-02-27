import FormInput from '../../../../common/components/FormInput';
import BaseComponent from '../../../../common/components/BaseComponent';
import React from 'react';

class SignupForm extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onClick', 'validateEmail');
    this.state = {
      fullName: '',
      email: '',
    };
  }

  render() {
    return (
      <form role="form">
        <FormInput
          text="Full Name"
          ref={(c) => { this.fullName = c; }}
          validate={ SignupForm.isEmpty }
          value={ this.state.fullName }
          onChange={ this._onChange.bind(this, 'fullName') }
          emptyMessage="name can't be empty"
        />

        <FormInput
          text="Email Address"
          ref={(c) => { this.email = c; } }
          type="text"
          validate={ this.validateEmail }
          value={ this.state.email }
          onChange={ this._onChange.bind(this, 'email') }
          errorMessage="Email is invalid"
          emptyMessage="Email can't be empty"
          errorVisible={ this.state.showEmailError }
        />


        <div className="form-group">
          <label className="sr-only" htmlFor="form-password">Password</label>

        </div>
        <div className="form-group">
          <label className="sr-only" htmlFor="form-confirm-password">Confirm Password</label>

        </div>
        <button
          onClick={ this._onClick }
          disabled={ false }
          className="btn btn-block"
          type="button"
        >
          Sign Me Up!
        </button>
      </form>
    );
  }

  _onChange(field, value) {
    this.setState({
      [field]: value
    });
  }

  _onClick(event) {
    event.preventDefault();
    const canProceed = this.state.fullName && this.validateEmail(this.state.email)

    if (canProceed) {
      // send to on submit
      // var data = {
      //   email: this.state.email,
      //   state: this.state.statesValue
      // }
      //this.props.onSubmit(event, this.state.email, this.state.password, this.state.fullName);
      alert('Thanks.');
    } else {
      this.fullName.isValid();
      this.email.isValid();
    }
  }

  validateEmail(event) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(event);
  }

  static isEmpty(value) {
    return !(!value || value.length === 0)
  }

}
SignupForm.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
};

export default SignupForm;
