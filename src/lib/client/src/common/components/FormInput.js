import BaseComponent from './BaseComponent';
import FormInputError from './FormInputError';
import PasswordValidator from './PasswordValidator';
import React from 'react';
import classNames from 'classnames';

class FormInput extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_validateInput', '_checkRules', '_onChange', '_handleFocus', '_handleBlur',
      'isValid');

    this.state = {
      value: props.value,
      empty: !props.value,
      valid: true,
      focus: false,
      errorMessage: props.emptyMessage,
      isErrorVisible: false,
      isValidatorVisible: false,
      isIconsVisible: !props.useValidator, // TODO
      isAllValidatorValid: false,
      isEachValidatorValid: {
        minChars: false,
        capitalLetters: false,
        numbers: false,
        words: false,
      },
    };
  }

  componentWillReceiveProps(newProps) {
    // Performs update only when the new value is not empty.
    if (typeof newProps.value === 'string') {
      if (newProps.value.length) {
        if (newProps.useValidator) {
          this._checkRules(newProps.value);
        } else {
          this._validateInput(newProps.value);
        }

        this.setState({
          empty: false,
        });
      }

      this.setState({
        value: newProps.value,
      });
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

    if (this.props.useValidator) {
      validator = (
        <PasswordValidator
          visible={ this.state.isValidatorVisible }
          name={ this.props.text }
          value={ this.state.value }
          validData={ this.state.isEachValidatorValid }
          valid={ this.state.isAllValidatorValid }
          forbiddenWords={ this.props.forbiddenWords }
          minCharacters={ this.props.minCharacters }
          requireCapitals={ this.props.requireCapitals }
          requireNumbers={ this.props.requireNumbers }
        />
      );
    } else {
      validator = null;
    }

    return (
      <div className={ inputGroupClasses }>
        <label className="input_label" htmlFor={ this.props.text }>
          <span className="label_text">{ this.props.text }</span>
        </label>
        <input
          className="input"
          id={ this.props.text }
          value={ this.state.value }
          onChange={ this._onChange }
          onFocus={ this._handleFocus }
          onBlur={ this._handleBlur }
          autoComplete="off"
          type={ this.props.type }
          disabled={ this.props.disabled }
        />
        <FormInputError
          visible={ this.state.isErrorVisible }
          errorMessage={ this.state.errorMessage }
        />
        { validator }
      </div>
    );
  }

  _onChange(event) {
    this.props.onChange(event.target.value);

    if (this.props.useValidator) {
      this._checkRules(event.target.value);
    } else {
      this._validateInput(event.target.value);
    }

    this.setState({
      value: event.target.value,
      empty: !event.target.value,
    });
  }

  _handleFocus() {
    this.setState({
      focus: true,
      isValidatorVisible: true,
    });

    if (this.props.useValidator) {
      this.setState({
        isErrorVisible: false,
      });
    }
  }

  _handleBlur() {
    this.setState({
      focus: false,
      isErrorVisible: !this.state.valid,
      isValidatorVisible: false,
    });
  }

  _validateInput(inputText) {
   // Triggers the custom validation function, passed by the parent component.
    if (this.props.validate(inputText)) {
      this.setState({
        valid: true,
        isErrorVisible: false,
      });
    } else {
      this.setState({
        valid: false,
        errorMessage: inputText ? this.props.errorMessage : this.props.emptyMessage,
      });
    }
  }

  _checkRules(inputText) {
    const minCharsCheck = !!inputText && this._checkMinChars(inputText);
    const capitalLettersCheck = !!inputText && this._checkCaptialLetters(inputText);
    const numbersCheck = !!inputText && this._checkNumbers(inputText);
    const wordsCheck = !!inputText && this._checkWords(inputText);
    const isAllValidatorValid = minCharsCheck && capitalLettersCheck && numbersCheck && wordsCheck;
    const isEachValidatorValid = {
      minChars: minCharsCheck,
      capitalLetters: capitalLettersCheck,
      numbers: numbersCheck,
      words: wordsCheck,
    };

    this.setState({
      isAllValidatorValid,
      isEachValidatorValid,
      valid: isAllValidatorValid,
    });
  }

  _checkMinChars(inputText) {
    return inputText.length >= Number(this.props.minCharacters);
  }

  _checkCaptialLetters(inputText) {
    return inputText.replace(/[^A-Z]/g, '').length >= Number(this.props.requireCapitals);
  }


  _checkNumbers(inputText) {
    return inputText.replace(/[^\d]/g, '').length >= Number(this.props.requireNumbers);
  }

  _checkWords(inputText) {
    return this.props.forbiddenWords.indexOf(inputText) < 0;
  }

  isValid() {
    let isValid = this.state.valid;

    if (!this.state.value || !this.props.validate(this.state.value)) {
      isValid = false;

      this.setState({
        valid: isValid,
        isErrorVisible: !isValid,
      });
    }

    return isValid;
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
  useValidator: React.PropTypes.bool,
  emptyMessage: React.PropTypes.string,
  errorMessage: React.PropTypes.string,
  minCharacters: React.PropTypes.number,
  requireCapitals: React.PropTypes.number,
  requireNumbers: React.PropTypes.number,
  forbiddenWords: React.PropTypes.arrayOf(React.PropTypes.string),
  text: React.PropTypes.string,
  type: React.PropTypes.string,
  disabled: React.PropTypes.bool,
};
FormInput.defaultProps = {
  validate: FormInput.validateEmptyField,
  useValidator: false,
  emptyMessage: 'Empty',
  errorMessage: 'Invalid',
  minCharacters: 8,
  requireCapitals: 1,
  requireNumbers: 1,
  forbiddenWords: ['password', 'user'],
  text: 'Unknown Field',
  type: 'text',
  disabled: false,
};

export default FormInput;
