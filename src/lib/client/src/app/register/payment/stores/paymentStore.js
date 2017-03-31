import dispatcher from '../../../../common/dispatcher/appDispatcher';
import paymentConstants from '../constants/paymentConstants';
import EventEmitter from 'events';

const changeEvent = Symbol('change');
const storeContext = Symbol('paymentStoreContext');
const defaultErrorMsg = 'Oops! Something went wrong. Please try again.';
const defaultInfoMsg = 'Request has been completed.';

// A Flux's store.
class PaymentStore extends EventEmitter {

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

const paymentStore = new PaymentStore();

// The dispatcher registration for the current store component.
dispatcher.register((action) => {
  const actionType = action.actionType;
  const data = action.data;

  switch (actionType) {
    case paymentConstants.PAYING:
      paymentStore._setLoadingStatus(true);
      paymentStore._clearAllAlertBoxes();

      paymentStore.emitChange();
      console.log(`${actionType} action in \`paymentStore\`: ${JSON.stringify(action, null, 2)}`);
      break;
    case paymentConstants.PAYMENT_SUCCEED:
      paymentStore._showInfo('Thank you! We have received your payment.');
      paymentStore._setLoadingStatus(false);

      paymentStore.emitChange();
      console.log(`${actionType} action in \`paymentStore\`: ${JSON.stringify(action, null, 2)}`);
      break;
    case paymentConstants.ALREADY_PAID:
      paymentStore._showError('Our record shows that you have already paid for the subscription.');
      paymentStore._setLoadingStatus(false);

      paymentStore.emitChange();
      console.log(`${actionType} action in \`paymentStore\`: ${JSON.stringify(action, null, 2)}`);
      break;
    case paymentConstants.ALREADY_USED_REFERRAL_CODE:
      paymentStore._showError('The referral code can only be used once. Please try again without the referral code.');
      paymentStore._setLoadingStatus(false);

      paymentStore.emitChange();
      console.log(`${actionType} action in \`paymentStore\`: ${JSON.stringify(action, null, 2)}`);
      break;
    case paymentConstants.REFERRAL_CODE_NOT_FOUND:
      paymentStore._showError('The referral code you entered is invalid. Please try another one or proceed without refer code.');
      paymentStore._setLoadingStatus(false);

      paymentStore.emitChange();
      console.log(`${actionType} action in \`paymentStore\`: ${JSON.stringify(action, null, 2)}`);
      break;
    case paymentConstants.PAYMENT_FAIL:
      paymentStore._showError(data || 'Proceeding payment fails. Please try again.');
      paymentStore._setLoadingStatus(false);

      paymentStore.emitChange();
      console.log(`${actionType} action in \`paymentStore\`: ${JSON.stringify(action, null, 2)}`);
      break;
    default:
      break;
  }
});

export default paymentStore;
