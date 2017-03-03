import dispatcher from '../../dispatcher/AppDispatcher';
import authConstants from '../constants/authConstants';
import EventEmitter from 'events';

const changeEvent = Symbol('change');
const storeContext = Symbol('loginStoreContext');

// A Flux's store.
class AuthStore extends EventEmitter {

  constructor() {
    super();

    // All internal store data.
    this[storeContext] = {
      isLoggedIn: false,
      transitionPath: '',
    };
  }

  isLoggedIn() {
    return this[storeContext].isLoggedIn;
  }

  getTransitionPath() {
    const transitionPath = this[storeContext].transitionPath;

    this[storeContext].transitionPath = '';

    return transitionPath;
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

  _login() {
    this[storeContext].isLoggedIn = true;
  }

  _logout() {
    this[storeContext].isLoggedIn = false;
  }

  _storeTransitionPath(path) {
    this[storeContext].transitionPath = path;
  }

}

const authStore = new AuthStore();

// The dispatcher registration for the current store component.
dispatcher.register((action) => {
  const actionType = action.actionType;
  const data = action.data;

  switch (actionType) {
    case authConstants.IS_LOGGED_IN:
      authStore._login();

      authStore.emitChange();

      console.log(`${actionType} action in \`authStore\`: ${JSON.stringify(action, null, 2)}`);
      break;
    case authConstants.NOT_LOGGED_IN:
    case authConstants.AUTH_CHECK_FAIL:
      authStore._logout();

      authStore.emitChange();

      console.log(`${actionType} action in \`authStore\`: ${JSON.stringify(action, null, 2)}`);
      break;
    case authConstants.ALREADY_SIGNED_UP:
      // TODO

      console.log(`${actionType} action in \`authStore\`: ${JSON.stringify(action, null, 2)}`);
      break;
    case authConstants.SIGNUP_FAIL:
      // TODO

      console.log(`${actionType} action in \`authStore\`: ${JSON.stringify(action, null, 2)}`);
      break;
    case authConstants.LOGOUT_FAIL:
      // TODO

      console.log(`${actionType} action in \`authStore\`: ${JSON.stringify(action, null, 2)}`);
      break;
    case authConstants.IN_TRANSITION:
      authStore._storeTransitionPath(data.path);

      console.log(`${actionType} action in \`authStore\`: ${JSON.stringify(action, null, 2)}`);
      break;
    default:
      break;
  }
});

export default authStore;
