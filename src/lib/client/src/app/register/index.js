import BaseComponent from '../../common/components/BaseComponent';
import React from 'react';

class RegisterApp extends BaseComponent {

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-4 col-sm-5 col-md-6 col-lg-7">
            <img style={ { width: '100%', paddingTop: '15px' } } src="/assets/images/woman-eating-dessert.jpg" alt="Every woman loves desserts.." />
          </div>
          <div className="col-xs-8 col-sm-7 col-md-6 col-lg-5">
            { this.props.children }
          </div>
        </div>
      </div>
    );
  }

}

export default RegisterApp;
