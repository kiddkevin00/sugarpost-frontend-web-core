import BaseComponent from './BaseComponent';
import React from 'react';
import classNames from 'classnames';

class PasswordValidator extends BaseComponent {
  constructor(props) {
    super(props);

    this._bind();
    this.state = {
      value: null,
      minCharacters: props.minCharacters,
      requireCapitals: props.requireCapitals,
      requireNumbers: props.requireNumbers,
      name: props.name
    }
  }
  render() {
    const validatorClass = classNames({
      password_validator: true,
      visible: this.props.visible,
      invisible: !this.props.visible
    });

    let validatorTitle;

    if (this.props.valid) {
      validatorTitle = (
        <h4 className="validator_title valid">
          {this.props.name} IS OK
        </h4>
      )
    } else {
      validatorTitle = (
        <h4 className="validator_title invalid">
          {this.props.name} RULES
        </h4>
      )
    }
    return (
      <div className={ validatorClass }>
        <div className="validator_container">

          {validatorTitle}

          <ul className="rules_list">
            <li className={ classNames({ valid: this.props.validData.minChars }) }>

              <span className="error_message">{this.state.minCharacters} characters minimum</span>
            </li>

            <li className={ classNames({ valid: this.props.validData.capitalLetters }) }>

              <span className="error_message">Contains at least {this.state.requireCapitals} capital letter</span>
            </li>

            <li className={ classNames({ valid: this.props.validData.numbers }) }>
              <span className="error_message">Contains at least {this.state.requireNumbers} number</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }

}

export default PasswordValidator;
