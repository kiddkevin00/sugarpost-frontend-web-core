import actionTypes from '../../../../common/actiontypes/';

const defaultInfoMsg = 'If a matching account was found, an email was sent to allow you to reset your password.';
const initialState = {
  formEmail: '',
  isLoading: false,
  info: {
    isVisible: false,
    message: defaultInfoMsg,
  },
};

function forgotPasswordReducer(state = initialState, action) {
  const actionType = action.type;
  const actionData = action.data;

  switch (actionType) {
    case actionTypes.FORGOT_PASSWORD.RESET_FORM_ALERT_BOXES:
      return Object.assign({}, state, {
        info: {
          isVisible: false,
          message: defaultInfoMsg,
        },
      });
    case actionTypes.FORGOT_PASSWORD.SET_FORM_FIELD:
      return Object.assign({}, state, { [`form${actionData.field}`]: actionData.value });
    case actionTypes.FORGOT_PASSWORD.RESETTING_PASSWORD:
      return Object.assign({}, state, {
        isLoading: true,
        info: {
          isVisible: false,
          message: defaultInfoMsg,
        },
      });
    case actionTypes.FORGOT_PASSWORD.RESET_PASSWORD_SUCCEED:
      return Object.assign({}, state, {
        isLoading: false,
        info: {
          isVisible: true,
          message: defaultInfoMsg,
        },
      });
    case actionTypes.FORGOT_PASSWORD.RESET_PASSWORD_FAIL:
      return Object.assign({}, state, {
        isLoading: false,
        info: {
          isVisible: true,
          message: _showMessage(actionData || defaultInfoMsg),
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

export default forgotPasswordReducer;
