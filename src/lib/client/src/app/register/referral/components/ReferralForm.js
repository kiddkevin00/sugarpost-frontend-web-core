import actionCreator from '../actioncreators/referralForm';
import ShareSection from './ShareSection';
import BaseComponent from '../../../../common/components/BaseComponent';
import constants from '../../../../common/constants/';
import { Thumbnail } from 'react-bootstrap';
import { connect } from 'react-redux';
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const refererCredit = 1.25;
const redeemableAmount = 12.5;

class ReferralForm extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onRedeem');
  }

  render() {
    const alertSuccessBoxClasses = classNames({
      alert: true,
      'alert-success': true,
      'alert-dismissible': true,
      collapse: !this.props.isInfoVisible,
    });
    const alertErrorBoxClasses = classNames({
      alert: true,
      'alert-danger': true,
      'alert-dismissible': true,
      collapse: !this.props.isErrorVisible,
    });
    const creditBalance = this.props.userReferralAmount * refererCredit;
    const creditBalanceStr = window.parseFloat(creditBalance).toFixed(2);
    const isNotRedeemable = creditBalance < redeemableAmount ||
      this.props.userType === constants.SYSTEM.USER_TYPES.INFLUENCER;
    let loader;

    if (this.props.isLoading) {
      loader = (
        <div className="slow-loader" />
      );
    } else {
      loader = null;
    }

    return (
      <Thumbnail src="/assets/images/sugarpost-logo.png" alt="">
        { loader }
        <div className={ alertSuccessBoxClasses } role="alert">
          <a className="close" data-dismiss="alert">×</a>
          <i className="fa fa-check-square-o" />
          &nbsp; { this.props.infoMsg }
        </div>
        <div className={ alertErrorBoxClasses } role="alert">
          <a className="close" data-dismiss="alert">×</a>
          <i className="fa fa-exclamation-triangle" />
          &nbsp; { this.props.errorMsg }
        </div>
        <div className="row">
          <div className="col-xs-12">
            <h4>YOUR REFERRAL CODE:</h4>
            <h2>{ this.props.userReferralCode || 'N/A' }</h2>
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
              onClick={ this._onRedeem }
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
            <ShareSection />
          </div>
        </div>
      </Thumbnail>
    );
  }

  _onRedeem() {
    this.props.dispatchRedeemCredits();
  }

}
ReferralForm.propTypes = {
  dispatchRedeemCredits: PropTypes.func.isRequired,

  userType: PropTypes.string,
  userReferralCode: PropTypes.string,
  userReferralAmount: PropTypes.number,
  isLoading: PropTypes.bool.isRequired,
  isInfoVisible: PropTypes.bool.isRequired,
  infoMsg: PropTypes.string.isRequired,
  isErrorVisible: PropTypes.bool.isRequired,
  errorMsg: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    userType: state.auth.user.type,
    userReferralCode: state.auth.user.referralCode,
    userReferralAmount: state.auth.user.referralAmount,
    isLoading: state.referral.isLoading,
    isInfoVisible: state.referral.info.isVisible,
    infoMsg: state.referral.info.message,
    isErrorVisible: state.referral.error.isVisible,
    errorMsg: state.referral.error.message,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatchRedeemCredits() {
      dispatch(actionCreator.redeemCredits());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReferralForm);
