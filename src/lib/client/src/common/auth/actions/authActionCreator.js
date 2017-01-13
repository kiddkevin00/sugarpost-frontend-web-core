import dispatcher from '../../dispatcher/AppDispatcher';
import Proxy from '../../../common/proxies/proxy';
import StandardResponseWrapper from '../../utility/standard-response-wrapper';
import constants from '../constants/authConstants';

const authActionCreator = {
  signup(firstName, lastName, email, password, token) {
    const url = '/api/auth/signup';
    const body = {
      firstName,
      lastName,
      email,
      password,
      token,
    };
    const headers = { 'Content-Type': 'application/json; charset=UTF-8' };

    Proxy.post(url, body, headers)
      .then((payloadObj) => {
        const res = StandardResponseWrapper.deserialize(payloadObj);

        if (res.data[0] && res.data[0].isSignedUp) {
          dispatcher.dispatch({
            actionType: constants.BASIC_SIGNUP_SUCCESS,
          });
        } else {
          dispatcher.dispatch({
            actionType: constants.IS_SIGNED_UP,
          });
        }
      })
      .catch((err) => {
        dispatcher.dispatch({
          actionType: constants.BASIC_SIGNUP_FAIL,
          data: err,
        });
      });
  },

  login(email, password) {
    dispatcher.dispatch({
      email,
      password,
      actionType: constants.BASIC_LOGIN_SUCCESS,
    });
  },

  logout() {
    dispatcher.dispatch({
      actionType: constants.LOGOUT_SUCCESS,
    });
  },

};

export default authActionCreator;
