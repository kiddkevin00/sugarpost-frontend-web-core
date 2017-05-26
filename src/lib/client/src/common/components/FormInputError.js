import BaseComponent from './BaseComponent';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class FormInputError extends BaseComponent {

  render() {
    const errorClass = classNames({
      error_container: true,
      visible: this.props.visible,
      invisible: !this.props.visible,
    });

    return (
      <div className={ errorClass }>
        <span>{ this.props.errorMessage }</span>
      </div>
    );
  }

}
FormInputError.propTypes = {
  visible: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
};
FormInputError.defaultProps = {
  errorMessage: 'Unknown error',
};

export default FormInputError;
