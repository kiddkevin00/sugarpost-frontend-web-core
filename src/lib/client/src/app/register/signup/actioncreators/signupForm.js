import actionTypes from '../../../../common/actiontypes/';
import Proxy from '../../../../common/proxies/HttpProxy';
import StandardResponseWrapper from '../../../../common/utils/standard-response-wrapper';
import StandardErrorWrapper from '../../../../common/utils/standard-error-wrapper';
import constants from '../../../../common/constants/';
import ReactGA from 'react-ga';


const signupFormActionCreator = {
  resetFormAlertBoxes() {
    return {
      type: actionTypes.SIGNUP.RESET_FORM_ALERT_BOXES,
    };
  },

  setFormField(field, value) {
    return {
      type: actionTypes.SIGNUP.SET_FORM_FIELD,
      data: { field, value },
    };
  },

  signup(email, password, fullName) {
    return (dispatch/*, getState*/) => {
      dispatch({
        type: actionTypes.SIGNUP.SIGNING_UP,
      });

      const url = '/api/v1/auth/signup';
      const body = { email, password, fullName };
      const headers = { 'Content-Type': 'application/json; charset=UTF-8' };

      Proxy.post(url, body, headers)
        .then((payloadObj) => {
          if (StandardResponseWrapper.verifyFormat(payloadObj)) {
            const res = StandardResponseWrapper.deserialize(payloadObj);

            if (res.getNthData(0).success) {
              ReactGA.event({
                category: 'Acquisition',
                action: 'created an account',
              });

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
                  case 'staging':
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
                dispatch({
                  type: actionTypes.AUTH.SIGNUP_SUCCEED,
                  data: {
                    user: userInfo,
                  },
                });

                dispatch({
                  type: actionTypes.SIGNUP.SIGNUP_SUCCEED,
                });
              }
            } else if (res.getNthData(0).status === actionTypes.SIGNUP.EMAIL_ALREADY_SIGNUP) {
              ReactGA.event({
                category: 'Acquisition',
                action: 'attempted to signup with duplicate email',
              });

              dispatch({
                type: actionTypes.SIGNUP.EMAIL_ALREADY_SIGNUP,
                data: res.getNthData(0).detail,
              });
            } else {
              ReactGA.event({
                category: 'Acquisition',
                action: 'signup failed',
              });

              dispatch({
                type: actionTypes.SIGNUP.SIGNUP_FAIL,
                data: res.getNthData(0).detail,
              });
            }
          } else if (StandardErrorWrapper.verifyFormat(payloadObj)) {
            ReactGA.event({
              category: 'Acquisition',
              action: 'signup failed',
            });

            const err = StandardErrorWrapper.deserialize(payloadObj);

            dispatch({
              type: actionTypes.SIGNUP.SIGNUP_FAIL,
              data: err,
            });
          }
        })
        .catch((err) => {
          ReactGA.event({
            category: 'Acquisition',
            action: 'signup failed',
          });

          dispatch({
            type: actionTypes.SIGNUP.SIGNUP_FAIL,
            data: err,
          });
        });
    };
  },
};

export default signupFormActionCreator;
