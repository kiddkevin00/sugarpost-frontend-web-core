import dispatcher from '../../dispatcher/appDispatcher';
import authConstants from '../constants/authConstants';
import EventEmitter from 'events';

const changeEvent = Symbol('change');
const storeContext = Symbol('authStoreContext');
const defaultErrorMsg = 'Oops! Something went wrong. Please try again.';
const defaultInfoMsg = 'Request has been completed.';

// A Flux's store.
class AuthStore extends EventEmitter {

  constructor() {
    super();

    // All internal store data.
    this[storeContext] = {
      isLoggedIn: false,
      user: {},
      loginError: {
        isVisible: false,
        message: defaultErrorMsg,
      },
      signupError: {
        isVisible: false,
        message: defaultErrorMsg,
      },
      forgotPasswordInfo: {
        isVisible: false,
        message: defaultInfoMsg,
      },
      accountError: {
        isVisible: false,
        message: defaultErrorMsg,
      },
      transitionPath: '',
      referCode: '',
    };
  }

  isLoggedIn() {
    return this[storeContext].isLoggedIn;
  }

  getUser() {
    return this[storeContext].user;
  }

  getError(type) {
    return this[storeContext][`${type}Error`];;
  }

  getInfo(type) {
    return this[storeContext][`${type}Info`];
  }

  getTransitionPath() {
    const transitionPath = this[storeContext].transitionPath;

    this[storeContext].transitionPath = '';

    return transitionPath;
  }

  gerReferCode() {
    return this[storeContext].referCode;
  }

  emitChange() {
    this.emit(changeEvent);
  }

  addChangeListener(callback) {
    this.on(changeEvent, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(changeEvent, callback);
  }

  _login(user) {
    this[storeContext].user = user;
    this[storeContext].isLoggedIn = true;

    Object.assign(this[storeContext].loginError, { message: defaultErrorMsg, isVisible: false });
    Object.assign(this[storeContext].signupError, { message: defaultErrorMsg, isVisible: false });
    Object.assign(this[storeContext].forgotPasswordInfo,
      { message: defaultInfoMsg, isVisible: false });
  }

  _showError(type, _message = defaultErrorMsg) {
    let message;

    if (typeof _message !== 'string') {
      message = JSON.stringify(message, null, 2);
    } else {
      message = _message;
    }

    Object.assign(this[storeContext][`${type}Error`], { message, isVisible: true });
  }

  _showInfo(type, _message = defaultInfoMsg) {
    let message;

    if (typeof _message !== 'string') {
      message = JSON.stringify(message, null, 2);
    } else {
      message = _message;
    }

    Object.assign(this[storeContext][`${type}Info`], { message, isVisible: true });
  }

  _logout() {
    this[storeContext].isLoggedIn = false;
    this[storeContext].user = {};
  }

  _syncUserInfo(partialNewUserInfo) {
    Object.assign(this[storeContext].user, partialNewUserInfo);
  }

  _storeTransitionPath(path) {
    this[storeContext].transitionPath = path;
  }

  _storeReferCode(code) {
    this[storeContext].referCode = code;
  }

  _clearAllAlertBoxes() {
    Object.assign(this[storeContext].loginError, { message: defaultErrorMsg, isVisible: false });
    Object.assign(this[storeContext].signupError, { message: defaultErrorMsg, isVisible: false });
    Object.assign(this[storeContext].forgotPasswordInfo,
      { message: defaultInfoMsg, isVisible: false });
  }

}

const authStore = new AuthStore();

// The dispatcher registration for the current store component.
dispatcher.register((action) => {
  const actionType = action.actionType;
  const data = action.data;

  switch (actionType) {
    case authConstants.SIGNING_UP:
    case authConstants.LOGGING_IN:
    case authConstants.RESETTING_PASSWORD:
      authStore._clearAllAlertBoxes();

      authStore.emitChange();
      console.log(`${actionType} action in \`authStore\`: ${JSON.stringify(action, null, 2)}`);
      break;

    case authConstants.SIGNUP_SUCCEED:
    case authConstants.BASIC_LOGIN_SUCCEED:
    case authConstants.IS_LOGGED_IN:
      authStore._login(data.user);

      authStore.emitChange();
      console.log(`${actionType} action in \`authStore\`: ${JSON.stringify(action, null, 2)}`);
      break;

    case authConstants.ALREADY_SIGNED_UP:
      authStore._showError('signup', 'That email address is already in use. Please log in.');

      authStore.emitChange();
      console.log(`${actionType} action in \`authStore\`: ${JSON.stringify(action, null, 2)}`);
      break;
    case authConstants.SIGNUP_FAIL:
      authStore._showError('signup', data);

      authStore.emitChange();
      console.log(`${actionType} action in \`authStore\`: ${JSON.stringify(action, null, 2)}`);
      break;

    case authConstants.BASIC_LOGIN_FAIL:
      authStore._showError('login', data || 'The username or password is incorrect.');

      authStore.emitChange();
      console.log(`${actionType} action in \`authStore\`: ${JSON.stringify(action, null, 2)}`);
      break;

    case authConstants.LOGOUT_SUCCEED:
    case authConstants.NOT_LOGGED_IN:
    case authConstants.AUTH_CHECK_FAIL:
      authStore._logout();

      authStore.emitChange();
      console.log(`${actionType} action in \`authStore\`: ${JSON.stringify(action, null, 2)}`);
      break;

    case authConstants.LOGOUT_FAIL:
      alert((data && JSON.stringify(data, null, 2)) || 'Logout fails.');

      authStore.emitChange();
      console.log(`${actionType} action in \`authStore\`: ${JSON.stringify(action, null, 2)}`);
      break;

    case authConstants.RESET_PASSWORD_SUCCEED:
      authStore._showInfo('forgotPassword', 'If a matching account was found an email was sent to user@email.com to allow you to reset your password.');

      authStore.emitChange();
      console.log(`${actionType} action in \`authStore\`: ${JSON.stringify(action, null, 2)}`);
      break;
    case authConstants.RESET_PASSWORD_FAIL:
      authStore._showInfo('forgotPassword', 'If a matching account was found an email was sent to user@email.com to allow you to reset your password.');

      authStore.emitChange();
      console.log(`${actionType} action in \`authStore\`: ${JSON.stringify(action, null, 2)}`);
      break;

    case authConstants.USER_INFO_SYNC:
      authStore._syncUserInfo(data.partialNewUserInfo);

      console.log(`${actionType} action in \`authStore\`: ${JSON.stringify(action, null, 2)}`);
      break;
    case authConstants.IN_TRANSITION:
      authStore._storeTransitionPath(data.path);

      console.log(`${actionType} action in \`authStore\`: ${JSON.stringify(action, null, 2)}`);
      break;
    case authConstants.STORE_PARAM_MAP:
      authStore._storeReferCode(data.referCode);

      console.log(`${actionType} action in \`authStore\`: ${JSON.stringify(action, null, 2)}`);
      break;
    default:
      break;
  }
});

export default authStore;
