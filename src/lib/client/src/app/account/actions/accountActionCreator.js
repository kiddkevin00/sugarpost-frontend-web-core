import Proxy from '../../../common/proxies/HttpProxy';
import dispatcher from '../../../common/dispatcher/appDispatcher';
import StandardResponseWrapper from '../../../common/utility/standard-response-wrapper';
import accountConstants from '../constants/accountConstants';
import authConstants from '../../../common/auth/constants/authConstants';

const accountActionCreator = {
  updateProfile(password, newPassword, fullName) {
    dispatcher.dispatch({
      actionType: accountConstants.UPDATING_PROFILE,
    });

    const url = '/api/user/info';
    const body = { password, newPassword, fullName };
    const headers = { 'Content-Type': 'application/json; charset=UTF-8' };

    Proxy.put(url, body, headers)
      .then((payloadObj) => {
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
      })
      .catch((err) => {
        dispatcher.dispatch({
          actionType: accountConstants.UPDATE_PROFILE_FAIL,
          data: err,
        });
      });
  },

  cancelSubscription() {
    dispatcher.dispatch({
      actionType: accountConstants.CANCELLING_SUBSCRIPTION,
    });

    const url = '/api/subscription/unsubscribe';

    Proxy.post(url)
      .then((payloadObj) => {
        const res = StandardResponseWrapper.deserialize(payloadObj);

        if (res.getNthData(0).success) {
          dispatcher.dispatch({
            actionType: authConstants.USER_INFO_SYNC,
            data: {
              partialNewUserInfo: { type: 'cancelled' },
            },
          });

          dispatcher.dispatch({
            actionType: accountConstants.CANCEL_SUBSCRIPTION_SUCCEED,
          });
        } else {
          dispatcher.dispatch({
            actionType: accountConstants.CANCEL_SUBSCRIPTION_FAIL,
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
