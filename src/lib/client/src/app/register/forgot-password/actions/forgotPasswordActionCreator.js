import StandardResponseWrapper from '../../../../common/utility/standard-response-wrapper'
import forgotPasswordConstants from '../constants/forgotPasswordConstants';

const forgotPasswordActionCreator = {
  forgotPassword(dispatch, email) {
    dispatch({
      actionType: forgotPasswordConstants.RESETTING_PASSWORD,
    });

    const url = '/api/v1/auth/forgot-password';
    const body = { email };
    const headers = { 'Content-Type': 'application/json; charset=UTF-8' };

    Proxy.post(url, body, headers)
      .then((payloadObj) => {
        const res = StandardResponseWrapper.deserialize(payloadObj);

        if (res.getNthData(0).success) {
          dispatch({
            actionType: forgotPasswordConstants.RESET_PASSWORD_SUCCEED,
          });
        } else {
          dispatch({
            actionType: forgotPasswordConstants.RESET_PASSWORD_FAIL,
          });
        }
      })
      .catch((err) => {
        dispatch({
          actionType: forgotPasswordConstants.RESET_PASSWORD_FAIL,
          data: err,
        });
      });
  },
};

export default forgotPasswordActionCreator;
