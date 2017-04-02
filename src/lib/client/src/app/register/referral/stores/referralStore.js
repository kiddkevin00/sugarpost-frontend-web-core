import dispatcher from '../../../../common/dispatcher/appDispatcher';
import referralConstants from '../constants/referralConstants';
import authConstants from '../../../../common/auth/constants/authConstants';
import EventEmitter from 'events';

const changeEvent = Symbol('change');
const storeContext = Symbol('referralStoreContext');
const defaultErrorMsg = 'Oops! Something went wrong. Please try again.';
const defaultInfoMsg = 'Request has been completed.';

// A Flux's store.
class ReferralStore extends EventEmitter {

  constructor() {
    super();

    // All internal store data.
    this[storeContext] = {
      isLoading: false,
      error: {
        isVisible: false,
        message: defaultErrorMsg,
      },
      info: {
        isVisible: false,
        message: defaultInfoMsg,
      },
    };
  }

  isLoading() {
    return this[storeContext].isLoading;
  }

  getError() {
    return this[storeContext].error;
  }

  getInfo() {
    return this[storeContext].info;
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

  _showError(_message = defaultErrorMsg) {
    let message;

    if (typeof _message !== 'string') {
      message = JSON.stringify(_message, null, 2);
    } else {
      message = _message;
    }

    Object.assign(this[storeContext].error, { message, isVisible: true });
  }

  _showInfo(_message = defaultInfoMsg) {
    let message;

    if (typeof _message !== 'string') {
      message = JSON.stringify(_message, null, 2);
    } else {
      message = _message;
    }

    Object.assign(this[storeContext].info, { message, isVisible: true });
  }

  _clearAllAlertBoxes() {
    Object.assign(this[storeContext].info, { message: defaultInfoMsg, isVisible: false });
    Object.assign(this[storeContext].error, { message: defaultErrorMsg, isVisible: false });
  }

}

const referralStore = new ReferralStore();

// The dispatcher registration for the current store component.
dispatcher.register((action) => {
  const actionType = action.actionType;
  const data = action.data;

  switch (actionType) {
    case authConstants.LAND_PAGE:
      referralStore._clearAllAlertBoxes();

      referralStore.emitChange();
      console.log(`${actionType} action in \`referralStore\`: ${JSON.stringify(action, null, 2)}`);
      break;

    case referralConstants.REDEEMING_CREDITS:
    case referralConstants.SENDING_EMAIL_TO_REFERRAL:
      referralStore._setLoadingStatus(true);
      referralStore._clearAllAlertBoxes();

      referralStore.emitChange();
      console.log(`${actionType} action in \`referralStore\`: ${JSON.stringify(action, null, 2)}`);
      break;
    case referralConstants.REDEEM_CREDITS_SUCCEED:
      referralStore._showInfo('You have redeemed your next free e-package successfully.');
      referralStore._setLoadingStatus(false);

      window.setTimeout(() => {
        referralStore._clearAllAlertBoxes();
        referralStore.emitChange();
      }, 3000);

      referralStore.emitChange();
      console.log(`${actionType} action in \`referralStore\`: ${JSON.stringify(action, null, 2)}`);
      break;
    case referralConstants.REDEEM_CREDITS_FAIL:
      referralStore._showError(data || 'Something went wrong while redeeming. Please try again.');
      referralStore._setLoadingStatus(false);

      window.setTimeout(() => {
        referralStore._clearAllAlertBoxes();
        referralStore.emitChange();
      }, 3000);

      referralStore.emitChange();
      console.log(`${actionType} action in \`referralStore\`: ${JSON.stringify(action, null, 2)}`);
      break;

    case referralConstants.OPENING_MODAL:
    case referralConstants.CLOSING_MODAL:
      referralStore._clearAllAlertBoxes();

      referralStore.emitChange();
      console.log(`${actionType} action in \`referralStore\`: ${JSON.stringify(action, null, 2)}`);
      break;
    case referralConstants.SEND_EMAIL_TO_REFERRAL_SUCCEED:
      referralStore._showInfo('Referral email has sent out successfully.');
      referralStore._setLoadingStatus(false);

      window.setTimeout(() => {
        referralStore._clearAllAlertBoxes();
        referralStore.emitChange();
      }, 3000);

      referralStore.emitChange();
      console.log(`${actionType} action in \`referralStore\`: ${JSON.stringify(action, null, 2)}`);
      break;
    case referralConstants.SEND_EMAIL_TO_REFERRAL_FAIL:
      referralStore._showError(data || 'Something went wrong while sending referral email. Please try again.');
      referralStore._setLoadingStatus(false);

      window.setTimeout(() => {
        referralStore._clearAllAlertBoxes();
        referralStore.emitChange();
      }, 3000);

      referralStore.emitChange();
      console.log(`${actionType} action in \`referralStore\`: ${JSON.stringify(action, null, 2)}`);
      break;
    default:
      break;
  }
});

export default referralStore;
