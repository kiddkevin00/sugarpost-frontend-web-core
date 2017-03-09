import Proxy from '../../../../common/proxies/proxy';
import dispatcher from '../../../../common/dispatcher/AppDispatcher';
import StandardResponseWrapper from '../../../../common/utility/standard-response-wrapper';
import constants from '../constants/forgotPasswordConstants';

const forgotPasswordActionCreator = {
  forgotPassword(email) {
    const url = '/api/auth/forgot-password';
    const body = { email };
    const headers = { 'Content-Type': 'application/json; charset=UTF-8' };

    Proxy.post(url, body, headers)
      .then((payloadObj) => {
        const res = StandardResponseWrapper.deserialize(payloadObj);

        if (res.getNthData(0).success) {
          dispatcher.dispatch({
            actionType: constants.FORGOT_PASSWORD_SUCCEED,
          });
        } else {
          dispatcher.dispatch({
            actionType: constants.FORGOT_PASSWORD_FAIL,
          });
        }
      })
      .catch((err) => {
        dispatcher.dispatch({
          actionType: constants.FORGOT_PASSWORD_FAIL,
          data: err,
        });
      });
  },
};

export default forgotPasswordActionCreator;
