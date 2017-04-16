import actionTypes from '../../action-types/';
import constants from '../../constants/';
import Proxy from '../../proxies/HttpProxy';
import StandardResponseWrapper from '../../utility/standard-response-wrapper';
import StandardErrorWrapper from '../../utility/standard-error-wrapper';

const authActionCreator = {
  login(email, password) {
    return (dispatch, getState) => {
      dispatch({
        type: actionTypes.LOGIN.LOGGING_IN,
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
                dispatch({
                  type: actionTypes.LOGIN.LOGIN_SUCCEED,
                });
                dispatch({
                  type: actionTypes.AUTH.BASIC_LOGIN_SUCCEED,
                  data: {
                    user: userInfo,
                  },
                });
              }
            } else {
              dispatch({
                type: actionTypes.LOGIN.BASIC_LOGIN_FAIL,
              });
            }
          } else if (StandardErrorWrapper.verifyFormat(payloadObj)) {
            const err = StandardErrorWrapper.deserialize(payloadObj);
            dispatch({
              type: actionTypes.LOGIN.BASIC_LOGIN_FAIL,
              data: err,
            });
          }
        })
        .catch((err) => {
          dispatch({
            type: actionTypes.LOGIN.BASIC_LOGIN_FAIL,
            data: err,
          });
        });
    }
  },
};

export default authActionCreator;
