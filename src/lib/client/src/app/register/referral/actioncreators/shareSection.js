import actionTypes from '../../../../common/actiontypes/';
import Proxy from '../../../../common/proxies/HttpProxy';
import StandardResponseWrapper from '../../../../common/utility/standard-response-wrapper';
import StandardErrorWrapper from '../../../../common/utility/standard-error-wrapper';

const shareSectionActionCreator = {
  openModal() {
    return {
      type: actionTypes.REFERRAL__SHARE.OPENING_MODAL,
    };
  },

  closeModal() {
    return {
      type: actionTypes.REFERRAL__SHARE.CLOSING_MODAL,
    };
  },

  setFormField(field, value) {
    return {
      type: actionTypes.REFERRAL__SHARE.SET_FORM_FIELD,
      data: { field, value },
    };
  },

  sendEmailToReferral(emailTo, emailFromName) {
    return (dispatch/*, getState*/) => {
      dispatch({
        type: actionTypes.REFERRAL__SHARE.SENDING_EMAIL_TO_REFERRAL,
      });

      const url = '/api/v1/referral/email';
      const body = { emailTo, emailFromName };
      const headers = { 'Content-Type': 'application/json; charset=UTF-8' };

      Proxy.post(url, body, headers)
        .then((payloadObj) => {
          if (StandardResponseWrapper.verifyFormat(payloadObj)) {
            const res = StandardResponseWrapper.deserialize(payloadObj);

            if (res.getNthData(0).success) {
              dispatch({
                type: actionTypes.REFERRAL__SHARE.SEND_EMAIL_TO_REFERRAL_SUCCEED,
              });
            } else {
              dispatch({
                type: actionTypes.REFERRAL__SHARE.SEND_EMAIL_TO_REFERRAL_FAIL,
              });
            }
          } else if (StandardErrorWrapper.verifyFormat(payloadObj)) {
            const err = StandardErrorWrapper.deserialize(payloadObj);

            dispatch({
              type: actionTypes.REFERRAL__SHARE.SEND_EMAIL_TO_REFERRAL_FAIL,
              data: err,
            });
          }
        })
        .catch((err) => {
          dispatch({
            type: actionTypes.REFERRAL__SHARE.SEND_EMAIL_TO_REFERRAL_FAIL,
            data: err,
          });
        });
    };
  },
};

export default shareSectionActionCreator;
