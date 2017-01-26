import AppDispatcher from '../../dispatcher/AppDispatcher';
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
    };
  }

  isLoggedIn() {
    return this[storeContext].isLoggedIn;
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

}

const authStore = new AuthStore();

// The dispatcher registration for the current store component.
AppDispatcher.register((action) => {
  console.log(`Action in \`authStore\`: ${JSON.stringify(action, null, 2)}`);

  const actionType = action.actionType;

  switch (actionType) {
    case authConstants.IS_LOGGED_IN:
      authStore._login();

      authStore.emitChange();
      break;
    case authConstants.NOT_LOGGED_IN:
    case authConstants.AUTH_CHECK_FAIL:
      authStore._logout();

      authStore.emitChange();
      break;
    case authConstants.IS_SIGNED_UP:
      // TODO

      break;
    case authConstants.SIGNUP_FAIL:
      // TODO

      break;
    case authConstants.LOGOUT_FAIL:
      // TODO

      break;
    default:
      break;
  }
});

export default authStore;
