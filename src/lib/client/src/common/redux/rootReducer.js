import forgotPasswordReducer from '../../app/register/forgot-password/reducer/index';
import actionTypes from './rootActionTypes';

const defaultInfoMsg = 'Request has been completed.';

const defaultState = {
  forgotPasswordFormEmail: '',
  isLoading: false,
  forgotPasswordInfo: {
    isVisible: false,
    message: defaultInfoMsg,
  },
};

const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.FORGOT_PASSWORD.SET_FORM_FIELD:
      return forgotPasswordReducer.setForgotPasswordFormField(state, action);
    case actionTypes.FORGOT_PASSWORD.RESETTING_PASSWORD:
      return forgotPasswordReducer.resettingPassword(state, action);
    case actionTypes.FORGOT_PASSWORD.RESET_PASSWORD_SUCCEED:
      return forgotPasswordReducer.resetPasswordSucceed(state, action);
    case actionTypes.FORGOT_PASSWORD.RESET_PASSWORD_FAIL:
      return forgotPasswordReducer.resetPasswordFail(state, action);
    default:
      return state;
  }
};

export default rootReducer;
