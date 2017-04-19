import FormInput from '../../../common/components/FormInput';
import BaseComponent from '../../../common/components/BaseComponent';
import constants from '../../../common/constants/';
import { connect } from 'react-redux';
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class SubscriptionSection extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onUpdatePayment', '_onUnsubscribe');
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
    let loader;

    if (this.props.isLoading) {
      loader = (
        <div className="slow-loader" />
      );
    } else {
      loader = null;
    }

    return (
      <form className="form-horizontal" role="form">
        { loader }
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
          value={ this.props.userType }
          onChange={ () => {} }
          disabled={ true }
        />
        <FormInput
          text="Payment Method"
          value={ this.props.userCreditCardLast4 ? `Card Ending in ${this.props.userCreditCardLast4}` : 'N/A' }
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
              disabled={ this.props.userType !== constants.SYSTEM.USER_TYPES.PAID }
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
  onUnsubscribe: PropTypes.func.isRequired,
  onUpdatePayment: PropTypes.func.isRequired,

  userType: PropTypes.string,
  userCreditCardLast4: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  isInfoVisible: PropTypes.bool.isRequired,
  infoMsg: PropTypes.string.isRequired,
  isErrorVisible: PropTypes.bool.isRequired,
  errorMsg: PropTypes.string.isRequired,
};
SubscriptionSection.defaultProps = {
  userType: 'loading...',
};

function mapStateToProps(state) {
  return {
    userType: state.auth.user.type,
    userCreditCardLast4: state.auth.user.creditCardLast4,
    isLoading: state.accountSubscription.isLoading,
    isInfoVisible: state.accountSubscription.info.isVisible,
    infoMsg: state.accountSubscription.info.message,
    isErrorVisible: state.accountSubscription.error.isVisible,
    errorMsg: state.accountSubscription.error.message,
  };
}
function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SubscriptionSection);
