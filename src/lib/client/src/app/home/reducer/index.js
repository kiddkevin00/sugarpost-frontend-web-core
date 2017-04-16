import actionTypes from '../../../common/action-types/';

const initialState = {
  isModalOpen: true,
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.HOME.CLOSE_MODAL:
      return Object.assign({}, state, { isModalOpen: false });
    default:
      return state;
  }
}

export default homeReducer;
