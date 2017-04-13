import actionTypes from '../../../../common/action-types/';

const defaultInfoMsg = 'The request has been completed.';
const initialState = {
  formEmail: '',
  isLoading: false,
  info: {
    isVisible: false,
    message: defaultInfoMsg,
  },
};

function forgotPasswordReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FORGOT_PASSWORD.SET_FORM_FIELD:
      const data = action.data;

      return Object.assign({}, state, { [`form${data.field}`]: data.value });
    case actionTypes.FORGOT_PASSWORD.RESETTING_PASSWORD:
      return Object.assign({}, state, { isLoading: true });
    case actionTypes.FORGOT_PASSWORD.RESET_PASSWORD_SUCCEED:
      return Object.assign({}, state, {
        isLoading: false,
        info: {
          isVisible: true,
          message: 'If a matching account was found, an email was sent to allow you to reset your password.',
        },
      });
    case actionTypes.FORGOT_PASSWORD.RESET_PASSWORD_FAIL:
      return Object.assign({}, state, {
        isLoading: false,
        info: {
          isVisible: true,
          message: action.data || 'If a matching account was found, an email was sent to allow you to reset your password.',
        },
      });
    default:
      return state;
  }
};

export default forgotPasswordReducer;
