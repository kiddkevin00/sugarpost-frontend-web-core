import Dispatcher from './AppDispatcher';

const CustomDispatcher = Object.assign({}, Dispatcher.prototype, {
  /**
   * A bridge function between the views and the dispatcher, marking the action
   * as a view action.  Another variant here could be `handleServerAction` method.
   *
   * @param {Object} action - the data coming from the view.
   */
  handleViewAction(action) {
    this.dispatch({
      action,
      source: 'VIEW_ACTION',
    });
  },

  handleServerAction(action) {
    this.dispatch({
      action,
      source: 'SERVER_ACTION',
    });
  },
});

export default CustomDispatcher;
