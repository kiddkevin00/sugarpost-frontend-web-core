import dispatcher from '../../dispatcher/AppDispatcher';
import Proxy from '../../../common/proxies/proxy';
import StandardResponseWrapper from '../../utility/standard-response-wrapper';
import StandardErrorWrapper from '../../utility/standard-error-wrapper';
import authConstants from '../constants/authConstants';
import constants from '../../constants/';

const authActionCreator = {
  signup(email, password, fullName) {
    const url = '/api/auth/signup';
    const body = { email, password, fullName };
    const headers = { 'Content-Type': 'application/json; charset=UTF-8' };

    Proxy.post(url, body, headers)
      .then((payloadObj) => {
        const res = StandardResponseWrapper.deserialize(payloadObj);

        if (res.getNthData(0).success) {
          dispatcher.dispatch({
            actionType: authConstants.SIGNUP_SUCCEED,
            data: {
              user: res.getNthData(0).detail,
            },
          });
        } else if (res.getNthData(0).status === 'EMAIL_ALREADY_SIGNUP') {
          dispatcher.dispatch({
            actionType: authConstants.ALREADY_SIGNED_UP,
            data: res.getNthData(0).detail,
          });
        } else {
          dispatcher.dispatch({
            actionType: authConstants.SIGNUP_FAIL,
            data: res.getNthData(0).detail,
          });
        }
      })
      .catch((err) => {
        dispatcher.dispatch({
          actionType: authConstants.SIGNUP_FAIL,
          data: err,
        });
      });
  },

  login(email, password) {
    const url = '/api/auth/login';
    const body = { email, password };
    const headers = { 'Content-Type': 'application/json; charset=UTF-8' };

    Proxy.post(url, body, headers)
      .then((payloadObj) => {
        const res = StandardResponseWrapper.deserialize(payloadObj);

        if (res.getNthData(0).success) {
          dispatcher.dispatch({
            actionType: authConstants.BASIC_LOGIN_SUCCEED,
            data: {
              user: res.getNthData(0).detail,
            },
          });
        } else {
          dispatcher.dispatch({
            actionType: authConstants.BASIC_LOGIN_FAIL,
          });
        }
      })
      .catch((err) => {
        dispatcher.dispatch({
          actionType: authConstants.BASIC_LOGIN_FAIL,
          data: err,
        });
      });
  },

  logout() {
    const url = '/api/auth/logout';

    Proxy.get(url)
      .then((payloadObj) => {
        const res = StandardResponseWrapper.deserialize(payloadObj);

        if (res.getNthData(0).success) {
          dispatcher.dispatch({
            actionType: authConstants.LOGOUT_SUCCEED,
          });
        } else {
          dispatcher.dispatch({
            actionType: authConstants.LOGOUT_FAIL,
          });
        }
      })
      .catch((err) => {
        dispatcher.dispatch({
          actionType: authConstants.LOGOUT_FAIL,
          data: err,
        });
      });
  },

  forgotPassword(email) {
    const url = '/api/auth/forgot-password';
    const body = { email };
    const headers = { 'Content-Type': 'application/json; charset=UTF-8' };

    Proxy.post(url, body, headers)
      .then((payloadObj) => {
        const res = StandardResponseWrapper.deserialize(payloadObj);

        if (res.getNthData(0).success) {
          dispatcher.dispatch({
            actionType: authConstants.FORGOT_PASSWORD_SUCCEED,
          });
        } else {
          dispatcher.dispatch({
            actionType: authConstants.FORGOT_PASSWORD_FAIL,
          });
        }
      })
      .catch((err) => {
        dispatcher.dispatch({
          actionType: authConstants.FORGOT_PASSWORD_FAIL,
          data: err,
        });
      });
  },

  authCheck() {
    const url = '/api/auth/check';

    Proxy.get(url)
      .then((payloadObj) => {
        if (StandardResponseWrapper.verifyFormat(payloadObj)) {
          const res = StandardResponseWrapper.deserialize(payloadObj);

          if (res.getNthData(0).success) {
            return dispatcher.dispatch({
              actionType: authConstants.IS_LOGGED_IN,
              data: {
                user: res.getNthData(0).detail,
              },
            });
          }
          return dispatcher.dispatch({
            actionType: authConstants.NOT_LOGGED_IN,
          });
        } else if (StandardErrorWrapper.verifyFormat(payloadObj)) {
          const err = StandardErrorWrapper.deserialize(payloadObj);

          if (err.getNthError(0).code === constants.SYSTEM.ERROR_CODES.UNAUTHENTICATED) {
            return dispatcher.dispatch({
              actionType: authConstants.NOT_LOGGED_IN,
            });
          }
        }
        return dispatcher.dispatch({
          actionType: authConstants.AUTH_CHECK_FAIL,
        });
      })
      .catch((err) => {
        dispatcher.dispatch({
          actionType: authConstants.AUTH_CHECK_FAIL,
          data: err,
        });
      });
  },

  inTransition(nextState, replace) {
    const url = '/api/auth/check';

    Proxy.get(url)
      .then((payloadObj) => {
        if (StandardResponseWrapper.verifyFormat(payloadObj)) {
          const res = StandardResponseWrapper.deserialize(payloadObj);

          if (!res.getNthData(0).success) {
            const { pathname } = nextState.location;

            dispatcher.dispatch({
              actionType: authConstants.IN_TRANSITION,
              data: { path: pathname },
            });
            replace({ pathname: '/register/login' });
          }

          return;
        } else if (StandardErrorWrapper.verifyFormat(payloadObj)) {
          const err = StandardErrorWrapper.deserialize(payloadObj);

          if (err.getNthError(0).code === constants.SYSTEM.ERROR_CODES.UNAUTHENTICATED) {
            const { pathname } = nextState.location;

            dispatcher.dispatch({
              actionType: authConstants.IN_TRANSITION,
              data: { path: pathname },
            });
            replace({ pathname: '/register/login' });

            return;
          }
        }
        dispatcher.dispatch({
          actionType: authConstants.AUTH_CHECK_FAIL,
        });
      })
      .catch((err) => {
        dispatcher.dispatch({
          actionType: authConstants.AUTH_CHECK_FAIL,
          data: err,
        });
      });
  },

  storeParamMap(map) {
    for (const key in map) {
      if (key === 'refer_code' && map[key]) {
        dispatcher.dispatch({
          actionType: authConstants.STORE_PARAM_MAP,
          data: { referCode: map[key] },
        });
      }
    }
  },
};

export default authActionCreator;
