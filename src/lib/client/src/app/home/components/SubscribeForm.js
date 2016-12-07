import FormInput from '../../../common/components/FormInput';
import BaseComponent from '../../../common/components/BaseComponent';
import React from 'react';

class SubscribeForm extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onSubmit');
    this.state = {
      email: '',
      emailIsValid: false,
    };
  }

  render() {
    return (
      <form onSubmit={ this._onSubmit }>
        <div className="input-group">
          <FormInput
            onChange={ this._onChange.bind(this, 'email') } /* eslint-disable-line react/jsx-no-bind */
            value={ this.state.email }
            type="email"
            placeholder="Email Address"
            className="form-control"
            id="email"
          />
          <span className="input-group-btn">
            <button
              disabled={ !this.state.emailIsValid }
              className="btn btn-warning btn-md"
              type="submit"
            >
              Subscribe
            </button>
          </span>
        </div>
      </form>
    );
  }

  _onChange(field, value, isValid) {
    this.setState({
      [field]: value,
      [`${field}IsValid`]: isValid,
    });
  }

  _onSubmit(event) {
    this.props.onSubmit(event, this.state.email);
  }

}

export default SubscribeForm;
