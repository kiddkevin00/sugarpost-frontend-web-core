import forgotPasswordReducer from '../../app/register/forgot-password/reducers/forgotPasswordReducer';
import forgotPasswordConstants from '../../app/register/forgot-password/constants/forgotPasswordConstants';

const defaultInfoMsg = 'Request has been completed.';

const defaultState = {
  isLoading: false,
  forgotPasswordInfo: {
    isVisible: false,
    message: defaultInfoMsg,
  },
};

const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case forgotPasswordConstants.RESETTING_PASSWORD:
      return forgotPasswordReducer.resettingPassword(state, action);
    case forgotPasswordConstants.RESET_PASSWORD_SUCCEED:
      return forgotPasswordReducer.resetPasswordSucceed(state, action);
    case forgotPasswordConstants.RESET_PASSWORD_FAIL:
      return forgotPasswordReducer.resetPasswordFail(state, action);
    default:
      return state;
  }
};

export default rootReducer;
