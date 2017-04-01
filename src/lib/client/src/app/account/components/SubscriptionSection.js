import FormInput from '../../../common/components/FormInput';
import BaseComponent from '../../../common/components/BaseComponent';
import constants from '../../../common/constants/';
import React from 'react';
import classNames from 'classnames';

class SubscriptionSection extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onUpdatePayment', '_onUnsubscribe');
    this.state = {
      subscriptionStatus: props.status,
      creditCardLast4: props.creditCardLast4,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      subscriptionStatus: nextProps.status,
      creditCardLast4: nextProps.creditCardLast4,
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
          value={ this.state.creditCardLast4 || 'N/A' }
          onChange={ () => {} }
          disabled={ true }
        />
        {/*
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
        */}
        <div className="form-group">
          <div className="col-sm-12">
            <input
              onClick={ this._onUnsubscribe }
              disabled={ this.state.subscriptionStatus !== constants.SYSTEM.USER_TYPES.PAID }
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
    this.props.onUpdatePayment(event);
  }

  _onUnsubscribe(event) {
    this.props.onUnsubscribe(event);
  }

}
SubscriptionSection.propTypes = {
  onUnsubscribe: React.PropTypes.func.isRequired,
  onUpdatePayment: React.PropTypes.func.isRequired,
  isInfoVisible: React.PropTypes.bool.isRequired,
  isErrorVisible: React.PropTypes.bool.isRequired,
  infoMsg: React.PropTypes.string,
  errorMsg: React.PropTypes.string,
  status: React.PropTypes.string,
  creditCardLast4: React.PropTypes.string,
};
SubscriptionSection.defaultProps = {
  infoMsg: 'Request has been completed.',
  errorMsg: 'Oops! Something went wrong. Please try again.',
  status: 'Loading...',
  creditCardLast4: 'Loading...',
};

export default SubscriptionSection;
