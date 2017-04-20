import actionTypes from '../../../../common/actiontypes/';

const defaultErrorMsg = 'The username or password is incorrect.';
const alreadySignUpMsg = 'That email address is already in use. Please log in.'
const initialState = {
  formFullName: '',
  formEmail: '',
  formPassword: '',
  formConfirmPassword: '',
  isLoading: false,
  error: {
    isVisible: false,
    message: defaultErrorMsg,
  },
};

function signupReducer(state = initialState, action) {
  const actionType = action.type;
  const actionData = action.data;

  switch (actionType) {
    case actionTypes.SIGNUP.SET_FORM_FIELD:
      return Object.assign({}, state, { [`form${actionData.field}`]: actionData.value });
    case actionTypes.SIGNUP.SIGNING_UP:
      return Object.assign({}, state, { isLoading: true });
    case actionTypes.SIGNUP.SIGNUP_SUCCEED:
      return Object.assign({}, state, {
        isLoading: false,
        error: {
          isVisible: false,
          message: defaultErrorMsg,
        },
      });
    case actionTypes.SIGNUP.ALREADY_SIGNED_UP:
      return Object.assign({}, state, {
        isLoading: false,
        error: {
          isVisible: true,
          message: _showMessage(alreadySignUpMsg),
        },
      });
    case actionTypes.SIGNUP.SIGNUP_FAIL:
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

export default signupReducer;
