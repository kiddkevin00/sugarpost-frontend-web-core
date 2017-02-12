import BaseComponent from '../../common/components/BaseComponent';
import React from 'react';

class RegisterApp extends BaseComponent {

  render() {
    return (
      <div className="top-content">
        { this.props.children }
      </div>
    );
  }

}

export default RegisterApp;
