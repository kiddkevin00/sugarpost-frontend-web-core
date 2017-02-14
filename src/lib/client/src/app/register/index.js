import BaseComponent from '../../common/components/BaseComponent';
import React from 'react';
import { Element } from 'react-scroll';

class RegisterApp extends BaseComponent {

  render() {
    return (
      <div id="registration-template">

        <Element name="registration">
          <div className="inner-bg">
            <div className="container">
              <div className="row">
                <div className="col-sm-7 text">
                  <h1><strong>Bootstrap</strong> Flat Registration Form</h1>
                  <div className="description">
                    <p> This is a free responsive flat registration form made with Bootstrap.
                      Download it on <a href="http://azmind.com"><strong>AZMIND</strong></a>,
                      customize and use it as you like!
                    </p>
                  </div>
                  <div className="top-big-link">
                    <a className="btn btn-link-1" href="/register/signup">Button 1</a>
                    <a className="btn btn-link-2" href="/register/signup">Button 2</a>
                  </div>
                </div>
                <div className="col-sm-5">

                  { this.props.children }

                </div>
              </div>
            </div>
          </div>
        </Element>

      </div>
    );
  }

}

export default RegisterApp;
