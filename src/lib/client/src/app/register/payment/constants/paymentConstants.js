import keyMirror from 'keymirror';

const paymentConstants = keyMirror({
  PAYING: null,
  PAYMENT_SUCCEED: null,
  PAYMENT_FAIL: null,
  ALREADY_PAID: null,
  NOT_ELIGIBLE_FOR_REFERRAL_DISCOUNT: null,
  REFERRAL_CODE_NOT_FOUND: null,
});

export default paymentConstants;
