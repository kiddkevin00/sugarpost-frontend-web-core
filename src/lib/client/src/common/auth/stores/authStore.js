import dispatcher from '../../dispatcher/AppDispatcher';
import authConstants from '../constants/authConstants';
import EventEmitter from 'events';

const changeEvent = Symbol('change');
const storeContext = Symbol('loginStoreContext');
const defaultErrorMsg = 'Oops! Something went wrong. Please try again.';

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
    const error = this[storeContext][`${type}Error`];

    if (typeof error.message !== 'string') {
      error.message = JSON.stringify(error.message, null, 2);
    }

    return error;
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
  }

  _showError(type, message = defaultErrorMsg) {
    Object.assign(this[storeContext][`${type}Error`], { message, isVisible: true });
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

}

const authStore = new AuthStore();

// The dispatcher registration for the current store component.
dispatcher.register((action) => {
  const actionType = action.actionType;
  const data = action.data;

  switch (actionType) {
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
      authStore._showError('logout', data || 'Logout fails.');

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
