import actionTypes from '../../../common/actiontypes/';


const homeActionCreator = {
  closeModal() {
    return {
      type: actionTypes.HOME.CLOSE_MODAL,
    };
  },
};

export default homeActionCreator;
