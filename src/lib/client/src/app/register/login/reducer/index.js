import actionTypes from '../../../../common/action-types/';

const defaultErrorMsg = 'Oops! Something went wrong. Please try again.';

const initialState = {
  formEmail: '',
  formPassword: '',
  isLoading: false,
  isErrorVisible: false,
  info: {
    isVisible: false,
    message: defaultErrorMsg,
  },
};

export default function loginReducer(state = initialState, action) {
  let message;
  switch (action.type) {
    case actionTypes.LOGIN.SET_FORM_FIELD: {
      const data = action.data;
      return Object.assign({}, state, { [`form${data.field}`]: data.value });
    }
    case actionTypes.LOGIN.LOGGING_IN:
      return Object.assign({}, state, { isLoading: true });
    case actionTypes.LOGIN.LOGIN_SUCCEED:
      return Object.assign({}, state, {
        isLoading: false,
        info: {
          isVisible: false,
        },
      });
    case actionTypes.LOGIN.BASIC_LOGIN_FAIL:
      message = action.data.err
      if (typeof message !== 'string') {
        message = window.JSON.stringify(message, null, 2);
      }
      return Object.assign({}, state, {
        isLoading: false,
        info: {
          message,
          isVisible: true,
        },
      });
    default:
      return state;
  }
}
