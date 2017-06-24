import actionTypes from '../../actiontypes/';
import Proxy from '../../proxies/HttpProxy';
import StandardResponseWrapper from '../../utils/standard-response-wrapper';
import StandardErrorWrapper from '../../utils/standard-error-wrapper';
import constants from '../../constants/';


const authActionCreator = {
  authCheck(transitionPath) {
    return (dispatch/*, getState*/) => {
      const url = '/api/v1/auth/check';

      Proxy.get(url)
        .then((payloadObj) => {
          if (StandardResponseWrapper.verifyFormat(payloadObj)) {
            const res = StandardResponseWrapper.deserialize(payloadObj);

            if (res.getNthData(0).success) {
              return dispatch({
                type: actionTypes.AUTH.IS_LOGGED_IN,
                data: {
                  user: res.getNthData(0).detail,
                },
              });
            }
            return dispatch({
              type: actionTypes.AUTH.AUTH_CHECK_FAIL,
            });
          } else if (StandardErrorWrapper.verifyFormat(payloadObj)) {
            const err = StandardErrorWrapper.deserialize(payloadObj);

            if (err.getNthError(0).code === constants.SYSTEM.ERROR_CODES.UNAUTHENTICATED) {
              return dispatch({
                type: actionTypes.AUTH.NOT_LOGGED_IN,
                data: { transitionPath },
              });
            }
          }
          return dispatch({
            type: actionTypes.AUTH.AUTH_CHECK_FAIL,
          });
        })
        .catch((err) => {
          dispatch({
            type: actionTypes.AUTH.AUTH_CHECK_FAIL,
            data: err,
          });
        });
    };
  },

  logout() {
    return (dispatch/*, getState*/) => {
      const url = '/api/v1/auth/logout';

      Proxy.get(url)
        .then((payloadObj) => {
          if (StandardResponseWrapper.verifyFormat(payloadObj)) {
            const res = StandardResponseWrapper.deserialize(payloadObj);

            if (res.getNthData(0).success) {
              dispatch({
                type: actionTypes.AUTH.LOGOUT_SUCCEED,
              });
            } else {
              dispatch({
                type: actionTypes.AUTH.LOGOUT_FAIL,
              });
            }
          } else if (StandardErrorWrapper.verifyFormat(payloadObj)) {
            const err = StandardErrorWrapper.deserialize(payloadObj);

            dispatch({
              type: actionTypes.AUTH.LOGOUT_FAIL,
              data: err,
            });
          }
        })
        .catch((err) => {
          dispatch({
            type: actionTypes.AUTH.LOGOUT_FAIL,
            data: err,
          });
        });
    };
  },
};

export default authActionCreator;
