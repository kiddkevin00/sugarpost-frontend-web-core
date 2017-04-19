import actionTypes from '../actiontypes/';

const initialUserState = {
  _id: undefined,
  type: undefined,
  fullName: undefined,
  email: undefined,
  referralCode: undefined,
  referralAmount: undefined,
  creditCardLast4: undefined,
  usedReferralCode: undefined,
  stripeCustomerId: undefined,
  stripeSubscriptionId: undefined,
};
const initialState = {
  isLoggedIn: false,
  user: initialUserState,
};

function authReducer(state = initialState, action) {
  const actionType = action.type;
  const actionData = action.data;

  switch (actionType) {
    case actionTypes.AUTH.IS_LOGGED_IN:
    case actionTypes.AUTH.USER_INFO_SYNC:
    case actionTypes.AUTH.BASIC_LOGIN_SUCCEED:
      return Object.assign({}, state, {
        isLoggedIn: true,
        user: Object.assign({}, state.user, actionData.user),
      });
    case actionTypes.AUTH.NOT_LOGGED_IN:
    case actionTypes.AUTH.AUTH_CHECK_FAIL:
      return Object.assign({}, state, {
        isLoggedIn: false,
        user: initialUserState,
      });
    default:
      return state;
  }
}

export default authReducer;
