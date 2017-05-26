import authActionCreator from '../../../common/auth/actioncreator/';
import BaseComponent from '../../../common/components/BaseComponent';
import constants from '../../../common/constants/';
import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';

class VoucherApp extends BaseComponent {

  componentDidMount() {
    if (!this.props.isLoggedIn) {
      this.props.dispatchAuthCheck(this.props.urlPath);
    }
  }

  componentWillUpdate(nextProps) {
    if (!nextProps.isLoggedIn) {
      nextProps.history.replace('/register/login');
    } else if (nextProps.userType === constants.SYSTEM.USER_TYPES.UNPAID) {
      nextProps.history.repalce({
        pathname: '/register/payment',
        search: `email=${nextProps.userEmail}`,
      });
    }
  }

  render() {
    return (
      <div id="voucher-app">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="header-placeholder-custom" />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 text-center" style={ { color: 'white' } }>
              <h1 >
                Thank you for subscribing! Your vouchers will be available on June 1st, 2017.
              </h1>
              <h2>(Vouchers will be expired at the end of June)</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
VoucherApp.propTypes = {
  dispatchAuthCheck: PropTypes.func.isRequired,

  isLoggedIn: PropTypes.bool.isRequired,
  forceUpdate: PropTypes.bool.isRequired,
  userEmail: PropTypes.string,
  userType: PropTypes.string,
  urlPath: PropTypes.string.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    forceUpdate: state.auth.forceUpdate,
    userEmail: state.auth.user.email,
    userType: state.auth.user.type,
    urlPath: ownProps.location.pathname,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatchAuthCheck(transitionPath) {
      dispatch(authActionCreator.authCheck(transitionPath));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(VoucherApp);
