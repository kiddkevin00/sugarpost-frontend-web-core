import AppDispatcher from '../dispatcher/AppDispatcher';
import loginConstants from '../../app/dashboard/login/constants/loginConstants';
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

  _login(email, password) {
    if (email === 'admin@teu.com' && password === 'admin') {
      this[storeContext].isLoggedIn = true;
    }
  }

}

const authStore = new AuthStore();

// The dispatcher registration for the current store component.
AppDispatcher.register((action) => {
  console.log(`Action in \`loginStore\`: ${JSON.stringify(action, null, 2)}`);

  const actionType = action.actionType;
  const email = action.email;
  const password = action.password;

  switch (actionType) {
    case loginConstants.BASIC_LOGIN:
      authStore._login(email, password);

      authStore.emitChange();
      break;
    default:
      break;
  }
});

export default authStore;
