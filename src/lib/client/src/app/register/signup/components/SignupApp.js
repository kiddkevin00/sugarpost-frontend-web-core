import authStore from '../../../../common/auth/stores/authStore';
import authActionCreator from '../../../../common/auth/actions/authActionCreator';
import SignupForm from './SignupForm';
import BaseComponent from '../../../../common/components/BaseComponent';
import React from 'react';

class SignupApp extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onChange', '_onSubmit');
    this.state = _getState();
  }

  componentDidMount() {
    authStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    authStore.removeChangeListener(this._onChange);
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    if (nextState.isLoggedIn) {
      nextContext.router.push({
        pathname: '/register/payment',
        query: { email: this.email },
      });
    }
  }

  render() {
    let loader;

    if (this.state.isLoading) {
      loader = (
        <div className="slow-loader" />
      );
    } else {
      loader = null;
    }

    return (
      <div className="container">
        { loader }
        <div className="row">
          <div className="col-sm-7 text">
            <h1>Adventure Awaits You</h1>
            <div className="description">
              <p>
                For only $24.99 a month, you will receive e-packages curated by the insight of
                influential food bloggers and dessert connoisseurs! Within your e-package, you
                will find a little background on each featured dessert vendor and your vouchers
                which can claim in-store desserts or Sugarpost exclusives.
              </p>
            </div>
            <div className="top-big-link">
              <ol>
                <li>Sign up to the right and become a paid subscriber.</li>
                <li>Receive four vouchers during the first day of every month.</li>
                <li>Visit the dessert shops.</li>
                <li>Redeem desserts and enjoy!</li>
              </ol>
            </div>
          </div>
          <div className="col-lg-offset-1 col-lg-4 col-sm-5">
            <div className="form-top">
              <div className="form-top-left">
                <h3>Sign up now</h3>
                <p>Fill in the form below to get started:</p>
              </div>
              <div className="form-top-right">
                <img src="/assets/images/sugarpost-logo.png" alt="" />
              </div>
            </div>
            <div className="form-bottom">
              <SignupForm
                onSubmit={ this._onSubmit }
                isErrorVisible={ this.state.error.isVisible }
                errorMsg={ this.state.error.message }
              />
              <div className="row">
                <div className="col-xs-offset-1 col-xs-10">
                  <br />
                  <p className="text-center">
                    By signing up, you agree to our
                    <a href="/terms-of-use">&nbsp;Terms&nbsp;</a>
                    &
                    <a href="/privacy-policy">&nbsp;Privacy Policy&nbsp;</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  _onChange() {
    this.setState(_getState());
  }

  _onSubmit(event, email, _password, _fullName) {
    const password = _password && _password.trim();
    const fullName = _fullName && _fullName.trim();
    let win;

    this.email = email && email.trim() && email.toLowerCase();

    if (
      /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
      navigator.vendor ==  'Apple Computer, Inc.' ||
      Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0
    ) {
      win = window.open();
    }

    authActionCreator.signup(this.email, password, fullName, win);
  }

}
SignupApp.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

/*
 * A private method. It should only be used by `setState()` and `getInitialState()` to sync up
 * the data in the Flux's store.
 */
function _getState() {
  return {
    isLoggedIn: authStore.isLoggedIn(),
    error: authStore.getError('signup'),
    isLoading: authStore.isLoading(),
  };
}

export default SignupApp;
