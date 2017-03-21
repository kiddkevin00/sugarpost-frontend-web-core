import Proxy from '../../../common/proxies/HttpProxy';
import dispatcher from '../../../common/dispatcher/appDispatcher';
import StandardResponseWrapper from '../../../common/utility/standard-response-wrapper';
import constants from '../constants/homeConstants';

const homeActionCreator = {
  subscribe(email) {
    const url = '/api/auth/subscribe';
    const body = { email };
    const headers = { 'Content-Type': 'application/json; charset=UTF-8' };

    Proxy.post(url, body, headers)
      .then((payloadObj) => {
        try {
          const res = StandardResponseWrapper.deserialize(payloadObj);

          if (res.data[0] && res.data[0].isSubscribed) {
            dispatcher.dispatch({
              actionType: constants.IS_SUBSCRIBED,
            });
          } else {
            dispatcher.dispatch({
              actionType: constants.SUBSCRIBE_SUCCESS,
            });
          }
        } catch (err) {
          dispatcher.dispatch({
            actionType: constants.SUBSCRIBE_FAIL,
            data: err,
          });
        }
      })
      .catch((err) => {
        dispatcher.dispatch({
          actionType: constants.SUBSCRIBE_FAIL,
          data: err,
        });
      });
  },
};

export default homeActionCreator;
