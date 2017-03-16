import authStore from '../../../../common/auth/stores/authStore';
import authActionCreator from '../../../../common/auth/actions/authActionCreator';
import LoginForm from './LoginForm';
import BaseComponent from '../../../../common/components/BaseComponent';
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
      nextContext.router.push(authStore.getTransitionPath() || '/account');
    }
  }

  componentWillUnmount() {
    authStore.removeChangeListener(this._onChange);
  }

  render() {
    return (
      <div>
        <div className="form-top">
          <div className="form-top-left">
            <h3>Log in</h3>
            <p>Fill in the form below to get started:</p>
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
    );
  }

  _onChange() {
    this.setState(_getState());
  }

  static _onSubmit(event, email, password) {
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
    error: authStore.getError('login'),
  };
}

export default LoginApp;