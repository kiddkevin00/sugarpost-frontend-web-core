import dispatcher from '../../../common/dispatcher/appDispatcher';
import accountConstants from '../constants/accountConstants';
import EventEmitter from 'events';

const changeEvent = Symbol('change');
const storeContext = Symbol('accountStoreContext');

const defaultErrorMsg = 'Oops! Something went wrong. Please try again.';
const defaultInfoMsg = 'Request has been completed.';

// A Flux's store.
class AccountStore extends EventEmitter {

  constructor() {
    super();

    // All internal store data.
    this[storeContext] = {
      error: {
        isVisible: false,
        message: defaultInfoMsg,
      },
      info: {
        isVisible: false,
        message: defaultInfoMsg,
      },
    };
  }

  getError() {
    const error = this[storeContext].error;

    if (typeof error.message !== 'string') {
      error.message = JSON.stringify(error.message, null, 2);
    }

    return error;
  }

  getInfo() {
    const info = this[storeContext].info;

    if (typeof info.message !== 'string') {
      info.message = JSON.stringify(info.message, null, 2);
    }

    return info;
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

  _clearAllAlertBoxes() {
    Object.assign(this[storeContext].info, { message: defaultInfoMsg, isVisible: false });
    Object.assign(this[storeContext].error, { message: defaultErrorMsg, isVisible: false });
  }

  _showError(message = defaultErrorMsg) {
    Object.assign(this[storeContext].error, { message, isVisible: true });
  }

  _showInfo(message = defaultInfoMsg) {
    Object.assign(this[storeContext].info, { message, isVisible: true });
  }

}

const accountStore = new AccountStore();

// The dispatcher registration for the current store component.
dispatcher.register((action) => {
  const actionType = action.actionType;
  const data = action.data;

  switch (actionType) {
    case accountConstants.UPDATING_PROFILE:
      accountStore._clearAllAlertBoxes();

      accountStore.emitChange();
      console.log(`${actionType} action in \`accountStore\`: ${JSON.stringify(action, null, 2)}`);
      break;
    case accountConstants.UPDATE_PROFILE_SUCCEED:
      accountStore._showInfo('Your profile has been updated.');

      accountStore.emitChange();
      console.log(`${actionType} action in \`accountStore\`: ${JSON.stringify(action, null, 2)}`);
      break;
    case accountConstants.UPDATE_PROFILE_FAIL:
      accountStore._showError(data || 'Profile update fails.');

      accountStore.emitChange();
      console.log(`${actionType} action in \`accountStore\`: ${JSON.stringify(action, null, 2)}`);
      break;
    default:
      break;
  }
});

export default accountStore;
