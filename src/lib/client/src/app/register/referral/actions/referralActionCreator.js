import Proxy from '../../../../common/proxies/HttpProxy';
import dispatcher from '../../../../common/dispatcher/appDispatcher';
import StandardResponseWrapper from '../../../../common/utility/standard-response-wrapper';
import StandardErrorWrapper from '../../../../common/utility/standard-error-wrapper';
import referralConstants from '../constants/referralConstants';
import authConstants from '../../../../common/auth/constants/authConstants';

const referralActionCreator = {
  redeemCredits() {
    dispatcher.dispatch({
      actionType: referralConstants.REDEEMING_CREDITS,
    });

    const url = '/api/v1/referral/redeem';

    Proxy.post(url)
      .then((payloadObj) => {
        if (StandardResponseWrapper.verifyFormat(payloadObj)) {
          const res = StandardResponseWrapper.deserialize(payloadObj);

          if (res.getNthData(0).success) {
            dispatcher.dispatch({
              actionType: authConstants.USER_INFO_SYNC,
              data: {
                partialNewUserInfo: res.getNthData(0).detail,
              },
            });

            dispatcher.dispatch({
              actionType: referralConstants.REDEEM_CREDITS_SUCCEED,
            });
          } else {
            dispatcher.dispatch({
              actionType: referralConstants.REDEEM_CREDITS_FAIL,
            });
          }
        } else if (StandardErrorWrapper.verifyFormat(payloadObj)) {
          const err = StandardErrorWrapper.deserialize(payloadObj);

          dispatcher.dispatch({
            actionType: referralConstants.REDEEM_CREDITS_FAIL,
            data: err,
          });
        }
      })
      .catch((err) => {
        dispatcher.dispatch({
          actionType: referralConstants.REDEEM_CREDITS_FAIL,
          data: err,
        });
      });
  },

  openModal() {
    dispatcher.dispatch({
      actionType: referralConstants.OPENING_MODAL,
    });
  },

  closeModal() {
    dispatcher.dispatch({
      actionType: referralConstants.CLOSING_MODAL,
    });
  },

  sendEmailToReferral(emailTo, emailFromName) {
    dispatcher.dispatch({
      actionType: referralConstants.SENDING_EMAIL_TO_REFERRAL,
    });

    const url = '/api/v1/referral/email';
    const body = { emailTo, emailFromName };
    const headers = { 'Content-Type': 'application/json; charset=UTF-8' };

    Proxy.post(url, body, headers)
      .then((payloadObj) => {
        if (StandardResponseWrapper.verifyFormat(payloadObj)) {
          const res = StandardResponseWrapper.deserialize(payloadObj);

          if (res.getNthData(0).success) {
            dispatcher.dispatch({
              actionType: referralConstants.SEND_EMAIL_TO_REFERRAL_SUCCEED,
            });
          } else {
            dispatcher.dispatch({
              actionType: referralConstants.SEND_EMAIL_TO_REFERRAL_FAIL,
            });
          }
        } else if (StandardErrorWrapper.verifyFormat(payloadObj)) {
          const err = StandardErrorWrapper.deserialize(payloadObj);

          dispatcher.dispatch({
            actionType: referralConstants.SEND_EMAIL_TO_REFERRAL_FAIL,
            data: err,
          });
        }
      })
      .catch((err) => {
        dispatcher.dispatch({
          actionType: referralConstants.SEND_EMAIL_TO_REFERRAL_FAIL,
          data: err,
        });
      });
  },
};

export default referralActionCreator;
