import AppDispatcher from '../../../common/dispatcher/AppDispatcher';
import homeConstants from '../constants/homeConstants';
import EventEmitter from 'events';

const changeEvent = Symbol('change');
const storeContext = Symbol('auth-store-context');

// A Flux's store.
class HomeStore extends EventEmitter {

  constructor() {
    super();

    // All internal store data.
    this[storeContext] = {
      subscribeFeedbackTxt: '\u00a0',
      subscribeFeedbackCssClass: '',
    };
  }

  getSubscribeFeedbackTxt() {
    return this[storeContext].subscribeFeedbackTxt;
  }

  getSubscribeFeedbackCssClass() {
    return this[storeContext].subscribeFeedbackCssClass;
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

  _subscribeResult(feedbackTxt, cssClass) {
    this[storeContext].subscribeFeedbackTxt = feedbackTxt;
    this[storeContext].subscribeFeedbackCssClass = `${cssClass} text-center`;
  }

}

const homeStore = new HomeStore();

// The dispatcher registration for the current store component.
AppDispatcher.register((action) => {
  console.log(`Action in \`homeStore\`: ${JSON.stringify(action, null, 2)}`);

  const actionType = action.actionType;

  switch (actionType) {
    case homeConstants.SUBSCRIBE_SUCCESS:
      homeStore._subscribeResult('Thank you for signing up! We will keep you posted!', 'text-warning');

      homeStore.emitChange();
      break;
    case homeConstants.IS_SUBSCRIBED:
      homeStore._subscribeResult('The e-mail address you entered in is already in our system!', 'text-danger');

      homeStore.emitChange();
      break;
    case homeConstants.SUBSCRIBE_FAIL:
      homeStore._subscribeResult('Oops! Something went wrong!  Try again later please!', 'text-danger');

      homeStore.emitChange();
      break;
    default:
      break;
  }
});

export default homeStore;
