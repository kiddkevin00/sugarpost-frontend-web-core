import Proxy from '../../../common/proxies/proxy';
import dispatcher from '../../../common/dispatcher/AppDispatcher';
import StandardResponseWrapper from '../../../common/utility/standard-response-wrapper';
import accountConstants from '../constants/accountConstants';
import authConstants from '../../../common/auth/constants/authConstants';

const accountActionCreator = {
  updateProfile(email, password, fullName) {
    dispatcher.dispatch({
      actionType: accountConstants.UPDATING_PROFILE,
    });

    const url = '/api/user/info';
    const body = { password, fullName };
    const headers = { 'Content-Type': 'application/json; charset=UTF-8' };
    const query = { email };

    Proxy.put(url, body, headers, query)
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
};

export default accountActionCreator;
