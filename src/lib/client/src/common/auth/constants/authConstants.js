import keyMirror from 'keymirror';

const authConstants = keyMirror({
  IS_LOGGED_IN: null,
  NOT_LOGGED_IN: null,
  AUTH_CHECK_FAIL: null,

  ALREADY_SIGNED_UP: null,
  SIGNUP_FAIL: null,

  BASIC_LOGIN_FAIL: null,
  OAUTH_LOGIN_FAIL: null,

  LOGOUT_FAIL: null,

  IN_TRANSITION: null,
});

export default authConstants;
