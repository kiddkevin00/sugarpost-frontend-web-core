import actionTypes from '../../../common/actiontypes/';
import Proxy from '../../../common/proxies/HttpProxy';
import StandardResponseWrapper from '../../../common/utility/standard-response-wrapper';
import StandardErrorWrapper from '../../../common/utility/standard-error-wrapper';
import constants from '../../../common/constants/';

const accountSubscriptionActionCreator = {
  resetFormAlertBoxes() {
    return {
      type: actionTypes.ACCOUNT__SUBSCRIPTION.RESET_FORM_ALERT_BOXES,
    };
  },

  cancelSubscription(routerHistory) {
    return (dispatch, getState) => {
      dispatch({
        type: actionTypes.ACCOUNT__SUBSCRIPTION.CANCELLING_SUBSCRIPTION,
      });

      const url = '/api/v1/subscription/unsubscribe';

      Proxy.post(url)
        .then((payloadObj) => {
          if (StandardResponseWrapper.verifyFormat(payloadObj)) {
            const res = StandardResponseWrapper.deserialize(payloadObj);

            if (res.getNthData(0).success) {
              dispatch({
                type: actionTypes.AUTH.USER_INFO_SYNC,
                data: {
                  user: { type: constants.SYSTEM.USER_TYPES.CANCELLED },
                },
              });

              dispatch({
                type: actionTypes.ACCOUNT__SUBSCRIPTION.CANCEL_SUBSCRIPTION_SUCCEED,
              });

              routerHistory.push({
                pathname: '/register/payment',
                search: `?email=${getState().auth.user.email}`,
              });
            } else {
              dispatch({
                type: actionTypes.ACCOUNT__SUBSCRIPTION.CANCEL_SUBSCRIPTION_FAIL,
              });
            }
          } else if (StandardErrorWrapper.verifyFormat(payloadObj)) {
            const err = StandardErrorWrapper.deserialize(payloadObj);

            dispatch({
              type: actionTypes.ACCOUNT__SUBSCRIPTION.CANCEL_SUBSCRIPTION_FAIL,
              data: err,
            });
          }
        })
        .catch((err) => {
          dispatch({
            type: actionTypes.ACCOUNT__SUBSCRIPTION.CANCEL_SUBSCRIPTION_FAIL,
            data: err,
          });
        });
    };
  },
};

export default accountSubscriptionActionCreator;
