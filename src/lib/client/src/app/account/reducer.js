import actionTypes from '../../common/action-types/';

const defaultInfoMsg = 'The request has been completed.';
const initialState = {
  formFullName: '',
  formPassword: '',
  formNewPassword: '',
  isLoading: false,
  info: {
    isVisible: false,
    message: defaultInfoMsg,
  },
};

function accountReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ACCOUNT.SET_FORM_FIELD:
      return Object.assign({}, state, { [`form${action.data.field}`]: action.data.value });
    case actionTypes.ACCOUNT.UPDATING_PROFILE:
      return Object.assign({}, state, { isLoading: true });
    case actionTypes.ACCOUNT.UPDATE_PROFILE_SUCCEED:
      return Object.assign({}, state, { isLoading: false });
    case actionTypes.ACCOUNT.UPDATE_PROFILE_FAIL:
      return Object.assign({}, state, { isLoading: false });
    default:
      return state;
  }
};

export default accountReducer;
