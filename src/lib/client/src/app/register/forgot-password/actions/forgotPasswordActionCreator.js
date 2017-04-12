import forgotPasswordConstants from '../constants/forgotPasswordConstants';

const forgotPasswordActionCreator = {
  setForgotPasswordFormField(dispatch, field, value) {
    dispatch({
      type: forgotPasswordConstants.SET_FORGOT_PASSWORD_FORM_FIELD,
      data: { field, value },
    });
  },
};

export default forgotPasswordActionCreator;
