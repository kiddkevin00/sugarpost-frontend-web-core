import Proxy from '../../../../common/proxies/proxy';
import dispatcher from '../../../../common/dispatcher/AppDispatcher';
import StandardResponseWrapper from '../../../../common/utility/standard-response-wrapper';
import paymentConstants from '../constants/paymentConstants';
import authConstants from '../../../../common/auth/constants/authConstants';

const paymentActionCreator = {
  pay(token, referCode) {
    dispatcher.dispatch({
      actionType: paymentConstants.PAYING,
    });

    const url = '/api/payment/proceed';
    const body = { referCode, tokenId: token.id, email: token.email };
    const headers = { 'Content-Type': 'application/json; charset=UTF-8' };

    Proxy.post(url, body, headers)
      .then((payloadObj) => {
        const res = StandardResponseWrapper.deserialize(payloadObj);

        if (res.getNthData(0).success) {
          dispatcher.dispatch({
            actionType: authConstants.USER_INFO_SYNC,
            data: {
              partialNewUserInfo: res.getNthData(0).detail,
            },
          });

          dispatcher.dispatch({
            actionType: paymentConstants.PAYMENT_SUCCEED,
          });
        } else if (res.getNthData(0).status === 'REFERRAL_CODE_NOT_FOUND') {
          dispatcher.dispatch({
            actionType: paymentConstants.REFERRAL_CODE_NOT_FOUND,
            data: res.getNthData(0).detail,
          });
        } else if (res.getNthData(0).status === 'PAYER_EMAIL_NOT_EXISTED') {
          dispatcher.dispatch({
            actionType: paymentConstants.EMAIL_NOT_SIGNUP,
            data: res.getNthData(0).detail,
          });
        } else if (res.getNthData(0).status === 'ALREADY_LINK_TO_STRIPE_ACC') {
          dispatcher.dispatch({
            actionType: paymentConstants.ALREADY_PAY,
            data: res.getNthData(0).detail,
          });
        } else {
          dispatcher.dispatch({
            actionType: paymentConstants.PAYMENT_FAIL,
            data: res.getNthData(0).detail,
          });
        }
      })
      .catch((err) => {
        dispatcher.dispatch({
          actionType: paymentConstants.PAYMENT_FAIL,
          data: err,
        });
      });
  },
};

export default paymentActionCreator;
