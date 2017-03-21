import BaseComponent from '../../common/components/BaseComponent';
import { Element } from 'react-scroll';
import React from 'react';

class RegisterApp extends BaseComponent {

  render() {
    return (
      <div id="registration-template">

        <Element name="registration">
          <div className="inner-bg">
            <div className="container">
              <div className="row">
                <div className="col-sm-7 text">
                  <h1>Welcome...</h1>
                  <div className="description">
                    <p>
                      For only $24.99 a month, you can get 4 of the city’s trendiest desserts
                      monthly, e-packages curated by the insight of the most influential food
                      bloggers and dessert connosieurs! Not only will these e-packages contain
                      your redemption codes for your desserts, but they will also provide a guide
                      to where these desserts are located and a little background on each dessert
                      vendor for your discovery experience.
                    </p>
                  </div>
                  <div className="top-big-link">
                    <ol>
                      <li>Sign up to the right and become a paid subscriber.</li>
                      <li>Receive your redemption codes during the first week of every month.</li>
                      <li>Visit the dessert shops.</li>
                      <li>Redeem your desserts and enjoy!</li>
                    </ol>
                  </div>
                </div>
                <div className="col-lg-offset-1 col-lg-4 col-sm-5">

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
