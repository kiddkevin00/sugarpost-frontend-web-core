import FormInput from '../../../common/components/FormInput';
import BaseComponent from '../../../common/components/BaseComponent';
import React from 'react';
import classNames from 'classnames';

class SubscriptionSection extends BaseComponent {

  constructor(props) {
    super(props);

    //this._bind('_onClick');
    this.state = {
      subscriptionStatus: 'Not Subscribed',
      paymentMethod: 'VISA ending in 1234',
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({

    });
  }

  render() {
    return (
      <form className="form-horizontal" role="form">
        <FormInput
          text="Status"
          value={ this.state.subscriptionStatus }
          onChange={ () => {} }
          disabled={ true }
        />
        <FormInput
          text="Payment Method"
          value={ this.state.paymentMethod }
          onChange={ () => {} }
          disabled={ true }
        />
        <div className="form-group">
          <div className="col-sm-12">
            <input
              onClick={ this._onSave }
              type="button"
              className="btn btn-info btn-block"
              value="Update Payment Method"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12">
            <input
              onClick={ this._onSave }
              type="button"
              className="btn btn-link"
              value="Cancel Subscription"
            />
          </div>
        </div>
      </form>
    );
  }

}
SubscriptionSection.propTypes = {

};
SubscriptionSection.defaultProps = {

};

export default SubscriptionSection;
