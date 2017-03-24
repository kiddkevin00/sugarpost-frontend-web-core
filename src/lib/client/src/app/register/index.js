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
                  <h1>Start Your Adventure Today</h1>
                  {/* <div className="description">
                    <p>
                      For only $24.99 a month, you will receive e-packages curated
                      by the insight of influential food bloggers and dessert connoisseurs! Within
                      your e-package, you will find a little background on each featured dessert
                      vendor and your vouchers which can claim in-store desserts or Sugarpost
                      exclusives.
                    </p>
                  </div> */}
                  <div className="top-big-link">
                    <ol>
                      <li>Learn more about this month’s featured vendors.</li>
                      <li>View your vouchers and claim your desserts.</li>
                      <li>Refer your friends and earn credits toward your next package.</li>
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
