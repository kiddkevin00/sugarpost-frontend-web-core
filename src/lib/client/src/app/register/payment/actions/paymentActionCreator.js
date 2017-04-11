import Proxy from '../../../../common/proxies/HttpProxy';
import dispatcher from '../../../../common/dispatcher/appDispatcher';
import StandardResponseWrapper from '../../../../common/utility/standard-response-wrapper';
import StandardErrorWrapper from '../../../../common/utility/standard-error-wrapper';
import paymentConstants from '../constants/paymentConstants';
import authConstants from '../../../../common/auth/constants/authConstants';
import ReactGA from 'react-ga';

const paymentActionCreator = {
  pay(token, referralCode) {
    dispatcher.dispatch({
      actionType: paymentConstants.PAYING,
    });

    const url = '/api/payment/proceed';
    const body = { referralCode, tokenId: token.id, ccLast4: token.card.last4, email: token.email };
    const headers = { 'Content-Type': 'application/json; charset=UTF-8' };

    Proxy.post(url, body, headers)
      .then((payloadObj) => {
        if (StandardResponseWrapper.verifyFormat(payloadObj)) {
          const res = StandardResponseWrapper.deserialize(payloadObj);

          if (res.getNthData(0).success) {
            ReactGA.event({
              category: 'Revenue',
              action: 'payment succeeded',
            });

            dispatcher.dispatch({
              actionType: authConstants.USER_INFO_SYNC,
              data: {
                partialNewUserInfo: res.getNthData(0).detail,
              },
            });

            dispatcher.dispatch({
              actionType: paymentConstants.PAYMENT_SUCCEED,
            });
          } else if (res.getNthData(0).status === paymentConstants.ALREADY_PAID) {
            ReactGA.event({
              category: 'Revenue',
              action: 'attempted to pay twice',
            });

            dispatcher.dispatch({
              actionType: paymentConstants.ALREADY_PAID,
              data: res.getNthData(0).detail,
            });
          } else if (res.getNthData(0).status === paymentConstants.NOT_ELIGIBLE_FOR_REFERRAL_DISCOUNT) {
            ReactGA.event({
              category: 'Revenue',
              action: 'attempted to pay with referral discount twice',
            });

            dispatcher.dispatch({
              actionType: paymentConstants.NOT_ELIGIBLE_FOR_REFERRAL_DISCOUNT,
              data: res.getNthData(0).detail,
            });
          } else if (res.getNthData(0).status === paymentConstants.REFERRAL_CODE_NOT_FOUND) {
            ReactGA.event({
              category: 'Revenue',
              action: 'attempted to pay with invalid referral code',
            });

            dispatcher.dispatch({
              actionType: paymentConstants.REFERRAL_CODE_NOT_FOUND,
              data: res.getNthData(0).detail,
            });
          } else {
            ReactGA.event({
              category: 'Revenue',
              action: 'payment failed',
            });

            dispatcher.dispatch({
              actionType: paymentConstants.PAYMENT_FAIL,
              data: res.getNthData(0).detail,
            });
          }
        } else if (StandardErrorWrapper.verifyFormat(payloadObj)) {
          ReactGA.event({
            category: 'Revenue',
            action: 'payment failed',
          });

          const err = StandardErrorWrapper.deserialize(payloadObj);

          dispatcher.dispatch({
            actionType: paymentConstants.PAYMENT_FAIL,
            data: err,
          });
        }
      })
      .catch((err) => {
        ReactGA.event({
          category: 'Revenue',
          action: 'payment failed',
        });

        dispatcher.dispatch({
          actionType: paymentConstants.PAYMENT_FAIL,
          data: err,
        });
      });
  },
};

export default paymentActionCreator;
