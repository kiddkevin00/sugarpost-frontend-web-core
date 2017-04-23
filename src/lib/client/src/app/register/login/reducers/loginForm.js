import actionTypes from '../../../../common/actiontypes/';

const defaultErrorMsg = 'The username or password is incorrect.';
const initialState = {
  formEmail: '',
  formPassword: '',
  isLoading: false,
  error: {
    isVisible: false,
    message: defaultErrorMsg,
  },
};

function loginReducer(state = initialState, action) {
  const actionType = action.type;
  const actionData = action.data;

  switch (actionType) {
    case actionTypes.LOGIN.RESET_FORM_ALERT_BOXES:
      return Object.assign({}, state, {
        error: {
          isVisible: false,
          message: defaultErrorMsg,
        },
      });
    case actionTypes.LOGIN.SET_FORM_FIELD:
      return Object.assign({}, state, { [`form${actionData.field}`]: actionData.value });
    case actionTypes.LOGIN.LOGGING_IN:
      return Object.assign({}, state, {
        isLoading: true,
        error: {
          isVisible: false,
          message: defaultErrorMsg,
        },
      });
    case actionTypes.LOGIN.BASIC_LOGIN_SUCCEED:
      return Object.assign({}, state, {
        isLoading: false,
        error: {
          isVisible: false,
          message: defaultErrorMsg,
        },
      });
    case actionTypes.LOGIN.BASIC_LOGIN_FAIL:
      return Object.assign({}, state, {
        isLoading: false,
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

  if (typeof data !== 'string') {
    msg = window.JSON.stringify(data, null, 2);
  } else {
    msg = data;
  }

  return msg;
}

export default loginReducer;
