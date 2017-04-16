import actionTypes from '../../../../common/action-types/';

const loginActionCreator = {
  setLoginFormField(field, value) {
    return {
      type: actionTypes.LOGIN.SET_FORM_FIELD,
      data: { field, value },
    };
  },
};

export default loginActionCreator;
