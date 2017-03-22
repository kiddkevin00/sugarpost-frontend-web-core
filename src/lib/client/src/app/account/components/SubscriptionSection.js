import FormInput from '../../../common/components/FormInput';
import BaseComponent from '../../../common/components/BaseComponent';
import React from 'react';
import classNames from 'classnames';

class SubscriptionSection extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onUpdatePayment', '_onUnsubscribe');
    this.state = {
      subscriptionStatus: props.status,
      paymentMethod: 'VISA ending in 1234',
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      subscriptionStatus: nextProps.status,

    });
  }

  render() {
    const alertSuccessBoxClasses = classNames({
      alert: true,
      'alert-success': true,
      'alert-dismissible': true,
      collapse: !this.props.isInfoVisible,
    });
    const alertErrorBoxClasses = classNames({
      alert: true,
      'alert-danger': true,
      'alert-dismissible': true,
      collapse: !this.props.isErrorVisible,
    });

    return (
      <form className="form-horizontal" role="form">
        <div className={ alertSuccessBoxClasses } role="alert">
          <a className="close" data-dismiss="alert">×</a>
          <i className="fa fa-check-square-o" />
          &nbsp; { this.props.infoMsg }
        </div>
        <div className={ alertErrorBoxClasses } role="alert">
          <a className="close" data-dismiss="alert">×</a>
          <i className="fa fa-exclamation-triangle" />
          &nbsp; { this.props.errorMsg }
        </div>
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
              onClick={ this._onUpdatePayment }
              type="button"
              className="btn btn-info btn-block"
              value="Update Payment Method"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12">
            <input
              onClick={ this._onUnsubscribe }
              type="button"
              className="btn btn-link"
              value="Cancel Subscription"
            />
          </div>
        </div>
      </form>
    );
  }

  _onUpdatePayment(event) {

  }

  _onUnsubscribe(event) {
    this.props.onUnsubscribe(event);
  }

}
SubscriptionSection.propTypes = {
  isInfoVisible: React.PropTypes.bool.isRequired,
  isErrorVisible: React.PropTypes.bool.isRequired,
  infoMsg: React.PropTypes.string,
  errorMsg: React.PropTypes.string,
};
SubscriptionSection.defaultProps = {
  infoMsg: 'Request has been completed.',
  errorMsg: 'Oops! Something went wrong. Please try again.',
  status: 'Loading...',
};

export default SubscriptionSection;
