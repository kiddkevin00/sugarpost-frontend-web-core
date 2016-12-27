import keyMirror from 'keymirror';

const authConstants = keyMirror({
  IS_SIGNED_UP: null,
  BASIC_SIGNUP_SUCCESS: null,
  BASIC_SIGNUP_FAIL: null,
  OAUTH_SIGNUP_SUCCESS: null,
  OAUTH_SIGNUP_FAIL: null,

  BASIC_LOGIN_SUCCESS: null,
  BASIC_LOGIN_FAIL: null,
  OAUTH_LOGIN_SUCCESS: null,
  OAUTH_LOGIN_FAIL: null,

  LOGOUT_SUCCESS: null,
  LOGOUT_FAIL: null,
});

export default authConstants;
