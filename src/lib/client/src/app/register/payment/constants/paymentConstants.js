import keyMirror from 'keymirror';

const paymentConstants = keyMirror({
  PAYING: null,
  PAYMENT_SUCCEED: null,
  PAYMENT_FAIL: null,
  REFERRAL_CODE_NOT_FOUND: null,
  EMAIL_NOT_SIGNUP: null,
  ALREADY_PAY: null,
});

export default paymentConstants;
