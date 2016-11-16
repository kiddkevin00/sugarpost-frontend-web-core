import AppDispatcher from '../../../../common/dispatcher/AppDispatcher';
import loginConstants from '../constants/loginConstants';

const loginActionCreator = {
  login(email, password) {
    AppDispatcher.dispatch({
      email,
      password,
      actionType: loginConstants.BASIC_LOGIN,
    });
  },

};

export default loginActionCreator;
