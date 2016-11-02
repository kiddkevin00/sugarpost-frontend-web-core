import AppDispatcher from '../../../../common/dispatcher/AppDispatcher';
import MemoConstants from '../constants/MemoConstants';

const MemoActionCreator = {
  create(text) {
    AppDispatcher.dispatch({
      actionType: MemoConstants.TODO_CREATE,
      text: text
    });
  },
  
  toggleComplete(todo) {
    var id = todo.id;
    var isComplete = todo.isComplete;

    AppDispatcher.dispatch({
      actionType: MemoConstants.TODO_TOGGLE_COMPLETE,
      id: id,
      isComplete: isComplete
    });
  },
  
  toggleCompleteAll() {
    AppDispatcher.dispatch({
      actionType: MemoConstants.TODO_TOGGLE_COMPLETE_ALL
    });
  },
  
  destroy(id) {
    AppDispatcher.dispatch({
      actionType: MemoConstants.TODO_DESTROY,
      id: id
    });
  },
  
  updateText(id, text) {
    AppDispatcher.dispatch({
      actionType: MemoConstants.TODO_UPDATE_TEXT,
      id: id,
      text: text
    });
  },
  
  destroyCompleted() {
    AppDispatcher.dispatch({
      actionType: MemoConstants.TODO_DESTROY_COMPLETED
    });
  }
};

export { MemoActionCreator as default };
