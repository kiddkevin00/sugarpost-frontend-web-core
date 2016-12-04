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
      currentSignupUser: [],
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

  _signup(email, password, firstName, lastName) {
    this[storeContext].currentSignupUser.push({
      firstName,
      lastName,
      email,
      password,
    });
    this[storeContext].isLoggedIn = true;
  }

  _login(email, password) {
    if (email === 'admin@admin' && password === 'admin') {
      this[storeContext].isLoggedIn = true;
      return;
    }

    const currentSignupUser = this[storeContext].currentSignupUser;

    for (const signupUser of currentSignupUser) {
      if (signupUser.email === email && signupUser.password === password) {
        this[storeContext].isLoggedIn = true;
        return;
      }
    }
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
  const email = action.email;
  const password = action.password;
  const firstName = action.firstName;
  const lastName = action.lastName;

  switch (actionType) {
    case authConstants.BASIC_LOGIN:
      authStore._login(email, password);

      authStore.emitChange();
      break;
    case authConstants.BASIC_SIGNUP:
      authStore._signup(firstName, lastName, email, password);

      authStore.emitChange();
      break;
    case authConstants.LOGOUT:
      authStore._logout();

      authStore.emitChange();
      break;
    default:
      break;
  }
});

export default authStore;
