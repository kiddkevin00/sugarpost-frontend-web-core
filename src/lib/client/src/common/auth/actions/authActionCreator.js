import dispatcher from '../../dispatcher/AppDispatcher';
import Proxy from '../../../common/proxies/proxy';
import StandardResponseWrapper from '../../utility/standard-response-wrapper';
import StandardErrorWrapper from '../../utility/standard-error-wrapper';
import constants from '../constants/authConstants';

const authActionCreator = {
  signup(email, password, firstName, lastName) {
    const url = '/api/auth/signup';
    const body = { email, password, firstName, lastName };
    const headers = { 'Content-Type': 'application/json; charset=UTF-8' };

    Proxy.post(url, body, headers)
      .then((payloadObj) => {
        const res = StandardResponseWrapper.deserialize(payloadObj);

        if (res.data[0] && res.data[0].isSignedUp) {
          dispatcher.dispatch({
            actionType: constants.IS_SIGNED_UP,
          });
        } else {
          dispatcher.dispatch({
            actionType: constants.IS_LOGGED_IN,
          });
        }
      })
      .catch((err) => {
        dispatcher.dispatch({
          actionType: constants.SIGNUP_FAIL,
          data: err,
        });
      });
  },

  login(email, password) {
    // TODO
    dispatcher.dispatch({
      email,
      password,
      actionType: constants.IS_LOGGED_IN,
    });
  },

  logout() {
    const url = '/api/auth/logout';

    Proxy.get(url)
      .then((payloadObj) => {
        const res = StandardResponseWrapper.deserialize(payloadObj);

        if (res.data[0] && res.data[0].isAuthenticated) {
          dispatcher.dispatch({
            actionType: constants.IS_LOGGED_IN,
          });
        } else {
          dispatcher.dispatch({
            actionType: constants.NOT_LOGGED_IN,
          });
        }
      })
      .catch((err) => {
        dispatcher.dispatch({
          actionType: constants.LOGOUT_FAIL,
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

          if (res.data[0] && res.data[0].isAuthenticated) {
            return dispatcher.dispatch({
              actionType: constants.IS_LOGGED_IN,
            });
          }
          return dispatcher.dispatch({
            actionType: constants.NOT_LOGGED_IN,
          });
        } else if (StandardErrorWrapper.verifyFormat(payloadObj)) {
          const err = StandardErrorWrapper.deserialize(payloadObj);
          const firstErr = err.getNthError(0);

          if (firstErr.code === 401) {
            return dispatcher.dispatch({
              actionType: constants.NOT_LOGGED_IN,
            });
          }
        }
        return dispatcher.dispatch({
          actionType: constants.AUTH_CHECK_FAIL,
        });
      })
      .catch((err) => {
        dispatcher.dispatch({
          actionType: constants.AUTH_CHECK_FAIL,
          data: err,
        });
      });
  },

};

export default authActionCreator;
