import BaseComponent from './BaseComponent';
import FormInputError from './FormInputError';
import PasswordValidator from './PasswordValidator';
import React from 'react';
import classNames from 'classnames';

class FormInput extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onChange', '_handleFocus', '_handleBlur', 'validateInput', 'isValid',
      '_mouseEnterError');
    this.state = {
      empty: !props.value,
      focus: false,
      value: props.value,
      iconsVisible: !props.validator,
      errorMessage: props.emptyMessage,
      validator: props.validator,
      validatorVisible: false,
      minCharacters: props.minCharacters,
      requireCapitals: props.requireCapitals,
      requireNumbers: props.requireNumbers,
      forbiddenWords: props.forbiddenWords,
      isValidatorValid: {
        minChars: false,
        capitalLetters: false,
        numbers: false,
        words: false,
        all: false,
      },
      allValidatorValid: false,
    };
  }

  componentWillReceiveProps(newProps) {
    // Performs update only when new value exists and not empty
    if (newProps.value) {
      if (typeof newProps.value === 'undefined' && newProps.value.length > 0) {
        if (this.props.validate) {
          this.validateInput(newProps.value);
        }
        this.setState({
          value: newProps.value,
          empty: !newProps.value,
        });
      }
    }
  }

  render() {
    const inputGroupClasses = classNames({
      input_group_template: true,
      input_valid: this.state.valid,
      input_error: !this.state.valid,
      input_empty: this.state.empty,
      input_hasValue: !this.state.empty,
      input_focused: this.state.focus,
      input_unfocused: !this.state.focus,
    });
    let validator;

    if (this.state.validator) {
      validator = (
        <PasswordValidator
          ref={ (passwordValidatorObj) => { this.passwordValidator = passwordValidatorObj; } }
          visible={ this.state.validatorVisible }
          name={ this.props.text }
          value={ this.state.value }
          validData={ this.state.isValidatorValid }
          valid={ this.state.allValidatorValid }
          forbiddenWords={ this.state.forbiddenWords }
          minCharacters={ this.props.minCharacters }
          requireCapitals={ this.props.requireCapitals }
          requireNumbers={ this.props.requireNumbers }
        />
      );
    }

    return (
      <div className={ inputGroupClasses }>
        <label className="input_label" htmlFor={ this.props.text }>
          <span className="label_text">{ this.props.text }</span>
        </label>
        <input
          placeholder={ this.props.placeholder }
          className="input"
          id={ this.props.text }
          value={ this.state.value }
          onChange={ this._onChange }
          onFocus={ this._handleFocus }
          onBlur={ this._handleBlur }
          autoComplete="off"
        />

        <FormInputError
          visible={ this.state.errorVisible }
          errorMessage={ this.state.errorMessage }
        />

      </div>
    );
  }

  _onChange(event) {
    this.setState({
      value: event.target.value,
      empty: !event.target.value,
    });

    if (this.props.validate) {
      this.validateInput(event.target.value);
    }

    if (this.props.onChange) {
      this.props.onChange(event.target.value);
    }
  }

  validateInput(value) {
   // Triggers custom validation method in the parent component
    if (this.props.validate && this.props.validate(value)) {
      this.setState({
        valid: true,
        errorVisible: false,
      });
    } else {
      this.setState({
        valid: false,
        errorMessage: value ? this.props.errorMessage : this.props.emptyMessage,
      });
    }
  }

  isValid() {
    if (this.props.validate) {
      if (!this.state.value || !this.props.validate(this.state.value)) {
        this.setState({
          valid: false,
          errorVisible: true,
        });
      }
    }
    return this.state.valid;
  }

  _handleFocus() {
    this.setState({
      focus: true,
      validatorVisible: true,
    });
    if (this.props.validator) {
      this.setState({
        errorVisible: false,
      });
    }
  }

  _handleBlur() {
    this.setState({
      focus: false,
      errorVisible: !this.state.valid,
      validatorVisible: false,
    });
  }

  _mouseEnterError() {
    this.setState({
      errorVisible: true,
    });
  }

  static validateEmptyField(inputText) {
    return !!inputText && inputText.trim().length !== 0;
  }

  static validateEmailField(inputText) {
    const regExp = new RegExp('^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|' +
      '(\\".+\\"))@((\\[[0-9]{1,3}.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|' +
      '(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$');

    return regExp.test(inputText);
  }

}
FormInput.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  value: React.PropTypes.string.isRequired,
  validate: React.PropTypes.func,
  emptyMessage: React.PropTypes.string,
  errorMessage: React.PropTypes.string,
  text: React.PropTypes.string,
};
FormInput.defaultProps = {
  validate: FormInput.validateEmptyField,
  emptyMessage: 'Empty',
  errorMessage: 'Invalid',
  text: 'Unknown Field',
};

export default FormInput;
