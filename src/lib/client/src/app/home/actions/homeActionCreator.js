import dispatcher from '../../../common/dispatcher/AppDispatcher';
import constants from '../constants/homeConstants';

const homeActionCreator = {
  subscribe(email) {
    // [TODO] Make http request.

    dispatcher.dispatch({
      email,
      actionType: constants.SUBSCRIBE,
    });
  },
};

export default homeActionCreator;
