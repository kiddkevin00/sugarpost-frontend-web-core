import Proxy from '../../../common/proxies/proxy';
import dispatcher from '../../../common/dispatcher/AppDispatcher';
import homeConstants from '../constants/homeConstants';
import constants from '../../../common/constants/'

const homeActionCreator = {
  subscribe(email) {
    const urlBase = process.env.NODE_ENV === 'production' ?
      constants.SYSTEM.URL_BASES.PROD_BACKEND_API : constants.SYSTEM.URL_BASES.LOCAL_BACKEND_API;
    const body = { email };

    Proxy.post(`${urlBase}/api/auth/subscribe`, body)
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
