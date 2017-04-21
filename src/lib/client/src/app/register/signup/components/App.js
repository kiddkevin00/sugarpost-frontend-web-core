import SignupForm from './SignupForm';
import BaseComponent from '../../../../common/components/BaseComponent';
import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';

class SignupApp extends BaseComponent {

  componentWillUpdate(nextProps, nextState, nextContext) {
    if (nextProps.isLoggedIn) {
      nextContext.router.push({
        pathname: '/register/payment',
        query: { email: nextProps.userEmail },
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-7 text">
            <h1>Adventure Awaits You</h1>
            <div className="description">
              <p>
                For only $12.50 a month, you will receive e-packages curated by the insight of
                influential food bloggers and dessert connoisseurs! Within your e-package, you
                will find a little background on each featured dessert vendor and your vouchers
                which can claim in-store desserts or Sugarpost exclusives.
              </p>
            </div>
            <div className="top-big-link">
              <ol>
                <li>Sign up to the right and become a paid subscriber.</li>
                <li>Receive two vouchers during the first day of every month.</li>
                <li>Visit the dessert shops.</li>
                <li>Redeem desserts and enjoy!</li>
              </ol>
            </div>
          </div>
          <div className="col-lg-offset-1 col-lg-4 col-sm-5">
            <div className="form-top">
              <div className="form-top-left">
                <h3>Sign up now</h3>
                <p>Fill in the form below to get started:</p>
              </div>
              <div className="form-top-right">
                <img src="/assets/images/sugarpost-logo.png" alt="" />
              </div>
            </div>
            <div className="form-bottom">
              <SignupForm />
              <div className="row">
                <div className="col-xs-offset-1 col-xs-10">
                  <br />
                  <p className="text-center">
                    By signing up, you agree to our
                    <a href="/terms-of-use">&nbsp;Terms&nbsp;</a>
                    &
                    <a href="/privacy-policy">&nbsp;Privacy Policy&nbsp;</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SignupApp.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  userEmail: PropTypes.string,
};
SignupApp.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    userEmail: state.auth.user.email,
  };
}
export default connect(mapStateToProps)(SignupApp);
