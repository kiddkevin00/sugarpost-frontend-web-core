import BaseComponent from '../../../../common/components/BaseComponent';
import React from 'react';

class PaymentApp extends BaseComponent {

  constructor(props) {
    super(props);

    this.state = _getState();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <h1>Placeholder for payment section.</h1>
          </div>
        </div>
      </div>
    );
  }

}

/*
 * A private method. It should only be used by `setState()` and `getInitialState()` to sync up
 * the data in the Flux's store.
 */
function _getState() {
  return {};
}

export default PaymentApp;
