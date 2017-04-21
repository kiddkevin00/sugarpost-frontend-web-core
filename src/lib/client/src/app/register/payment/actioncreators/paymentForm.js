import actionTypes from '../../../../common/actiontypes/';
import Proxy from '../../../../common/proxies/HttpProxy';
import StandardResponseWrapper from '../../../../common/utility/standard-response-wrapper';
import StandardErrorWrapper from '../../../../common/utility/standard-error-wrapper';
import ReactGA from 'react-ga';

const paymentFormActionCreator = {
  setFormField(field, value, validateReferralCode) {
    if (field === 'ReferralCode' && validateReferralCode(value)) {
      if (value.trim().length === 0) {
        return {
          type: actionTypes.PAYMENT.SET_FORM_FIELD,
          data: { field, value, isReferralCodeValid: false },
        };
      }
      return {
        type: actionTypes.PAYMENT.SET_FORM_FIELD,
        data: { field, value, isReferralCodeValid: true },
      };
    }
    return {
      type: actionTypes.PAYMENT.SET_FORM_FIELD,
      data: { field, value, isReferralCodeValid: false },
    };
  },

  pay(token, referralCode) {
    return (dispatch, getState) => {
      dispatch({
        type: actionTypes.PAYMENT.PAYING,
      });

      const url = '/api/v1/payment/proceed';
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

              dispatch({
                type: actionTypes.AUTH.USER_INFO_SYNC,
                data: {
                  user: res.getNthData(0).detail,
                },
              });

              dispatch({
                type: actionTypes.PAYMENT.PAYMENT_SUCCEED,
              });
            } else if (res.getNthData(0).status === actionTypes.AUTH.ALREADY_PAID) {
              ReactGA.event({
                category: 'Revenue',
                action: 'attempted to pay twice',
              });

              dispatch({
                type: actionTypes.AUTH.ALREADY_PAID,
                data: res.getNthData(0).detail,
              });
            } else if (res.getNthData(0).status === actionTypes.AUTH.NOT_ELIGIBLE_FOR_REFERRAL_DISCOUNT) {
              ReactGA.event({
                category: 'Revenue',
                action: 'attempted to pay with referral discount twice',
              });

              dispatch({
                type: actionTypes.AUTH.NOT_ELIGIBLE_FOR_REFERRAL_DISCOUNT,
                data: res.getNthData(0).detail,
              });
            } else if (res.getNthData(0).status === actionTypes.AUTH.REFERRAL_CODE_NOT_FOUND) {
              ReactGA.event({
                category: 'Revenue',
                action: 'attempted to pay with invalid referral code',
              });

              dispatch({
                type: actionTypes.AUTH.REFERRAL_CODE_NOT_FOUND,
                data: res.getNthData(0).detail,
              });
            } else {
              ReactGA.event({
                category: 'Revenue',
                action: 'payment failed',
              });

              dispatch({
                type: actionTypes.AUTH.PAYMENT_FAIL,
                data: res.getNthData(0).detail,
              });
            }
          } else if (StandardErrorWrapper.verifyFormat(payloadObj)) {
            ReactGA.event({
              category: 'Revenue',
              action: 'payment failed',
            });

            const err = StandardErrorWrapper.deserialize(payloadObj);

            dispatch({
              type: actionTypes.AUTH.PAYMENT_FAIL,
              data: err,
            });
          }
        })
        .catch((err) => {
          ReactGA.event({
            category: 'Revenue',
            action: 'payment failed',
          });

          dispatch({
            type: actionTypes.AUTH.PAYMENT_FAIL,
            data: err,
          });
        });
    };
  },
};

export default paymentFormActionCreator;
