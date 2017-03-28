import BaseComponent from '../../common/components/BaseComponent';
import { Element } from 'react-scroll';
import React from 'react';

class RegisterApp extends BaseComponent {

  render() {
    return (
      <div id="registration-template">

        <Element name="registration">
          <div className="inner-bg">
            { this.props.children }
          </div>
        </Element>

      </div>
    );
  }

}

export default RegisterApp;
