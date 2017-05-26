import BaseComponent from './BaseComponent';
import CustomIcon from './CustomIcon';
import React from 'react';
import PropTypes from 'prop-types';
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
              <i className="icon_valid"><CustomIcon type="circle_tick_filled" /></i>
              <i className="icon_invalid"><CustomIcon type="circle_error" /></i>
              <span className="error_message">{ this.props.minCharacters } characters minimum</span>
            </li>
            <li className={ classNames({ valid: this.props.validData.capitalLetters }) }>
              <i className="icon_valid"><CustomIcon type="circle_tick_filled" /></i>
              <i className="icon_invalid"><CustomIcon type="circle_error" /></i>
              <span className="error_message">
                Contains at least { this.props.requireCapitals } capital letter
              </span>
            </li>
            <li className={ classNames({ valid: this.props.validData.numbers }) }>
              <i className="icon_valid"><CustomIcon type="circle_tick_filled" /></i>
              <i className="icon_invalid"><CustomIcon type="circle_error" /></i>
              <span className="error_message">
                Contains at least { this.props.requireNumbers } number
              </span>
            </li>
            <li className={ classNames({ valid: this.props.validData.words }) }>
              <i className="icon_valid"><CustomIcon type="circle_tick_filled" /></i>
              <i className="icon_invalid"><CustomIcon type="circle_error" /></i>
              <span className="error_message">Can&#39;t be { forbiddenWordSpans }</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }

}
PasswordValidator.propTypes = {
  visible: PropTypes.bool.isRequired,
  valid: PropTypes.bool.isRequired,
  validData: PropTypes
    .shape({
      minChars: PropTypes.bool.isRequired,
      capitalLetters: PropTypes.bool.isRequired,
      numbers: PropTypes.bool.isRequired,
      words: PropTypes.bool.isRequired,
    })
    .isRequired,
  minCharacters: PropTypes.number,
  requireCapitals: PropTypes.number,
  requireNumbers: PropTypes.number,
  forbiddenWords: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
};
PasswordValidator.defaultProps = {
  minCharacters: 8,
  requireCapitals: 1,
  requireNumbers: 1,
  forbiddenWords: ['password'],
  name: 'Unknown',
};

export default PasswordValidator;
