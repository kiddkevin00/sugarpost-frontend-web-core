import actionTypes from '../../../../common/actiontypes/';

const defaultInfoMsg = 'Thank you! We have received your payment.';
const defaultErrorMsg = 'Proceeding payment fails. Please try again.';
const initialState = {
  isLoading: false,
  formReferralCode: '',
  isReferralCodeValid: false,
  info: {
    isVisible: false,
    message: defaultInfoMsg,
  },
  error: {
    isVisible: false,
    message: defaultErrorMsg,
  },
};

function paymentFormReducer(state = initialState, action) {
  const actionType = action.type;
  const actionData = action.data;

  switch (actionType) {
    case actionTypes.PAYMENT.RESET_FORM_ALERT_BOXES:
      return Object.assign({}, state, {
        info: {
          isVisible: false,
          message: defaultInfoMsg,
        },
        error: {
          isVisible: false,
          message: defaultErrorMsg,
        },
      });
    case actionTypes.PAYMENT.SET_FORM_FIELD:
      return Object.assign({}, state, {
        [`form${actionData.field}`]: actionData.value,
        isReferralCodeValid: actionData.isReferralCodeValid,
      });
    case actionTypes.PAYMENT.SET_FORM_REFERRAL_CODE:
      return Object.assign({}, state, {
        formReferralCode: actionData.referralCode,
      });
    case actionTypes.PAYMENT.PAYING:
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
    case actionTypes.PAYMENT.PAYMENT_SUCCEED:
      return Object.assign({}, state, {
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
    case actionTypes.PAYMENT.ALREADY_PAID:
      return Object.assign({}, state, {
        isLoading: false,
        info: {
          isVisible: false,
          message: defaultInfoMsg,
        },
        error: {
          isVisible: true,
          message: 'Our record shows that you have already paid for the subscription.',
        },
      });
    case actionTypes.PAYMENT.NOT_ELIGIBLE_FOR_REFERRAL_DISCOUNT:
      return Object.assign({}, state, {
        isLoading: false,
        info: {
          isVisible: false,
          message: defaultInfoMsg,
        },
        error: {
          isVisible: true,
          message: 'Your transaction has not been processed because your account is no longer eligible for the 10% discount.',
        },
      });
    case actionTypes.PAYMENT.REFERRAL_CODE_NOT_FOUND:
      return Object.assign({}, state, {
        isLoading: false,
        info: {
          isVisible: false,
          message: defaultInfoMsg,
        },
        error: {
          isVisible: true,
          message: 'Your transaction has not been processed because the referral code you entered is invalid.',
        },
      });
    case actionTypes.PAYMENT.PAYMENT_FAIL:
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

export default paymentFormReducer;
