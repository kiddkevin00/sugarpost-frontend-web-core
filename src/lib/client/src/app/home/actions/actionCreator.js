import actionTypes from '../../../common/action-types/';

const homeActionCreator = {
  closeModal() {
    return {
      type: actionTypes.HOME.CLOSE_MODAL,
    };
  },
};

export default homeActionCreator;
