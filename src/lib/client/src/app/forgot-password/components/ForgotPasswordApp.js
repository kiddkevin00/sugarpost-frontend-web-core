import authStore from '../../../common/auth/stores/authStore';
import forgotPasswordActionCreator from '../actions/forgotPasswordActionCreator';
import ForgotPasswordForm from './ForgotPasswordForm';
import BaseComponent from '../../../common/components/BaseComponent';
import { Element } from 'react-scroll';
import React from 'react';

class ForgotPasswordApp extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onChange');
    this.state = _getState();
  }

  componentDidMount() {
    if (this.state.isLoggedIn) {
      this.context.router.push('/account');
    }

    authStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    authStore.removeChangeListener(this._onChange);
  }

  componentWillUpdate(nextProps, nextState) {}

  render() {
    return (
      <div id="registration-template">

        <Element name="forgot-password">
          <div className="inner-bg">
            <div className="container">
              <div className="row">
                <div className="col-sm-7 text">
                  <h1><strong>Bootstrap</strong> Registration Form</h1>
                  <div className="description">
                    <p>
                      This is a free responsive registration form made with Bootstrap.
                      Download it on <a href="http://azmind.com"><strong>AZMIND</strong></a>,
                      customize and use it as you like!
                    </p>
                  </div>
                  <div className="top-big-link">
                    <a className="btn btn-link-1" href="/register/signup">Button 1</a>
                    <a className="btn btn-link-2" href="/register/signup">Button 2</a>
                  </div>
                </div>
                <div className="col-sm-5">
                  <div className="form-top">
                    <div className="form-top-left">
                      <h3>Forgot password</h3>
                      <p>Fill in the form below to get started:</p>
                    </div>
                    <div className="form-top-right">
                      <img src="/assets/images/sugarpost-logo.png" alt="" />
                    </div>
                  </div>
                  <div className="form-bottom">
                    <ForgotPasswordForm onSubmit={ ForgotPasswordApp._onSubmit } />
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

  static _onSubmit(event, email) {
    // Prevents browser's default navigation (page refresh).
    event.preventDefault();

    forgotPasswordActionCreator.forgotPassword(email);
  }

}
ForgotPasswordApp.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

/*
 * A private method. It should only be used by `setState()` and `getInitialState()` to sync up
 * the data in the Flux store.
 */
function _getState() {
  return {
    //isLoggedIn: authStore.isLoggedIn(),
  };
}

export default ForgotPasswordApp;
