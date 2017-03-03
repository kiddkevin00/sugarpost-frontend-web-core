import dispatcher from '../../../common/dispatcher/AppDispatcher';
import memoConstants from '../constants/memoConstants';

const memoActionCreator = {
  create(text) {
    dispatcher.dispatch({
      text,
      actionType: memoConstants.TODO_CREATE,
    });
  },

  toggleComplete(todo) {
    const id = todo.id;
    const isComplete = todo.isComplete;

    dispatcher.dispatch({
      id,
      isComplete,
      actionType: memoConstants.TODO_TOGGLE_COMPLETE,
    });
  },

  toggleCompleteAll() {
    dispatcher.dispatch({
      actionType: memoConstants.TODO_TOGGLE_COMPLETE_ALL,
    });
  },

  destroy(id) {
    dispatcher.dispatch({
      id,
      actionType: memoConstants.TODO_DESTROY,
    });
  },

  updateText(id, text) {
    dispatcher.dispatch({
      id,
      text,
      actionType: memoConstants.TODO_UPDATE_TEXT,
    });
  },

  destroyCompleted() {
    dispatcher.dispatch({
      actionType: memoConstants.TODO_DESTROY_COMPLETED,
    });
  },
};

export default memoActionCreator;
