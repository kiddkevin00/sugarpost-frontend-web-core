import actionTypes from '../../../../common/actiontypes/';

const defaultInfoMsg = 'Referral email has sent out successfully.';
const defaultErrorMsg = 'Something went wrong while sending referral email. Please try again.';
const initialState = {
  isModalOpen: false,
  formReferralEmail: '',
  isLoading: false,
  error: {
    isVisible: false,
    message: defaultErrorMsg,
  },
  info: {
    isVisible: false,
    message: defaultInfoMsg,
  },
};

function referralFormReducer(state = initialState, action) {
  const actionType = action.type;
  const actionData = action.data;

  switch (actionType) {
    case actionTypes.REFERRAL__SHARE.OPENING_MODAL:
      return Object.assign({}, state, {
        isModalOpen: true,
        info: {
          isVisible: false,
          message: defaultInfoMsg,
        },
        error: {
          isVisible: false,
          message: defaultErrorMsg,
        },
      });
    case actionTypes.REFERRAL__SHARE.CLOSING_MODAL:
      return Object.assign({}, state, {
        isModalOpen: false,
        info: {
          isVisible: false,
          message: defaultInfoMsg,
        },
        error: {
          isVisible: false,
          message: defaultErrorMsg,
        },
      });
    case actionTypes.REFERRAL__SHARE.SET_FORM_FIELD:
      return Object.assign({}, state, {
        [`form${actionData.field}`]: actionData.value,
        isReferralCodeValid: actionData.isReferralCodeValid,
      });
    case actionTypes.REFERRAL__SHARE.SENDING_EMAIL_TO_REFERRAL:
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
    case actionTypes.REFERRAL__SHARE.SEND_EMAIL_TO_REFERRAL_SUCCEED:
      return Object.assign({}, state, {
        formReferralEmail: '',
        isLoading: false,
        info: {
          isVisible: true,
          message: defaultInfoMsg,
        },
        error: {
          isVisible: false,
          message: defaultErrorMsg,
        },
      });
    case actionTypes.REFERRAL__SHARE.SEND_EMAIL_TO_REFERRAL_FAIL:
      return Object.assign({}, state, {
        isLoading: false,
        info: {
          isVisible: false,
          message: defaultInfoMsg,
        },
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

export default referralFormReducer;
