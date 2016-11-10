import authStore from '../../../../common/stores/authStore';
import loginActionCreator from '../actions/loginActionCreator';
import LoginForm from './LoginForm';
import BaseComponent from '../../../../common/components/BaseComponent';
import React from 'react';

class LoginApp extends BaseComponent {

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

  render() {
    if (this.state.isLoggedIn) {
      // [TODO] Transit to home page via React Router.

    }
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <div style={ { paddingTop: '5%' } } />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-offset-4 col-lg-4">
            <div className="panel panel-default">
              <div className="panel-heading text-center">
                <h4><span className="label label-primary">The English University</span></h4>
              </div>
              <div className="panel-body">
                <LoginForm onSubmit={ this._onSubmit } />
                <div className="panel-footer text-center">
                  <p className="text-muted">
                    <a href="mailto:inquiries@TheEnglishUniversity.com">Development Support</a>
                  </p>
                  <p>v0.0.0</p>
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

  _onSubmit(event, email, password) {
    // Prevents browser's default navigation (page refresh).
    event.preventDefault();

    loginActionCreator.login(email, password);

    // [TODO] Use React Router to navigate to home dashboard.

  }

}

/*
 * A private method. It should only be used by `setState()` and `getInitialState()` to sync up
 * the data in the Flux store.
 */
function _getState() {
  return {
    isLoggedIn: authStore.isLoggedIn,
  };
}

export default LoginApp;
