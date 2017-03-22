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

  _clearAllAlertBoxes() {
    Object.assign(this[storeContext].info, { message: defaultInfoMsg, isVisible: false });
    Object.assign(this[storeContext].error, { message: defaultErrorMsg, isVisible: false });
  }

  _showError(_message = defaultErrorMsg) {
    let message;

    if (typeof _message !== 'string') {
      message = JSON.stringify(message, null, 2);
    } else {
      message = _message;
    }

    Object.assign(this[storeContext].error, { message, isVisible: true });
  }

  _showInfo(_message = defaultInfoMsg) {
    let message;

    if (typeof _message !== 'string') {
      message = JSON.stringify(message, null, 2);
    } else {
      message = _message;
    }

    Object.assign(this[storeContext].info, { message, isVisible: true });
  }

}

const paymentStore = new PaymentStore();

// The dispatcher registration for the current store component.
dispatcher.register((action) => {
  const actionType = action.actionType;
  const data = action.data;

  switch (actionType) {
    case paymentConstants.PAYING:
      paymentStore._clearAllAlertBoxes();

      paymentStore.emitChange();
      console.log(`${actionType} action in \`paymentStore\`: ${JSON.stringify(action, null, 2)}`);
      break;
    case paymentConstants.PAYMENT_SUCCEED:
      paymentStore._showInfo('Thank you! We have received your payment.');

      paymentStore.emitChange();
      console.log(`${actionType} action in \`paymentStore\`: ${JSON.stringify(action, null, 2)}`);
      break;
    case paymentConstants.REFERRAL_CODE_NOT_FOUND:
      paymentStore._showError('The refer code you entered is invalid. Please try another one or proceed without refer code.');

      paymentStore.emitChange();
      console.log(`${actionType} action in \`paymentStore\`: ${JSON.stringify(action, null, 2)}`);
      break;
    case paymentConstants.EMAIL_NOT_SIGNUP:
      paymentStore._showError('Your account\'s email address has not registered in our system yet. Please sign up again with another email and try again.');

      paymentStore.emitChange();
      console.log(`${actionType} action in \`paymentStore\`: ${JSON.stringify(action, null, 2)}`);
      break;
    case paymentConstants.ALREADY_PAY:
      paymentStore._showError('Our record shows that you have already paid for the subscription.');

      paymentStore.emitChange();
      console.log(`${actionType} action in \`paymentStore\`: ${JSON.stringify(action, null, 2)}`);
      break;
    case paymentConstants.PAYMENT_FAIL:
      paymentStore._showError(data || 'Payment fails. Please try again.');

      paymentStore.emitChange();
      console.log(`${actionType} action in \`paymentStore\`: ${JSON.stringify(action, null, 2)}`);
      break;
    default:
      break;
  }
});

export default paymentStore;
