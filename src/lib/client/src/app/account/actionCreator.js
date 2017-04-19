import actionTypes from '../../common/action-types/';
import Proxy from '../../common/proxies/HttpProxy';
import StandardResponseWrapper from '../../common/utility/standard-response-wrapper';
import StandardErrorWrapper from '../../common/utility/standard-error-wrapper';
import constants from '../../common/constants/';

const accountActionCreator = {
  setAccountFormField(field, value) {
    return {
      type: actionTypes.ACCOUNT.SET_ACCOUNT_FORM_FIELD,
      data: { field, value },
    };
  },

  updateProfile(fullName, password, newPassword) {
    return (dispatch, getState) => {
      dispatch({
        type: actionTypes.ACCOUNT.UPDATING_PROFILE,
      });

      const url = '/api/v1/user/info';
      const body = { fullName, password, newPassword };
      const headers = { 'Content-Type': 'application/json; charset=UTF-8' };

      Proxy.put(url, body, headers)
        .then((payloadObj) => {
          if (StandardResponseWrapper.verifyFormat(payloadObj)) {
            const res = StandardResponseWrapper.deserialize(payloadObj);

            if (res.getNthData(0).success) {
              dispatch({
                type: actionTypes.AUTH.USER_INFO_SYNC,
                data: {
                  user: { fullName },
                },
              });

              dispatch({
                type: actionTypes.ACCOUNT.UPDATE_PROFILE_SUCCEED,
              });
            } else {
              dispatch({
                type: actionTypes.ACCOUNT.UPDATE_PROFILE_FAIL,
              });
            }
          } else if (StandardErrorWrapper.verifyFormat(payloadObj)) {
            const err = StandardErrorWrapper.deserialize(payloadObj);

            dispatch({
              type: actionTypes.ACCOUNT.UPDATE_PROFILE_FAIL,
              data: err,
            });
          }
        })
        .catch((err) => {
          dispatch({
            type: actionTypes.ACCOUNT.UPDATE_PROFILE_FAIL,
            data: err,
          });
        });
    };
  },

  resetAccountForm(fullName, email) {
    return {
      type: actionTypes.ACCOUNT.RESET_ACCOUNT_FORM,
      data: { fullName, email },
    };
  },
};

export default accountActionCreator;
