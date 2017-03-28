import Proxy from '../../../../common/proxies/HttpProxy';
import dispatcher from '../../../../common/dispatcher/appDispatcher';
import StandardResponseWrapper from '../../../../common/utility/standard-response-wrapper';
import referralConstants from '../constants/referralConstants';

const referralActionCreator = {
  openModal() {
    dispatcher.dispatch({
      actionType: referralConstants.OPENING_MODAL,
    });
  },

  sendEmailToReferral(emailTo, emailFromName) {
    dispatcher.dispatch({
      actionType: referralConstants.SENDING_EMAIL_TO_REFERRAL,
    });

    const url = '/api/referral/email';
    const body = { emailTo, emailFromName };
    const headers = { 'Content-Type': 'application/json; charset=UTF-8' };

    Proxy.post(url, body, headers)
      .then((payloadObj) => {
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
