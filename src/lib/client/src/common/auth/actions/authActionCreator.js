import dispatcher from '../../dispatcher/AppDispatcher';
import constants from '../constants/authConstants';

const authActionCreator = {
  signup(firstName, lastName, email, password) {
    dispatcher.dispatch({
      firstName,
      lastName,
      email,
      password,
      actionType: constants.BASIC_SIGNUP,
    });
  },

  login(email, password) {
    dispatcher.dispatch({
      email,
      password,
      actionType: constants.BASIC_LOGIN,
    });
  },

  logout() {
    dispatcher.dispatch({
      actionType: constants.LOGOUT,
    });
  },

};

export default authActionCreator;
