import AppDispatcher from '../../../common/dispatcher/AppDispatcher';
import homeConstants from '../constants/homeConstants';
import EventEmitter from 'events';

const changeEvent = Symbol('change');
const storeContext = Symbol('loginStoreContext');

// A Flux's store.
class HomeStore extends EventEmitter {

  constructor() {
    super();

    // All internal store data.
    this[storeContext] = {};
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

}

const homeStore = new HomeStore();

// The dispatcher registration for the current store component.
AppDispatcher.register((action) => {
  console.log(`Action in \`homeStore\`: ${JSON.stringify(action, null, 2)}`);

  const actionType = action.actionType;

  switch (actionType) {
    case homeConstants.SUBSCRIBE:
      window.alert('Thank you! We will keep in touch!');
      break;
    default:
      break;
  }
});

export default homeStore;
