import keyMirror from 'keymirror';

const paymentConstants = keyMirror({
  PAYMENT_SUCCEED: null,
  PAYMENT_FAIL: null,
  REFER_CODE_NOT_FOUND: null,
  EMAIL_NOT_SIGNUP: null,
  ALREADY_PAY: null,
});

export default paymentConstants;
