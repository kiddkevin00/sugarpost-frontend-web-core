import authActionCreator from '../../../../common/auth/actioncreator/';
import ReferralForm from './ReferralForm';
import BaseComponent from '../../../../common/components/BaseComponent';
import constants from '../../../../common/constants/';
import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';

class ReferralApp extends BaseComponent {

  componentDidMount() {
    if (!this.props.isLoggedIn) {
      this.props.dispatchAuthCheck();
    }
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    if (!nextProps.isLoggedIn) {
      nextContext.router.push('/register/login');
    } else if (
      nextProps.userType === constants.SYSTEM.USER_TYPES.UNPAID
    ) {
      nextContext.router.push({
        pathname: '/register/payment',
        query: { email: nextProps.userEmail },
      });
    }
  }

  render() {
    return (
      <div id="referral-app" className="container">
        <div className="row">
          <div className="col-sm-7 text">
            <h1>Sugarpost Referral Program</h1>
            <div className="description">
              <p>
                Did you enjoy your Sugarpost subscription service? Share the service with your
                friends by clicking the Facebook, Twitter, or Email buttons on the right. Should
                you want to tell your friends outside these platforms, feel free to send them your
                referral code so they can get a
                <b><i>&nbsp;50% discount off their first month&nbsp;</i></b>
                with Sugarpost!
              </p>
              <p>
                Sugarpost has an amazing referral program! For each friend that subscribes to our
                monthly service using your referral code, we will add $1.25 to your Sugarpost
                credits.
                <b><i>
                  &nbsp;Invite ten friends to use your outstanding credits to get next month&#39;s
                  e-package free!
                </i></b>
              </p>
            </div>
          </div>
          <div className="col-lg-offset-1 col-lg-4 col-sm-5">
            <div className="form-top">
              <ReferralForm />
            </div>
          </div>
        </div>
      </div>
    );
  }

}
ReferralApp.propTypes = {
  dispatchAuthCheck: PropTypes.func.isRequired,

  isLoggedIn: PropTypes.bool.isRequired,
  forceUpdate: PropTypes.bool.isRequired,
  userEmail: PropTypes.string,
  userType: PropTypes.string,
};
ReferralApp.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    forceUpdate: state.auth.forceUpdate,
    userEmail: state.auth.user.email,
    userType: state.auth.user.type,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatchAuthCheck() {
      dispatch(authActionCreator.authCheck());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReferralApp);
