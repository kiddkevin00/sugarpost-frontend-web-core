import Proxy from '../../../common/proxies/HttpProxy';
import dispatcher from '../../../common/dispatcher/appDispatcher';
import StandardResponseWrapper from '../../../common/utility/standard-response-wrapper';
import StandardErrorWrapper from '../../../common/utility/standard-error-wrapper';
import accountConstants from '../constants/accountConstants';
import authConstants from '../../../common/auth/constants/authConstants';
import constants from '../../../common/constants/';

const accountActionCreator = {
  updateProfile(password, newPassword, fullName) {
    dispatcher.dispatch({
      actionType: accountConstants.UPDATING_PROFILE,
    });

    const url = '/api/v1/user/info';
    const body = { password, newPassword, fullName };
    const headers = { 'Content-Type': 'application/json; charset=UTF-8' };

    Proxy.put(url, body, headers)
      .then((payloadObj) => {
        if (StandardResponseWrapper.verifyFormat(payloadObj)) {
          const res = StandardResponseWrapper.deserialize(payloadObj);

          if (res.getNthData(0).success) {
            dispatcher.dispatch({
              actionType: authConstants.USER_INFO_SYNC,
              data: {
                partialNewUserInfo: { fullName },
              },
            });

            dispatcher.dispatch({
              actionType: accountConstants.UPDATE_PROFILE_SUCCEED,
            });
          } else {
            dispatcher.dispatch({
              actionType: accountConstants.UPDATE_PROFILE_FAIL,
            });
          }
        } else if (StandardErrorWrapper.verifyFormat(payloadObj)) {
          const err = StandardErrorWrapper.deserialize(payloadObj);

          dispatcher.dispatch({
            actionType: accountConstants.UPDATE_PROFILE_FAIL,
            data: err,
          });
        }
      })
      .catch((err) => {
        dispatcher.dispatch({
          actionType: accountConstants.UPDATE_PROFILE_FAIL,
          data: err,
        });
      });
  },

  cancelSubscription(router, email) {
    dispatcher.dispatch({
      actionType: accountConstants.CANCELLING_SUBSCRIPTION,
    });

    const url = '/api/v1/subscription/unsubscribe';

    Proxy.post(url)
      .then((payloadObj) => {
        if (StandardResponseWrapper.verifyFormat(payloadObj)) {
          const res = StandardResponseWrapper.deserialize(payloadObj);

          if (res.getNthData(0).success) {
            dispatcher.dispatch({
              actionType: authConstants.USER_INFO_SYNC,
              data: {
                partialNewUserInfo: { type: constants.SYSTEM.USER_TYPES.CANCELLED },
              },
            });

            dispatcher.dispatch({
              actionType: accountConstants.CANCEL_SUBSCRIPTION_SUCCEED,
            });

            router.push({
              pathname: '/register/payment',
              query: { email },
            });
          } else {
            dispatcher.dispatch({
              actionType: accountConstants.CANCEL_SUBSCRIPTION_FAIL,
            });
          }
        } else if (StandardErrorWrapper.verifyFormat(payloadObj)) {
          const err = StandardErrorWrapper.deserialize(payloadObj);

          dispatcher.dispatch({
            actionType: accountConstants.CANCEL_SUBSCRIPTION_FAIL,
            data: err,
          });
        }
      })
      .catch((err) => {
        dispatcher.dispatch({
          actionType: accountConstants.CANCEL_SUBSCRIPTION_FAIL,
          data: err,
        });
      });
  },
};

export default accountActionCreator;
