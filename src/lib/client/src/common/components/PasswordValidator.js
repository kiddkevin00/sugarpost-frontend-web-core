import BaseComponent from './BaseComponent';
import React from 'react';
import classNames from 'classnames';

class PasswordValidator extends BaseComponent {

  render() {
    const validatorClass = classNames({
      password_validator: true,
      visible: this.props.visible,
      invisible: !this.props.visible,
    });
    const forbiddenWordSpans = this.props.forbiddenWords.map((word, index) => (
      <span key={ index } className="bad_word">
        &quot;{ word }&quot;
      </span>
    ));
    let validatorTitle;

    if (this.props.valid) {
      validatorTitle = (
        <h4 className="validator_title valid">
          { this.props.name } IS OK
        </h4>
      );
    } else {
      validatorTitle = (
        <h4 className="validator_title invalid">
          { this.props.name } RULES
        </h4>
      );
    }

    return (
      <div className={ validatorClass }>
        <div className="validator_container">
          { validatorTitle }
          <ul className="rules_list">
            <li className={ classNames({ valid: this.props.validData.minChars }) }>

              <span className="error_message">{ this.props.minCharacters } characters minimum</span>
            </li>
            <li className={ classNames({ valid: this.props.validData.capitalLetters }) }>

              <span className="error_message">
                Contains at least { this.props.requireCapitals } capital letter
              </span>
            </li>
            <li className={ classNames({ valid: this.props.validData.numbers }) }>

              <span className="error_message">
                Contains at least { this.props.requireNumbers } number
              </span>
            </li>
            <li className={ classNames({ valid: this.props.validData.words }) }>

              <span className="error_message">Can&#39;t be { forbiddenWordSpans }</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }

}
PasswordValidator.propTypes = {
  visible: React.PropTypes.bool.isRequired,
  valid: React.PropTypes.bool.isRequired,
  validData: React.PropTypes
    .shape({
      minChars: React.PropTypes.bool.isRequired,
      capitalLetters: React.PropTypes.bool.isRequired,
      numbers: React.PropTypes.bool.isRequired,
      words: React.PropTypes.bool.isRequired,
    })
    .isRequired,
  minCharacters: React.PropTypes.number,
  requireCapitals: React.PropTypes.number,
  requireNumbers: React.PropTypes.number,
  forbiddenWords: React.PropTypes.arrayOf(React.PropTypes.string),
  name: React.PropTypes.string,
};
PasswordValidator.defaultProps = {
  minCharacters: 8,
  requireCapitals: 1,
  requireNumbers: 1,
  forbiddenWords: ['password'],
  name: 'Unknown',
};

export default PasswordValidator;
