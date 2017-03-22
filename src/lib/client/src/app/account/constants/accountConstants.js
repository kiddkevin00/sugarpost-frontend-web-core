import keyMirror from 'keymirror';

const accountConstants = keyMirror({
  UPDATING_PROFILE: null,
  UPDATE_PROFILE_SUCCEED: null,
  UPDATE_PROFILE_FAIL: null,
  
  CANCELLING_SUBSCRIPTION: null,
  CANCEL_SUBSCRIPTION_SUCCEED: null,
  CANCEL_SUBSCRIPTION_FAIL: null,
});

export default accountConstants;
