import BaseComponent from './BaseComponent';
import React from 'react';
import classNames from 'classnames';

class PasswordValidator extends BaseComponent {

  constructor(props) {
    super(props);

    this.state = {
      value: null,
      minCharacters: props.minCharacters,
      requireCapitals: props.requireCapitals,
      requireNumbers: props.requireNumbers,
      forbiddenWords: props.forbiddenWords,
      name: props.name,
    };
  }

  render() {
    const validatorClass = classNames({
      password_validator: true,
      visible: this.props.visible,
      invisible: !this.props.visible,
    });
    const forbiddenWords = this.state.forbiddenWords.map((word, i) => (
      <span key={ i } className="bad_word">
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

              <span className="error_message">{this.state.minCharacters} characters minimum</span>
            </li>

            <li className={ classNames({ valid: this.props.validData.capitalLetters }) }>

              <span className="error_message">
                Contains at least {this.state.requireCapitals} capital letter
              </span>
            </li>

            <li className={ classNames({ valid: this.props.validData.numbers }) }>

              <span className="error_message">
                Contains at least {this.state.requireNumbers} number
              </span>
            </li>
            <li className={ classNames({ valid: this.props.validData.words }) }>

              <span className="error_message">Can&#39;t be { forbiddenWords }</span>
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
  minCharacters: React.PropTypes.string,
  requireCapitals: React.PropTypes.string,
  requireNumbers: React.PropTypes.string,
  forbiddenWords: React.PropTypes.arrayOf(React.PropTypes.string),
  name: React.PropTypes.string,
};
PasswordValidator.defaultProps = {
  minCharacters: '8',
  requireCapitals: '1',
  requireNumbers: '1',
  forbiddenWords: ['password'],
  name: 'Unknown',
};

export default PasswordValidator;
