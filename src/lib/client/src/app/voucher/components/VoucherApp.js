import authActionCreator from '../../../common/auth/actioncreator/';
import BaseComponent from '../../../common/components/BaseComponent';
import constants from '../../../common/constants/';
import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';

class VoucherApp extends BaseComponent {

  componentDidMount() {
    if (!this.props.isLoggedIn) {
      this.props.dispatchAuthCheck();
    }
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    if (!nextProps.isLoggedIn) {
      nextContext.router.push('/register/login');
    } else if (
      nextProps.userType === constants.SYSTEM.USER_TYPES.UNPAID
    ) {
      nextContext.router.push({
        pathname: '/register/payment',
        query: { email: nextProps.userEmail },
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
};
VoucherApp.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    forceUpdate: state.auth.forceUpdate,
    userEmail: state.auth.user.email,
    userType: state.auth.user.type,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatchAuthCheck() {
      dispatch(authActionCreator.authCheck());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(VoucherApp);
