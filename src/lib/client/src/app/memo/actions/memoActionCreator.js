import AppDispatcher from '../../../common/dispatcher/AppDispatcher';
import memoConstants from '../constants/memoConstants';

const memoActionCreator = {
  create(text) {
    AppDispatcher.dispatch({
      text,
      actionType: memoConstants.TODO_CREATE,
    });
  },

  toggleComplete(todo) {
    const id = todo.id;
    const isComplete = todo.isComplete;

    AppDispatcher.dispatch({
      id,
      isComplete,
      actionType: memoConstants.TODO_TOGGLE_COMPLETE,
    });
  },

  toggleCompleteAll() {
    AppDispatcher.dispatch({
      actionType: memoConstants.TODO_TOGGLE_COMPLETE_ALL,
    });
  },

  destroy(id) {
    AppDispatcher.dispatch({
      id,
      actionType: memoConstants.TODO_DESTROY,
    });
  },

  updateText(id, text) {
    AppDispatcher.dispatch({
      id,
      text,
      actionType: memoConstants.TODO_UPDATE_TEXT,
    });
  },

  destroyCompleted() {
    AppDispatcher.dispatch({
      actionType: memoConstants.TODO_DESTROY_COMPLETED,
    });
  },
};

export default memoActionCreator;
