import BaseComponent from '../../common/components/BaseComponent';
import React from 'react';

class RegisterApp extends BaseComponent {

  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }

}

export default RegisterApp;
