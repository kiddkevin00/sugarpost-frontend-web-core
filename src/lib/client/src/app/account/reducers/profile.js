import actionTypes from '../../../common/actiontypes/';

const defaultInfoMsg = 'The request has been completed.';
const defaultErrorMsg = 'Oops! Something went wrong. Please try again.';
const initialState = {
  formFullName: undefined,
  formEmail: undefined,
  formPassword: '',
  formNewPassword: '',
  formConfirmNewPassword: '',
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

function accountProfileReducer(state = initialState, action) {
  const actionType = action.type;
  const actionData = action.data;

  switch (actionType) {
    case actionTypes.ACCOUNT__PROFILE.SET_FORM_FIELD:
      return Object.assign({}, state, { [`form${actionData.field}`]: actionData.value });
    case actionTypes.ACCOUNT__PROFILE.RESET_FORM:
      return Object.assign({}, state, {
        formFullName: actionData.fullName,
        formEmail: actionData.email,
        formPassword: '',
        formNewPassword: '',
        formConfirmNewPassword: '',
      });
    case actionTypes.ACCOUNT__PROFILE.UPDATING_PROFILE:
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
    case actionTypes.ACCOUNT__PROFILE.UPDATE_PROFILE_SUCCEED:
      return Object.assign({}, state, {
        isLoading: false,
        info: {
          isVisible: true,
          message: 'Your profile has been updated.',
        },
        error: {
          isVisible: false,
          message: defaultErrorMsg,
        },
      });
    case actionTypes.ACCOUNT__PROFILE.UPDATE_PROFILE_FAIL:
      return Object.assign({}, state, {
        isLoading: false,
        info: {
          isVisible: false,
          message: defaultInfoMsg,
        },
        error: {
          isVisible: true,
          message: _showMessage(actionData || 'The original password is incorrect.'),
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

export default accountProfileReducer;
