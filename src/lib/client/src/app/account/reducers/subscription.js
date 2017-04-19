import actionTypes from '../../../common/actiontypes/';

const defaultInfoMsg = 'The request has been completed.';
const defaultErrorMsg = 'Oops! Something went wrong. Please try again.';
const initialState = {
  isLoading: false,
  info: {
    isVisible: false,
    message: defaultInfoMsg,
  },
  error: {
    isVisible: false,
    message: defaultErrorMsg,
  },
};

function accountSubscriptionReducer(state = initialState, action) {
  const actionType = action.type;
  const actionData = action.data;

  switch (actionType) {

    default:
      return state;
  }
}

function _showMessage(data) {
  let msg;

  if (typeof data !== 'string') {
    msg = window.JSON.stringify(data, null, 2);
  } else {
    msg = data;
  }

  return msg;
}

export default accountSubscriptionReducer;
