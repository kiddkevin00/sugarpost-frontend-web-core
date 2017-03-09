import authStore from '../../../../common/auth/stores/authStore';
import forgotPasswordActionCreator from '../actions/forgotPasswordActionCreator';
import ForgotPasswordForm from './ForgotPasswordForm';
import BaseComponent from '../../../../common/components/BaseComponent';
import React from 'react';

class ForgotPasswordApp extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onChange');
    this.state = _getState();
  }

  componentDidMount() {
    authStore.addChangeListener(this._onChange);

    //if (this.state.isLoggedIn) {
    //  this.context.router.push('/account');
    //}
  }

  componentWillUpdate(nextProps, nextState) {}

  componentWillUnmount() {
    authStore.removeChangeListener(this._onChange);
  }

  render() {
    return (
      <div id="eee">
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
