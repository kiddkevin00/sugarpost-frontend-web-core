import Proxy from '../../../common/proxies/proxy';
import dispatcher from '../../../common/dispatcher/AppDispatcher';
import homeConstants from '../constants/homeConstants';

const homeActionCreator = {
  subscribe(email) {
    const body = { email };

    Proxy.post('/api/auth/subscribe', body)
      .then(() => {
        dispatcher.dispatch({
          actionType: homeConstants.SUBSCRIBE_SUCCESS,
        });
      })
      .catch(() => {
        dispatcher.dispatch({
          actionType: homeConstants.SUBSCRIBE_FAIL,
        });
      });
  },
};

export default homeActionCreator;
