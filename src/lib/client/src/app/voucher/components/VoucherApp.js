import authStore from '../../../common/auth/stores/authStore';
import authActionCreator from '../../../common/auth/actions/authActionCreator';
import BaseComponent from '../../../common/components/BaseComponent';
import constants from '../../../common/constants/';
import React from 'react';

class VoucherApp extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onChange');
    this.state = _getState();
  }

  componentDidMount() {
    authStore.addChangeListener(this._onChange);

    if (!this.state.isLoggedIn) {
      authActionCreator.authCheck();
    }
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    if (!nextState.isLoggedIn) {
      nextContext.router.push('/register/login');
    } else if (
      nextState.user.type === constants.SYSTEM.USER_TYPES.UNPAID
    ) {
      nextContext.router.push({
        pathname: '/register/payment',
        query: { email: nextState.user.email },
      });
    }
  }

  componentWillUnmount() {
    authStore.removeChangeListener(this._onChange);
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
                Thank you for subscribing! Your vouchers will be available on May 1st, 2017.
              </h1>
              <h2>(Vouchers will expire at the end of May)</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }

  _onChange() {
    this.setState(_getState());
  }

}
VoucherApp.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

/*
 * A private method. It should only be used by `setState()` and `getInitialState()` to sync up
 * the data in the Flux's store.
 */
function _getState() {
  return {
    isLoggedIn: authStore.isLoggedIn(),
    user: authStore.getUser(),
  };
}

export default VoucherApp;
