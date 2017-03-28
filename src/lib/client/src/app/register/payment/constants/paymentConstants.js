import keyMirror from 'keymirror';

const paymentConstants = keyMirror({
  PAYING: null,
  PAYMENT_SUCCEED: null,
  PAYMENT_FAIL: null,
  ALREADY_PAID: null,
  ALREADY_USED_REFERRAL_CODE: null,
  REFERRAL_CODE_NOT_FOUND: null,
});

export default paymentConstants;
