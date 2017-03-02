import BaseComponent from './BaseComponent';
import React from 'react';
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

export default FormInputError;
