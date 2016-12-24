import Proxy from '../../../common/proxies/proxy';
import dispatcher from '../../../common/dispatcher/AppDispatcher';
import homeConstants from '../constants/homeConstants';

const homeActionCreator = {
  subscribe(email) {
    const url = '/api/auth/subscribe';
    const body = { email };
    const headers = { 'Content-Type': 'application/json; charset=UTF-8' };

    Proxy.post(url, body, headers)
      .then((payloadObj) => {
        if (payloadObj.data && payloadObj.data[0] && payloadObj.data[0].isSubscribed) {
          dispatcher.dispatch({
            actionType: homeConstants.IS_SUBSCRIBED,
          });
        } else {
          dispatcher.dispatch({
            actionType: homeConstants.SUBSCRIBE_SUCCESS,
          });
        }
      })
      .catch((err) => {
        dispatcher.dispatch({
          actionType: homeConstants.SUBSCRIBE_FAIL,
          data: err,
        });
      });
  },
};

export default homeActionCreator;
