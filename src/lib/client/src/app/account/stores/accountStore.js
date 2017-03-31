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
      profileInfo: {
        isVisible: false,
        message: defaultInfoMsg,
      },
      profileError: {
        isVisible: false,
        message: defaultInfoMsg,
      },
      subscriptionInfo: {
        isVisible: false,
        message: defaultInfoMsg,
      },
      subscriptionError: {
        isVisible: false,
        message: defaultInfoMsg,
      },
    };
  }

  getInfoForProfile() {
    return this[storeContext].profileInfo;
  }

  getErrorForProfile() {
    return this[storeContext].profileError;
  }

  getInfoForSubscription() {
    return this[storeContext].subscriptionInfo;
  }

  getErrorForSubscription() {
    return this[storeContext].subscriptionError;
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

  _clearAlertBoxesForProfile() {
    Object.assign(this[storeContext].profileInfo, { message: defaultInfoMsg, isVisible: false });
    Object.assign(this[storeContext].profileError, { message: defaultErrorMsg, isVisible: false });
  }

  _showInfoForProfile(_message = defaultInfoMsg) {
    let message;

    if (typeof _message !== 'string') {
      message = JSON.stringify(_message, null, 2);
    } else {
      message = _message;
    }

    Object.assign(this[storeContext].profileInfo, { message, isVisible: true });
  }

  _showErrorForProfile(_message = defaultErrorMsg) {
    let message;

    if (typeof _message !== 'string') {
      message = JSON.stringify(_message, null, 2);
    } else {
      message = _message;
    }

    Object.assign(this[storeContext].profileError, { message, isVisible: true });
  }

  _clearAlertBoxesForSubscription() {
    Object.assign(this[storeContext].subscriptionInfo,
     { message: defaultInfoMsg, isVisible: false });
    Object.assign(this[storeContext].subscriptionError,
      { message: defaultErrorMsg, isVisible: false });
  }

  _showInfoForSubscription(_message = defaultInfoMsg) {
    let message;

    if (typeof _message !== 'string') {
      message = JSON.stringify(_message, null, 2);
    } else {
      message = _message;
    }

    Object.assign(this[storeContext].subscriptionInfo, { message, isVisible: true });
  }

  _showErrorForSubscription(_message = defaultErrorMsg) {
    let message;

    if (typeof _message !== 'string') {
      message = JSON.stringify(_message, null, 2);
    } else {
      message = _message;
    }

    Object.assign(this[storeContext].subscriptionError, { message, isVisible: true });
  }

}

const accountStore = new AccountStore();

// The dispatcher registration for the current store component.
dispatcher.register((action) => {
  const actionType = action.actionType;
  const data = action.data;

  switch (actionType) {
    case accountConstants.UPDATING_PROFILE:
      accountStore._clearAlertBoxesForProfile();

      accountStore.emitChange();
      console.log(`${actionType} action in \`accountStore\`: ${JSON.stringify(action, null, 2)}`);
      break;
    case accountConstants.UPDATE_PROFILE_SUCCEED:
      accountStore._showInfoForProfile('Your profile has been updated.');

      accountStore.emitChange();
      console.log(`${actionType} action in \`accountStore\`: ${JSON.stringify(action, null, 2)}`);
      break;
    case accountConstants.UPDATE_PROFILE_FAIL:
      accountStore._showErrorForProfile(data || 'The original password is incorrect.');

      accountStore.emitChange();
      console.log(`${actionType} action in \`accountStore\`: ${JSON.stringify(action, null, 2)}`);
      break;

    case accountConstants.CANCELLING_SUBSCRIPTION:
      accountStore._clearAlertBoxesForSubscription();

      accountStore.emitChange();
      console.log(`${actionType} action in \`accountStore\`: ${JSON.stringify(action, null, 2)}`);
      break;
    case accountConstants.CANCEL_SUBSCRIPTION_SUCCEED:
      accountStore._showInfoForSubscription('Your subscription has been cancelled. Your voucher will remain available until the end of current cycle.');

      accountStore.emitChange();
      console.log(`${actionType} action in \`accountStore\`: ${JSON.stringify(action, null, 2)}`);
      break;
    case accountConstants.CANCEL_SUBSCRIPTION_FAIL:
      accountStore._showErrorForSubscription(data || 'You haven\'t paid for the subscription yet.');

      accountStore.emitChange();
      console.log(`${actionType} action in \`accountStore\`: ${JSON.stringify(action, null, 2)}`);
      break;
    default:
      break;
  }
});

export default accountStore;
