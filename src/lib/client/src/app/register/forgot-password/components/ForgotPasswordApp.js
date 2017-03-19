import authStore from '../../../../common/auth/stores/authStore';
import authActionCreator from '../../../../common/auth/actions/authActionCreator';
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
  }

  componentWillUnmount() {
    authStore.removeChangeListener(this._onChange);
  }

  render() {
    return (
      <div>
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
          <ForgotPasswordForm
            onSubmit={ ForgotPasswordApp._onSubmit }
            isInfoVisible={ this.state.info.isVisible }
            infoMsg={ this.state.info.message }
          />
        </div>
      </div>
    );
  }

  _onChange() {
    this.setState(_getState());
  }

  static _onSubmit(event, email) {
    authActionCreator.forgotPassword(email);
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
    info: authStore.getInfo('forgotPassword'),
  };
}

export default ForgotPasswordApp;
