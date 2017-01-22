import keyMirror from 'keymirror';

const authConstants = keyMirror({
  SIGNUP_SUCCESS: null,
  IS_SIGNED_UP: null,
  SIGNUP_FAIL: null,

  BASIC_LOGIN_SUCCESS: null,
  BASIC_LOGIN_FAIL: null,
  OAUTH_LOGIN_SUCCESS: null,
  OAUTH_LOGIN_FAIL: null,

  LOGOUT_SUCCESS: null,
  LOGOUT_FAIL: null,
});

export default authConstants;
