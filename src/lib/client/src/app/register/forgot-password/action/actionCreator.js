import actionTypes from '../../../../common/redux/rootActionTypes';
import Proxy from '../../../../common/proxies/HttpProxy';
import StandardResponseWrapper from '../../../../common/utility/standard-response-wrapper';
import StandardErrorWrapper from '../../../../common/utility/standard-error-wrapper';

const forgotPasswordActionCreator = {
  setForgotPasswordFormField(dispatch, field, value) {
    dispatch({
      type: actionTypes.FORGOT_PASSWORD.SET_FORM_FIELD,
      data: { field, value },
    });
  },

  forgotPassword(dispatch, email) {
    dispatch({
      type: actionTypes.FORGOT_PASSWORD.RESETTING_PASSWORD,
    });

    const url = '/api/v1/auth/forgot-password';
    const body = { email };
    const headers = { 'Content-Type': 'application/json; charset=UTF-8' };

    Proxy.post(url, body, headers)
      .then((payloadObj) => {
        if (StandardResponseWrapper.verifyFormat(payloadObj)) {
          const res = StandardResponseWrapper.deserialize(payloadObj);

          if (res.getNthData(0).success) {
            dispatch({
              type: actionTypes.FORGOT_PASSWORD.RESET_PASSWORD_SUCCEED,
            });
          } else {
            dispatch({
              type: actionTypes.FORGOT_PASSWORD.RESET_PASSWORD_FAIL,
            });
          }
        } else if (StandardErrorWrapper.verifyFormat(payloadObj)) {
          const err = StandardErrorWrapper.deserialize(payloadObj);

          dispatch({
            type: actionTypes.FORGOT_PASSWORD.RESET_PASSWORD_FAIL,
            data: err,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.FORGOT_PASSWORD.RESET_PASSWORD_FAIL,
          data: err,
        });
      });
  },
};

export default forgotPasswordActionCreator;
