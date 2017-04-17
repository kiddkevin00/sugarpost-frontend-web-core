import actionTypes from '../action-types/';

const initialState = {
  isLoggedIn: false,
  user: null,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.AUTH.BASIC_LOGIN_SUCCEED:
      return Object.assign({}, state, {
        isLoggedIn: true,
        user: action.data.user,
      });
    default:
      return state;
  }
}

export default authReducer;
