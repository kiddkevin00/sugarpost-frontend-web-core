import authStore from '../../../../common/auth/stores/authStore';
import LoginForm from './LoginForm';
import BaseComponent from '../../../../common/components/BaseComponent';
import constants from '../../../../common/constants/';
import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';

class LoginApp extends BaseComponent {

  componentWillUpdate(nextProps, nextState, nextContext) {
    if (nextProps.isLoggedIn) {
      const transitionPath = authStore.getTransitionPath();
      const paymentRoute = {
        pathname: '/register/payment',
        query: { email: nextProps.userEmail },
      };
      const accountRoute = {
        pathname: '/account',
      };
      const referralRoute = {
        pathname: '/register/referral',
      };

      if (transitionPath === '/register/payment') {
        nextContext.router.push(paymentRoute);
      } else if (nextProps.userType === constants.SYSTEM.USER_TYPES.PAID) {
        nextContext.router.push(transitionPath || accountRoute);
      } else if (nextProps.userType === constants.SYSTEM.USER_TYPES.INFLUENCER) {
        nextContext.router.push(transitionPath || referralRoute);
      } else if (nextProps.userType === constants.SYSTEM.USER_TYPES.VENDOR) {
        nextContext.router.push(transitionPath || accountRoute);
      } else {
        nextContext.router.push(transitionPath || paymentRoute);
      }
    }
  }

  render() {
    let loader;

    if (this.props.isLoading) {
      loader = (
        <div className="slow-loader" />
      );
    } else {
      loader = null;
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-7 text">
            <h1>Claim Your Desserts Today</h1>
            <div className="description">
              <p>
                Log in to change your account settings, view, email, or print your vouchers from
                your purchased e-package, or get your referral code to share with your friends. Not
                a paying subscriber yet? If you already have an account, log in to start your
                subscription today!
              </p>
            </div>
            <div className="top-big-link">
              <ol>
                <li>Learn more about this month’s featured vendors.</li>
                <li>View your vouchers and claim your desserts.</li>
                <li>Refer and earn credits.</li>
              </ol>
            </div>
          </div>
          <div className="col-lg-offset-1 col-lg-4 col-sm-5">
            <div className="form-top">
              <div className="form-top-left">
                <h3>Log in</h3>
                <p>Fill in the form below to access your account:</p>
              </div>
              <div className="form-top-right">
                <img src="/assets/images/sugarpost-logo.png" alt="" />
              </div>
            </div>
            <div className="form-bottom">
              { loader }
              <LoginForm />
              <br />
              <a href="/register/forgot-password" className="center-block text-center">
                Forgot password?
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
LoginApp.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  userEmail: PropTypes.string,
  userType: PropTypes.string,
};
LoginApp.contextTypes = {
  router: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    isLoading: state.login.isLoading,
    isLoggedIn: state.auth.isLoggedIn,
    userEmail: state.auth.user.email,
    userType: state.auth.user.type,
  };
}

export default connect(mapStateToProps)(LoginApp);