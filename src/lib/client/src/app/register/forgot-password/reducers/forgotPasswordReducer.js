const forgotPasswordRedcer = {
  resettingPassword(state, action) {
    return Object.assign({}, state, { isLoading: true });
  },

  resetPasswordSucceed(state, action) {
    return Object.assign({}, state, {
      isLoading: false,
      forgotPasswordInfo: {
        isVisible: true,
        message: 'If a matching account was found, an email was sent to allow you to reset your password.',
      },
    });
  },

  resetPasswordFail(state, action) {
    return Object.assign({}, state, {
      isLoading: false,
      forgotPasswordInfo: {
        isVisible: true,
        message: action.data || 'If a matching account was found, an email was sent to allow you to reset your password.',
      },
    });
  },
};

export default forgotPasswordRedcer;
