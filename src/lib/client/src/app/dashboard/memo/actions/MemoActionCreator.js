import AppDispatcher from '../../../../common/dispatcher/AppDispatcher';
import MemoConstants from '../constants/MemoConstants';

const MemoActionCreator = {
  create(text) {
    AppDispatcher.dispatch({
      text,
      actionType: MemoConstants.TODO_CREATE
    });
  },

  toggleComplete(todo) {
    const id = todo.id;
    const isComplete = todo.isComplete;

    AppDispatcher.dispatch({
      id, isComplete,
      actionType: MemoConstants.TODO_TOGGLE_COMPLETE
    });
  },

  toggleCompleteAll() {
    AppDispatcher.dispatch({
      actionType: MemoConstants.TODO_TOGGLE_COMPLETE_ALL
    });
  },

  destroy(id) {
    AppDispatcher.dispatch({
      id, 
      actionType: MemoConstants.TODO_DESTROY
    });
  },

  updateText(id, text) {
    AppDispatcher.dispatch({
      id, text,
      actionType: MemoConstants.TODO_UPDATE_TEXT
    });
  },

  destroyCompleted() {
    AppDispatcher.dispatch({
      actionType: MemoConstants.TODO_DESTROY_COMPLETED
    });
  }
};

export default MemoActionCreator;
