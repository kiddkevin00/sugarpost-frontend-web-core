import actionTypes from '../action-types/';

const initialState = {
  isLoggedIn: false,
  user: {
    _id: undefined,
    type: undefined,
    email: undefined,
    fullName: undefined,
    referralCode: undefined,
    referralAmount: undefined,
    creditCardLast4: undefined,
    usedReferralCode: undefined,
    stripeCustomerId: undefined,
    stripeSubscriptionId: undefined,
  },
};

function authReducer(state = initialState, action) {
  const actionType = action.type;
  const actionData = action.data;

  switch (actionType) {
    case actionTypes.AUTH.BASIC_LOGIN_SUCCEED:
      return Object.assign({}, state, {
        isLoggedIn: true,
        user: actionData.user,
      });
    default:
      return state;
  }
}

export default authReducer;
