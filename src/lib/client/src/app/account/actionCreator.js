import actionTypes from '../../common/action-types/';
import Proxy from '../../common/proxies/HttpProxy';
import StandardResponseWrapper from '../../common/utility/standard-response-wrapper';
import StandardErrorWrapper from '../../common/utility/standard-error-wrapper';
import constants from '../../common/constants/';

const accountActionCreator = {
  updateProfile(password, newPassword, fullName) {
    return (dispatch, getState) => {
      dispatch({
        type: actionTypes.UPDATING_PROFILE,
      });

      const url = '/api/v1/user/info';
      const body = { password, newPassword, fullName };
      const headers = { 'Content-Type': 'application/json; charset=UTF-8' };

      Proxy.put(url, body, headers)
        .then((payloadObj) => {
          if (StandardResponseWrapper.verifyFormat(payloadObj)) {
            const res = StandardResponseWrapper.deserialize(payloadObj);

            if (res.getNthData(0).success) {
              dispatch({
                type: actionTypes.USER_INFO_SYNC,
                data: {
                  partialNewUserInfo: { fullName },
                },
              });

              dispatch({
                type: actionTypes.UPDATE_PROFILE_SUCCEED,
              });
            } else {
              dispatch({
                type: actionTypes.UPDATE_PROFILE_FAIL,
              });
            }
          } else if (StandardErrorWrapper.verifyFormat(payloadObj)) {
            const err = StandardErrorWrapper.deserialize(payloadObj);

            dispatch({
              type: actionTypes.UPDATE_PROFILE_FAIL,
              data: err,
            });
          }
        })
        .catch((err) => {
          dispatch({
            type: actionTypes.UPDATE_PROFILE_FAIL,
            data: err,
          });
        });
    };
  },

  cancelSubscription(router, email) {
    return (dispatch, getState) => {
      dispatch({
        type: actionTypes.CANCELLING_SUBSCRIPTION,
      });

      const url = '/api/v1/subscription/unsubscribe';

      Proxy.post(url)
        .then((payloadObj) => {
          if (StandardResponseWrapper.verifyFormat(payloadObj)) {
            const res = StandardResponseWrapper.deserialize(payloadObj);

            if (res.getNthData(0).success) {
              dispatch({
                type: actionTypes.USER_INFO_SYNC,
                data: {
                  partialNewUserInfo: { type: constants.SYSTEM.USER_TYPES.CANCELLED },
                },
              });

              dispatch({
                type: actionTypes.CANCEL_SUBSCRIPTION_SUCCEED,
              });

              router.push({
                pathname: '/register/payment',
                query: { email },
              });
            } else {
              dispatch({
                type: actionTypes.CANCEL_SUBSCRIPTION_FAIL,
              });
            }
          } else if (StandardErrorWrapper.verifyFormat(payloadObj)) {
            const err = StandardErrorWrapper.deserialize(payloadObj);

            dispatch({
              type: actionTypes.CANCEL_SUBSCRIPTION_FAIL,
              data: err,
            });
          }
        })
        .catch((err) => {
          dispatch({
            type: actionTypes.CANCEL_SUBSCRIPTION_FAIL,
            data: err,
          });
        });
    };
  },
};

export default accountActionCreator;
