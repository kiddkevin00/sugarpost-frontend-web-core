import PaymentForm from './PaymentForm';
import authActionCreator from '../../../../common/auth/actioncreator/';
import BaseComponent from '../../../../common/components/BaseComponent';
import constants from '../../../../common/constants/';
import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';


const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'];

class PaymentApp extends BaseComponent {

  componentDidMount() {
    if (!this.props.isLoggedIn) {
      this.props.dispatchAuthCheck(this.props.urlPath);
    }
  }

  componentWillUpdate(nextProps) {
    if (!nextProps.isLoggedIn) {
      nextProps.history.replace('/register/login');
    } else if (nextProps.userType === constants.SYSTEM.USER_TYPES.PAID) {
      nextProps.history.replace('/account');
    }
  }

  render() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();
    let monthNameToSubscribe;

    if (currentDay <= 25) {
      monthNameToSubscribe = monthNames[currentMonth + 1];
    } else {
      monthNameToSubscribe = monthNames[currentMonth + 2];
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-7 text">
            <h1>Start Your Adventure Today</h1>
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
                <li>
                  Receive two vouchers during the first day of every month (more than 10% discount
                  off of the total retail value).
                </li>
                <li>Visit the dessert shops.</li>
                <li>Redeem and enjoy desserts by the end of the month!</li>
                <li>No time? No worries! You can share any of your vouchers with friends!</li>
              </ol>
            </div>
          </div>
          <div className="col-lg-offset-1 col-lg-4 col-sm-5">
            <div className="form-top">
              <div className="form-top-left">
                <h3>Pay now</h3>
                <p>Secure your { monthNameToSubscribe } e-package now:</p>
              </div>
              <div className="form-top-right">
                <img src="/assets/images/sugarpost-logo.png" alt="" />
              </div>
            </div>
            <div className="form-bottom">
              <PaymentForm
                subscribedMonth={ monthNameToSubscribe }
                email={ this.props.userEmail }
                referralCodeToUse={ this.props.referralCodeToUse }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

}
PaymentApp.propTypes = {
  dispatchAuthCheck: PropTypes.func.isRequired,

  isLoggedIn: PropTypes.bool.isRequired,
  forceUpdate: PropTypes.bool.isRequired,
  userType: PropTypes.string,
  userEmail: PropTypes.string.isRequired,
  referralCodeToUse: PropTypes.string,
  urlPath: PropTypes.string.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    forceUpdate: state.auth.forceUpdate,
    userType: state.auth.user.type,
    userEmail: ownProps.location.search.length > 2 ? ownProps.location.search.split('=')[1].split('&')[0] : '', // TODO
    referralCodeToUse: ownProps.location.search.length > 2 ? ownProps.location.search.split('=')[2] : '', // TODO
    urlPath: ownProps.location.pathname,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatchAuthCheck(transitionPath) {
      dispatch(authActionCreator.authCheck(transitionPath));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentApp);
