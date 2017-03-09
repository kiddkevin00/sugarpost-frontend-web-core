import keyMirror from 'keymirror';

const authConstants = keyMirror({
  SIGNUP_SUCCEED: null,
  SIGNUP_FAIL: null,
  ALREADY_SIGNED_UP: null,

  BASIC_LOGIN_SUCCEED: null,
  BASIC_LOGIN_FAIL: null,

  OAUTH_LOGIN_SUCCEED: null,
  OAUTH_LOGIN_FAIL: null,

  IS_LOGGED_IN: null,
  NOT_LOGGED_IN: null,
  AUTH_CHECK_FAIL: null,

  LOGOUT_SUCCEED: null,
  LOGOUT_FAIL: null,

  PROXY_ERROR: null,

  USER_INFO_SYNC: null,
  IN_TRANSITION: null,
});

export default authConstants;
