import Proxy from '../../../../common/proxies/proxy';
import dispatcher from '../../../../common/dispatcher/AppDispatcher';
import paymentConstants from '../constants/paymentConstants';

const paymentActionCreator = {
  pay(token, referCode) {
    const url = '/api/payment/proceed';
    const body = { token, referCode };
    const headers = { 'Content-Type': 'application/json; charset=UTF-8' };

    Proxy.post(url, body, headers)
      .then((payloadObj) => {

        dispatcher.dispatch({
          actionType: paymentConstants.PAY_SUCCESS,
        });
      });

  },
};

export default paymentActionCreator;
