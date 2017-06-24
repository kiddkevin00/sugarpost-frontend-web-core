import actionTypes from '../../../common/actiontypes/';


const defaultInfoMsg = 'Your subscription has been cancelled. Your vouchers will remain available until the end of current cycle.';
const defaultErrorMsg = 'You haven\'t paid for the subscription yet.';
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

function accountSubscriptionReducer(state = initialState, action) {
  const actionType = action.type;
  const actionData = action.data;

  switch (actionType) {
    case actionTypes.ACCOUNT__SUBSCRIPTION.RESET_FORM_ALERT_BOXES:
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
    case actionTypes.ACCOUNT__SUBSCRIPTION.CANCELLING_SUBSCRIPTION:
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
    case actionTypes.ACCOUNT__SUBSCRIPTION.CANCEL_SUBSCRIPTION_SUCCEED:
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
    case actionTypes.ACCOUNT__SUBSCRIPTION.CANCEL_SUBSCRIPTION_FAIL:
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

export default accountSubscriptionReducer;
