import Proxy from '../../../common/proxies/proxy';
import dispatcher from '../../../common/dispatcher/AppDispatcher';
import homeConstants from '../constants/homeConstants';

const homeActionCreator = {
  subscribe(email) {
    const body = { email };

    Proxy.post('/api/auth/subscribe', body)
      .then((response) => {
        const payload = response.body;

        if (payload.data && payload.data[0] && payload.data[0].isSubscribed) {
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
        console.log(err);

        dispatcher.dispatch({
          actionType: homeConstants.SUBSCRIBE_FAIL,
        });
      });
  },
};

export default homeActionCreator;
