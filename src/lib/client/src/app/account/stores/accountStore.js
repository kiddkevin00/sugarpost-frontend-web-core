import dispatcher from '../../../common/dispatcher/appDispatcher';
import accountConstants from '../constants/accountConstants';
import authConstants from '../../../common/auth/constants/authConstants';
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
      isLoading: false,
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

  getInfo(type) {
    return this[storeContext][`${type}Info`];
  }

  getError(type) {
    return this[storeContext][`${type}Error`];
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

  _setLoadingStatus(status) {
    this[storeContext].isLoading = status;
  }

  _showInfo(type, _message = defaultInfoMsg) {
    let message;

    if (typeof _message !== 'string') {
      message = JSON.stringify(_message, null, 2);
    } else {
      message = _message;
    }

    Object.assign(this[storeContext][`${type}Info`], { message, isVisible: true });
  }

  _showError(type, _message = defaultErrorMsg) {
    let message;

    if (typeof _message !== 'string') {
      message = JSON.stringify(_message, null, 2);
    } else {
      message = _message;
    }

    Object.assign(this[storeContext][`${type}Error`], { message, isVisible: true });
  }

  _clearAlertBoxesForProfile() {
    Object.assign(this[storeContext].profileInfo, { message: defaultInfoMsg, isVisible: false });
    Object.assign(this[storeContext].profileError, { message: defaultErrorMsg, isVisible: false });
  }

  _clearAlertBoxesForSubscription() {
    Object.assign(this[storeContext].subscriptionInfo,
      { message: defaultInfoMsg, isVisible: false });
    Object.assign(this[storeContext].subscriptionError,
      { message: defaultErrorMsg, isVisible: false });
  }

}

const accountStore = new AccountStore();

// The dispatcher registration for the current store component.
dispatcher.register((action) => {
  const actionType = action.actionType;
  const data = action.data;

  switch (actionType) {
    case authConstants.LAND_PAGE:
      accountStore._clearAlertBoxesForProfile();
      accountStore._clearAlertBoxesForSubscription();

      accountStore.emitChange();
      console.log(`${actionType} action in \`accountStore\`: ${JSON.stringify(action, null, 2)}`);
      break;

    case accountConstants.UPDATING_PROFILE:
      accountStore._clearAlertBoxesForProfile();

      accountStore.emitChange();
      console.log(`${actionType} action in \`accountStore\`: ${JSON.stringify(action, null, 2)}`);
      break;
    case accountConstants.UPDATE_PROFILE_SUCCEED:
      accountStore._showInfo('profile', 'Your profile has been updated.');

      window.setTimeout(() => {
        accountStore._clearAlertBoxesForProfile();
        accountStore.emitChange();
      }, 3000);

      accountStore.emitChange();
      console.log(`${actionType} action in \`accountStore\`: ${JSON.stringify(action, null, 2)}`);
      break;
    case accountConstants.UPDATE_PROFILE_FAIL:
      accountStore._showError('profile', data || 'The original password is incorrect.');

      window.setTimeout(() => {
        accountStore._clearAlertBoxesForProfile();
        accountStore.emitChange();
      }, 3000);

      accountStore.emitChange();
      console.log(`${actionType} action in \`accountStore\`: ${JSON.stringify(action, null, 2)}`);
      break;

    case accountConstants.CANCELLING_SUBSCRIPTION:
      accountStore._clearAlertBoxesForSubscription();

      accountStore.emitChange();
      console.log(`${actionType} action in \`accountStore\`: ${JSON.stringify(action, null, 2)}`);
      break;
    case accountConstants.CANCEL_SUBSCRIPTION_SUCCEED:
      accountStore._showInfo('subscription', 'Your subscription has been cancelled. Your vouchers will remain available until the end of current cycle.');

      window.setTimeout(() => {
        accountStore._clearAlertBoxesForSubscription();
        accountStore.emitChange();
      }, 3000);

      accountStore.emitChange();
      console.log(`${actionType} action in \`accountStore\`: ${JSON.stringify(action, null, 2)}`);
      break;
    case accountConstants.CANCEL_SUBSCRIPTION_FAIL:
      accountStore._showError('subscription', data || 'You haven\'t paid for the subscription yet.');

      window.setTimeout(() => {
        accountStore._clearAlertBoxesForSubscription();
        accountStore.emitChange();
      }, 3000);

      accountStore.emitChange();
      console.log(`${actionType} action in \`accountStore\`: ${JSON.stringify(action, null, 2)}`);
      break;
    default:
      break;
  }
});

export default accountStore;
