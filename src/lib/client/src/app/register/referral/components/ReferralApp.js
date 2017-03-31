import authStore from '../../../../common/auth/stores/authStore';
import referralStore from '../stores/referralStore';
import authActionCreator from '../../../../common/auth/actions/authActionCreator';
import referralActionCreator from '../actions/referralActionCreator';
import ShareSection from './ShareSection';
import BaseComponent from '../../../../common/components/BaseComponent';
import constants from '../../../../common/constants/';
import { Thumbnail } from 'react-bootstrap';
import React from 'react';
import classNames from 'classnames';

const refererCredit = 2.5;
const redeemableAmount = 25;

class ReferralApp extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onChange');
    this.state = _getState();
  }

  componentDidMount() {
    authStore.addChangeListener(this._onChange);
    referralStore.addChangeListener(this._onChange);

    if (!this.state.isLoggedIn) {
      authActionCreator.authCheck();
    }
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    if (!nextState.isLoggedIn) {
      nextContext.router.push('/register/login');
    } else if (
      nextState.user.type === constants.SYSTEM.USER_TYPES.UNPAID
    ) {
      nextContext.router.push({
        pathname: '/register/payment',
        query: { email: nextState.user.email },
      });
    }
  }

  componentWillUnmount() {
    referralActionCreator.landPage();

    authStore.removeChangeListener(this._onChange);
    referralStore.removeChangeListener(this._onChange);
  }

  render() {
    const alertSuccessBoxClasses = classNames({
      alert: true,
      'alert-success': true,
      'alert-dismissible': true,
      collapse: !this.state.info.isVisible,
    });
    const alertErrorBoxClasses = classNames({
      alert: true,
      'alert-danger': true,
      'alert-dismissible': true,
      collapse: !this.state.error.isVisible,
    });
    const creditBalance = this.state.user.referralAmount * refererCredit;
    const creditBalanceStr = window.parseFloat(creditBalance).toFixed(2);
    const isNotRedeemable = creditBalance < redeemableAmount ||
      this.state.user.type === constants.SYSTEM.USER_TYPES.INFLUENCER;
    let loader;

    if (this.state.isLoading) {
      loader = (
        <div className="slow-loader" />
      );
    } else {
      loader = null;
    }

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
                <b><i>&nbsp;10% discount off their first month&nbsp;</i></b>
                with Sugarpost!
              </p>
              <p>
                Sugarpost has an amazing referral program! For each friend that subscribes to our
                monthly service using your referral code, we will add $2.50 to your Sugarpost
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
              <Thumbnail src="/assets/images/sugarpost-logo.png" alt="">
                <div className={ alertSuccessBoxClasses } role="alert">
                  <a className="close" data-dismiss="alert">×</a>
                  <i className="fa fa-check-square-o" />
                  &nbsp; { this.state.info.message }
                </div>
                <div className={ alertErrorBoxClasses } role="alert">
                  <a className="close" data-dismiss="alert">×</a>
                  <i className="fa fa-exclamation-triangle" />
                  &nbsp; { this.state.error.message }
                </div>
                <div className="row">
                  <div className="col-xs-12">
                    <h4>YOUR REFERRAL CODE:</h4>
                    <h2>{ this.state.user.referralCode || 'N/A' }</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12">
                    <p>Outstanding Sugarpost Credits:</p>
                    <p>{ `$${creditBalanceStr}` }</p>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-xs-offset-1 col-xs-10">
                    <button
                      onClick={ ReferralApp._onRedeem }
                      disabled={ isNotRedeemable }
                      className="btn btn-block"
                      type="button"
                    >
                      REDEEM NOW
                    </button>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-xs-12">
                    { loader }
                    <ShareSection
                      myFullName={ this.state.user.fullName }
                      myReferralCode={ this.state.user.referralCode }
                      isInfoVisible={ this.state.info.isVisible }
                      isErrorVisible={ this.state.error.isVisible }
                      infoMsg={ this.state.info.message }
                      errorMsg={ this.state.error.message }
                    />
                  </div>
                </div>
              </Thumbnail>
            </div>
          </div>
        </div>
      </div>
    );
  }

  _onChange() {
    this.setState(_getState());
  }

  static _onRedeem() {
    referralActionCreator.redeemCredits();
  }

}
ReferralApp.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

/*
 * A private method. It should only be used by `setState()` and `getInitialState()` to sync up
 * the data in the Flux's store.
 */
function _getState() {
  return {
    isLoggedIn: authStore.isLoggedIn(),
    user: authStore.getUser(),
    info: referralStore.getInfo(),
    error: referralStore.getError(),
    isLoading: referralStore.isLoading(),
  };
}

export default ReferralApp;
