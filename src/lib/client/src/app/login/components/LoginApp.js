import authStore from '../../../common/auth/stores/authStore';
import authActionCreator from '../../../common/auth/actions/authActionCreator';
import LoginForm from './LoginForm';
import BaseComponent from '../../../common/components/BaseComponent';
import { Element } from 'react-scroll';
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
      <div id="registration-template">

        <Element name="login">
          <div className="inner-bg">
            <div className="container">
              <div className="row">
                <div className="col-sm-7 text">
                  <h1>Welcome Back...</h1>
                  <div className="description">
                    <p>
                      For only $19.99 a month, you can get 4 of the city’s trendiest desserts
                      monthly, e-packages curated by the insight of the most influential food
                      bloggers and dessert connosieurs! Not only will these e-packages contain
                      your redemption codes for your desserts, but they will also provide a guide
                      to where these desserts are located and a little background on each dessert
                      vendor for your discovery experience.
                    </p>
                  </div>
                </div>
                <div className="col-lg-offset-1 col-lg-4 col-sm-5">
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
                    <LoginForm onSubmit={ LoginApp._onSubmit } />
                    <br />
                    <a href="/forgot-password" className="center-block text-center">
                      Forgot password?
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Element>

      </div>
    );
  }

  _onChange() {
    this.setState(_getState());
  }

  static _onSubmit(event, email, password) {
    // Prevents browser's default navigation (page refresh).
    event.preventDefault();

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
  };
}

export default LoginApp;
