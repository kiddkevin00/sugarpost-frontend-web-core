import actionTypes from '../../../../common/actiontypes/';
import Proxy from '../../../../common/proxies/HttpProxy';
import StandardResponseWrapper from '../../../../common/utility/standard-response-wrapper';
import StandardErrorWrapper from '../../../../common/utility/standard-error-wrapper';

const referralFormActionCreator = {
  resetFormAlertBoxes() {
    return {
      type: actionTypes.REFERRAL.RESET_FORM_ALERT_BOXES,
    };
  },

  redeemCredits() {
    return (dispatch/*, getState*/) => {
      dispatch({
        type: actionTypes.REFERRAL.REDEEMING_CREDITS,
      });

      const url = '/api/v1/referral/redeem';

      Proxy.post(url)
        .then((payloadObj) => {
          if (StandardResponseWrapper.verifyFormat(payloadObj)) {
            const res = StandardResponseWrapper.deserialize(payloadObj);

            if (res.getNthData(0).success) {
              dispatch({
                type: actionTypes.AUTH.USER_INFO_SYNC,
                data: {
                  user: res.getNthData(0).detail,
                },
              });

              dispatch({
                type: actionTypes.REFERRAL.REDEEM_CREDITS_SUCCEED,
              });
            } else {
              dispatch({
                type: actionTypes.REFERRAL.REDEEM_CREDITS_FAIL,
              });
            }
          } else if (StandardErrorWrapper.verifyFormat(payloadObj)) {
            const err = StandardErrorWrapper.deserialize(payloadObj);

            dispatch({
              type: actionTypes.REFERRAL.REDEEM_CREDITS_FAIL,
              data: err,
            });
          }
        })
        .catch((err) => {
          dispatch({
            type: actionTypes.REFERRAL.REDEEM_CREDITS_FAIL,
            data: err,
          });
        });
    };
  },
};

export default referralFormActionCreator;
