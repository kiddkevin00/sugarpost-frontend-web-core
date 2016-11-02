import AppDispatcher from '../../../../common/dispatcher/AppDispatcher';
import MemoConstants from '../constants/MemoConstants';
import { EventEmitter } from 'events';

const changeEvent = Symbol('change');

/*
 * All internal store data are the following:
 */
var _todos = {};

/*
 * All helper functions for dispatcher registration are the following:
 */
function _create(text) {
  const id = (+new Date() + Math.floor(Math.random() * 999999).toString(36));

  _todos[id] = { id, text, isComplete: false };
}
function _update(id, updates) {
  _todos[id] = Object.assign({}, _todos[id], updates);
}
function _updateAll(updates) {
  for (let id in _todos) {
    _update(id, updates);
  }
}
function _destroy(id) {
  delete _todos[id];
}
function _destroyCompleted() {
  for (let id in _todos) {
    if (_todos[id].isComplete) {
      _destroy(id);
    }
  }
}

// A store component.
var MemoStore = Object.assign({}, EventEmitter.prototype, {
  getAll() {
    return _todos;
  },

  areAllComplete() {
    for (let id in _todos) {
      if (!_todos[id].isComplete) {
        return false;
      }
    }
    return true;
  },

  emitChange() {
    this.emit(changeEvent);
  },

  addChangeListener(callback) {
    this.on(changeEvent, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(changeEvent, callback);
  }
});

// The dispatcher registration for the current store component.
AppDispatcher.register(action => {
  console.log('Action in `MemoStore`: ', action);

  const actionType = action.actionType;
  const id = action.id || 0;
  const isComplete = action.isComplete === false ? false : action.isComplete;
  const text = action.text && action.text.trim() || '';

  switch (actionType) {
    case MemoConstants.TODO_CREATE:
      if (text) {
        _create(text);
        MemoStore.emitChange();
      }
      break;
    case MemoConstants.TODO_TOGGLE_COMPLETE:
      _update(id, { isComplete: !isComplete });
      MemoStore.emitChange();
      break;
    case MemoConstants.TODO_TOGGLE_COMPLETE_ALL:
      if (MemoStore.areAllComplete()) {
        _updateAll({ isComplete: false });
      } else {
        _updateAll({ isComplete: true });
      }
      MemoStore.emitChange();
      break;
    case MemoConstants.TODO_DESTROY:
      _destroy(id);
      MemoStore.emitChange();
      break;
    case MemoConstants.TODO_DESTROY_COMPLETED:
      _destroyCompleted();
      MemoStore.emitChange();
      break;
    case MemoConstants.TODO_UPDATE_TEXT:
      if (text) {
        _update(id, { text: text });
        MemoStore.emitChange();
      }
      break;
    default:
      return;
  }

});

export { MemoStore as default };
