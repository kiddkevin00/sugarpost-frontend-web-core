import actionTypes from '../../../../common/actiontypes/';


const defaultInfoMsg = 'You have redeemed your next free e-package successfully.';
const defaultErrorMsg = 'Something went wrong while redeeming. Please try again.';
const initialState = {
  isLoading: false,
  info: {
    isVisible: false,
    message: defaultInfoMsg,
  },
  error: {
    isVisible: false,
    message: defaultErrorMsg,
  },
};

function referralFormReducer(state = initialState, action) {
  const actionType = action.type;
  const actionData = action.data;

  switch (actionType) {
    case actionTypes.REFERRAL.RESET_FORM_ALERT_BOXES:
      return Object.assign({}, state, {
        info: {
          isVisible: false,
          message: defaultInfoMsg,
        },
        error: {
          isVisible: false,
          message: defaultErrorMsg,
        },
      });
    case actionTypes.REFERRAL.REDEEMING_CREDITS:
      return Object.assign({}, state, {
        isLoading: true,
        info: {
          isVisible: false,
          message: defaultInfoMsg,
        },
        error: {
          isVisible: false,
          message: defaultErrorMsg,
        },
      });
    case actionTypes.REFERRAL.REDEEM_CREDITS_SUCCEED:
      return Object.assign({}, state, {
        isLoading: false,
        info: {
          isVisible: true,
          message: defaultInfoMsg,
        },
        error: {
          isVisible: false,
          message: defaultErrorMsg,
        },
      });
    case actionTypes.REFERRAL.REDEEM_CREDITS_FAIL:
      return Object.assign({}, state, {
        isLoading: false,
        info: {
          isVisible: false,
          message: defaultInfoMsg,
        },
        error: {
          isVisible: true,
          message: _showMessage(actionData || defaultErrorMsg),
        },
      });
    default:
      return state;
  }
}

function _showMessage(data) {
  let msg;

  if (data instanceof Error) {
    msg = data.toString();
  } else if (typeof data !== 'string') {
    msg = window.JSON.stringify(data, null, 2);
  } else {
    msg = data;
  }

  return msg;
}

export default referralFormReducer;
