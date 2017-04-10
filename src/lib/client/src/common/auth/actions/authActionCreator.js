import dispatcher from '../../dispatcher/appDispatcher';
import Proxy from '../../proxies/HttpProxy';
import StandardResponseWrapper from '../../utility/standard-response-wrapper';
import StandardErrorWrapper from '../../utility/standard-error-wrapper';
import authConstants from '../constants/authConstants';
import constants from '../../constants/';

const authActionCreator = {
  landPage() {
    dispatcher.dispatch({
      actionType: authConstants.LAND_PAGE,
    });
  },

  signup(email, password, fullName) {
    dispatcher.dispatch({
      actionType: authConstants.SIGNING_UP,
    });

    const url = '/api/v1/auth/signup';
    const body = { email, password, fullName };
    const headers = { 'Content-Type': 'application/json; charset=UTF-8' };

    Proxy.post(url, body, headers)
      .then((payloadObj) => {
        if (StandardResponseWrapper.verifyFormat(payloadObj)) {
          const res = StandardResponseWrapper.deserialize(payloadObj);

          if (res.getNthData(0).success) {
            const userInfo = res.getNthData(0).detail;

            if (
              /^((?!chrome|android).)*safari/i.test(window.navigator.userAgent) ||
              window.navigator.vendor === 'Apple Computer, Inc.' ||
              Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0
            ) {
              const env = window.process.env.NODE_ENV;
              const callbackUrlPath = `/register/payment?email=${userInfo.email}`;
              const _origin = window.location.origin;
              let origin;
              let fullUrl;

              switch (env) {
                case 'production':
                  origin = constants.SYSTEM.URL_BASES.PROD_BACKEND_API;
                  break;
                case 'test':
                  origin = constants.SYSTEM.URL_BASES.TEST_BACKEND_API;
                  break;
                default:
                  origin = constants.SYSTEM.URL_BASES.LOCAL_BACKEND_API;
                  break;
              }

              fullUrl = `${origin}/api/v1/auth/token`;

              if (Object.keys(userInfo).length) {
                const queryStringObj = Object.assign({}, userInfo, {
                  callback_url: `${_origin}${callbackUrlPath}`,
                });

                fullUrl += `?${this._parseQueryStringObj(queryStringObj)}`;
              }

              window.open(fullUrl, '_self');
            } else {
              dispatcher.dispatch({
                actionType: authConstants.SIGNUP_SUCCEED,
                data: {
                  user: userInfo,
                },
              });
            }
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
        } else if (StandardErrorWrapper.verifyFormat(payloadObj)) {
          const err = StandardErrorWrapper.deserialize(payloadObj);

          dispatcher.dispatch({
            actionType: authConstants.SIGNUP_FAIL,
            data: err,
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
    dispatcher.dispatch({
      actionType: authConstants.LOGGING_IN,
    });

    const url = '/api/v1/auth/login';
    const body = { email, password };
    const headers = { 'Content-Type': 'application/json; charset=UTF-8' };

    Proxy.post(url, body, headers)
      .then((payloadObj) => {
        if (StandardResponseWrapper.verifyFormat(payloadObj)) {
          const res = StandardResponseWrapper.deserialize(payloadObj);

          if (res.getNthData(0).success) {
            const userInfo = res.getNthData(0).detail;

            if (
              /^((?!chrome|android).)*safari/i.test(window.navigator.userAgent) ||
              window.navigator.vendor === 'Apple Computer, Inc.' ||
              Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0
            ) {
              const env = window.process.env.NODE_ENV;
              const _origin = window.location.origin;
              let origin;
              let fullUrl;
              let callbackUrlPath;

              switch (env) {
                case 'production':
                  origin = constants.SYSTEM.URL_BASES.PROD_BACKEND_API;
                  break;
                case 'test':
                  origin = constants.SYSTEM.URL_BASES.TEST_BACKEND_API;
                  break;
                default:
                  origin = constants.SYSTEM.URL_BASES.LOCAL_BACKEND_API;
                  break;
              }

              fullUrl = `${origin}/api/v1/auth/token`;

              switch (userInfo.type) {
                case constants.SYSTEM.USER_TYPES.PAID:
                  callbackUrlPath = '/account';
                  break;
                case constants.SYSTEM.USER_TYPES.INFLUENCER:
                  callbackUrlPath = '/register/referral';
                  break;
                case constants.SYSTEM.USER_TYPES.VENDOR:
                  callbackUrlPath = '/account';
                  break;
                default:
                  callbackUrlPath = `/register/payment?email=${userInfo.email}`;
                  break;
              }

              if (Object.keys(userInfo).length) {
                const queryStringObj = Object.assign({}, userInfo, {
                  callback_url: `${_origin}${callbackUrlPath}`,
                });

                fullUrl += `?${this._parseQueryStringObj(queryStringObj)}`;
              }

              window.open(fullUrl, '_self');
            } else {
              dispatcher.dispatch({
                actionType: authConstants.BASIC_LOGIN_SUCCEED,
                data: {
                  user: userInfo,
                },
              });
            }
          } else {
            dispatcher.dispatch({
              actionType: authConstants.BASIC_LOGIN_FAIL,
            });
          }
        } else if (StandardErrorWrapper.verifyFormat(payloadObj)) {
          const err = StandardErrorWrapper.deserialize(payloadObj);

          dispatcher.dispatch({
            actionType: authConstants.BASIC_LOGIN_FAIL,
            data: err,
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
    const url = '/api/v1/auth/logout';

    Proxy.get(url)
      .then((payloadObj) => {
        if (StandardResponseWrapper.verifyFormat(payloadObj)) {
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
        } else if (StandardErrorWrapper.verifyFormat(payloadObj)) {
          const err = StandardErrorWrapper.deserialize(payloadObj);

          dispatcher.dispatch({
            actionType: authConstants.LOGOUT_FAIL,
            data: err,
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
    dispatcher.dispatch({
      actionType: authConstants.RESETTING_PASSWORD,
    });

    const url = '/api/v1/auth/forgot-password';
    const body = { email };
    const headers = { 'Content-Type': 'application/json; charset=UTF-8' };

    Proxy.post(url, body, headers)
      .then((payloadObj) => {
        const res = StandardResponseWrapper.deserialize(payloadObj);

        if (res.getNthData(0).success) {
          dispatcher.dispatch({
            actionType: authConstants.RESET_PASSWORD_SUCCEED,
          });
        } else {
          dispatcher.dispatch({
            actionType: authConstants.RESET_PASSWORD_FAIL,
          });
        }
      })
      .catch((err) => {
        dispatcher.dispatch({
          actionType: authConstants.RESET_PASSWORD_FAIL,
          data: err,
        });
      });
  },

  authCheck() {
    const url = '/api/v1/auth/check';

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
    const url = '/api/v1/auth/check';

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
          data: { referralCode: map[key] },
        });
      }
    }
  },

  _parseQueryStringObj(queryStringObj) {
    const esc = window.encodeURIComponent;

    return Object.keys(queryStringObj)
      .map((key) => `${esc(key)}=${esc(queryStringObj[key])}`)
      .join('&');
  },
};

export default authActionCreator;
