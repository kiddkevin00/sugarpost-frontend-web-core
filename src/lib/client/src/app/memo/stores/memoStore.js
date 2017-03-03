import dispatcher from '../../../common/dispatcher/AppDispatcher';
import memoConstants from '../constants/memoConstants';
import EventEmitter from 'events';

const changeEvent = Symbol('change');
const storeContext = Symbol('memoStoreContext');

// A Flux's store.
class MemoStore extends EventEmitter {

  constructor() {
    super();

    // All internal store data.
    this[storeContext] = {
      todos: {},
    };
  }

  getAll() {
    return this[storeContext].todos;
  }

  areAllComplete() {
    for (const id in this[storeContext].todos) {
      if (!this[storeContext].todos[id].isComplete) {
        return false;
      }
    }
    return true;
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

  _create(text) {
    const id = (+new Date() + Math.floor(Math.random() * 999999).toString(36));

    this[storeContext].todos[id] = {
      id,
      text,
      isComplete: false,
    };
  }

  _update(id, updates) {
    this[storeContext].todos[id] = Object.assign({}, this[storeContext].todos[id], updates);
  }

  _updateAll(updates) {
    for (const id in this[storeContext].todos) {
      if (this[storeContext].todos.hasOwnProperty(id)) {
        this._update(id, updates);
      }
    }
  }

  _destroy(id) {
    delete this[storeContext].todos[id];
  }

  _destroyCompleted() {
    for (const id in this[storeContext].todos) {
      if (this[storeContext].todos[id].isComplete) {
        this._destroy(id);
      }
    }
  }

}

const memoStore = new MemoStore();

// The dispatcher registration for the current store component.
dispatcher.register((action) => {
  const actionType = action.actionType;
  const id = action.id || 0;
  const isComplete = action.isComplete || false;
  const text = (action.text && action.text.trim()) || '';

  switch (actionType) {
    case memoConstants.TODO_CREATE:
      if (text) {
        memoStore._create(text);

        memoStore.emitChange();
      }

      console.log(`${actionType} action in \`memoStore\`: ${JSON.stringify(action, null, 2)}`);
      break;
    case memoConstants.TODO_TOGGLE_COMPLETE:
      memoStore._update(id, { isComplete: !isComplete });

      memoStore.emitChange();
      break;
    case memoConstants.TODO_TOGGLE_COMPLETE_ALL:
      if (memoStore.areAllComplete()) {
        memoStore._updateAll({ isComplete: false });
      } else {
        memoStore._updateAll({ isComplete: true });
      }

      memoStore.emitChange();

      console.log(`${actionType} action in \`memoStore\`: ${JSON.stringify(action, null, 2)}`);
      break;
    case memoConstants.TODO_DESTROY:
      memoStore._destroy(id);

      memoStore.emitChange();

      console.log(`${actionType} action in \`memoStore\`: ${JSON.stringify(action, null, 2)}`);
      break;
    case memoConstants.TODO_DESTROY_COMPLETED:
      memoStore._destroyCompleted();

      memoStore.emitChange();

      console.log(`${actionType} action in \`memoStore\`: ${JSON.stringify(action, null, 2)}`);
      break;
    case memoConstants.TODO_UPDATE_TEXT:
      if (text) {
        memoStore._update(id, { text });

        memoStore.emitChange();
      }

      console.log(`${actionType} action in \`memoStore\`: ${JSON.stringify(action, null, 2)}`);
      break;
    default:
      break;
  }
});

export default memoStore;
