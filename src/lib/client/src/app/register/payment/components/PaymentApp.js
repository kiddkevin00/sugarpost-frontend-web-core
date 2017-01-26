import PaymentForm from './PaymentForm';
import BaseComponent from '../../../../common/components/BaseComponent';
import React from 'react';

class PaymentApp extends BaseComponent {

  constructor(props) {
    super(props);

    this.state = _getState();
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="signup-form-padding-top" />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="panel panel-default">
              <div className="panel-heading text-center">
                <h4><span className="label label-primary">My Supgarpost</span></h4>
              </div>
              <div className="panel-body">
                <PaymentForm
                  onSubmit={ PaymentApp._onSubmit }
                  email={ this.props.location.query.email }
                />
                <div className="panel-footer text-center">
                  <p className="text-muted">
                    <a href="mailto:administrator@mysugarpost.com">Development Support</a>
                  </p>
                  <p>v1.12.1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  static _onSubmit(token, referCode) {
    console.log(token, referCode);
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
