import BaseComponent from '../../../../common/components/BaseComponent';
import React from 'react';

class FormInput extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onChange');
    this.state = {
      email: '',
      emailIsValid: false,
      password: '',
      passwordIsValid: false,
    };
  }

  render() {
    return (
      <input
        onChange={ this._onChange }
        className={ this.props.className }
        placeholder={ this.props.placeholder }
        value={ this.props.value }
        type={ this.props.type }
        required="required"
      />
    );
  }

  _onChange(event) {
    this.props.onChange(event.target.value, event.target.checkValidity());
  }

}
FormInput.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  value: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string.isRequired,
  className: React.PropTypes.string.isRequired
};

export default FormInput;
