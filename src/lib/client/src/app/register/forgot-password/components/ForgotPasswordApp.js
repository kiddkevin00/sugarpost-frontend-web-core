import forgotPasswordCreator from '../actions/forgotPasswordActionCreator';
import ForgotPasswordForm from './ForgotPasswordForm';
import BaseComponent from '../../../../common/components/BaseComponent';
import { connect } from 'react-redux';
import React from 'react';

class ForgotPasswordApp extends BaseComponent {

  constructor(props) {
    super(props);
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
          </div>
          <div className="col-lg-offset-1 col-lg-4 col-sm-5">
            <div className="form-top">
              <div className="form-top-left">
                <h3>Forgot password</h3>
                <p>Type in your email address below:</p>
              </div>
              <div className="form-top-right">
                <img src="/assets/images/sugarpost-logo.png" alt="" />
              </div>
            </div>
            <div className="form-bottom">
              { loader }
              <ForgotPasswordForm />
            </div>
          </div>
        </div>
      </div>
    );
  }

}
ForgotPasswordApp.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  isLoading: React.PropTypes.bool.isRequired,
};
ForgotPasswordApp.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    isLoading: state.isLoading,
  };
}

export default connect(mapStateToProps)(ForgotPasswordApp);
