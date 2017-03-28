import authStore from '../../../../common/auth/stores/authStore';
import authActionCreator from '../../../../common/auth/actions/authActionCreator';
import LoginForm from './LoginForm';
import BaseComponent from '../../../../common/components/BaseComponent';
import constants from '../../../../common/constants/';
import React from 'react';

class LoginApp extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onChange');
    this.state = _getState();
  }

  componentDidMount() {
    authStore.addChangeListener(this._onChange);
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    if (nextState.isLoggedIn) {
      const transitionPath = authStore.getTransitionPath();
      const paymentRoute = {
        pathname: '/register/payment',
        query: { email: nextState.user.email },
      };
      const accountRoute = {
        pathname: '/account',
      };
      const referralRoute = {
        pathname: '/referral',
      };

      if (transitionPath === '/register/payment') {
        nextContext.router.push(paymentRoute);
      } else if (nextState.user.type === constants.SYSTEM.USER_TYPES.PAID) {
        nextContext.router.push(transitionPath || accountRoute);
      } else if (nextState.user.type === constants.SYSTEM.USER_TYPES.INFLUENCER) {
        nextContext.router.push(transitionPath || referralRoute);
      } else {
        nextContext.router.push(transitionPath || paymentRoute);
      }
    }
  }

  componentWillUnmount() {
    authStore.removeChangeListener(this._onChange);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-7 text">
            <h1>Claim Your Desserts Today</h1>
            <div className="description">
              <p>
                The Sugarpost team is glad you are back! Log in to change your account settings,
                view, email, or print your vouchers from your purchased e-package, or get your
                referral code to share with your friends.  Not a paying subscriber yet? If you
                already have an account, log in to start your subscription today!
              </p>
            </div>
            <div className="top-big-link">
              <ol>
                <li>Learn more about this month’s featured vendors.</li>
                <li>View your vouchers and claim your desserts.</li>
                <li>Refer and earn credits.</li>
              </ol>
            </div>
          </div>
          <div className="col-lg-offset-1 col-lg-4 col-sm-5">
            <div className="form-top">
              <div className="form-top-left">
                <h3>Log in</h3>
                <p>Fill in the form below to access your account:</p>
              </div>
              <div className="form-top-right">
                <img src="/assets/images/sugarpost-logo.png" alt="" />
              </div>
            </div>
            <div className="form-bottom">
              <LoginForm
                onSubmit={ LoginApp._onSubmit }
                isErrorVisible={ this.state.error.isVisible }
                errorMsg={ this.state.error.message }
              />
              <br />
              <a href="/register/forgot-password" className="center-block text-center">
                Forgot password?
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  _onChange() {
    this.setState(_getState());
  }

  static _onSubmit(event, _email, _password) {
    const email = _email && _email.trim() && _email.toLowerCase();
    const password = _password && _password.trim();

    authActionCreator.login(email, password);
  }

}
LoginApp.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

/*
 * A private method. It should only be used by `setState()` and `getInitialState()` to sync up
 * the data in the Flux store.
 */
function _getState() {
  return {
    isLoggedIn: authStore.isLoggedIn(),
    user: authStore.getUser(),
    error: authStore.getError('login'),
  };
}

export default LoginApp;
