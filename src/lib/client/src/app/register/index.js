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
                      For only $24.99 a month, you will receive e-packages curated
                      by the insight of influential food bloggers and dessert connoisseurs! Within
                      your e-package, you will find a little background on each featured dessert
                      vendor and your redemption codes which can claim in-store desserts or
                      Sugarpost exclusives.
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
