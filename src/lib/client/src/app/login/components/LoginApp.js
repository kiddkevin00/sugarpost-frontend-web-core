import authStore from '../../../common/auth/stores/authStore';
import authActionCreator from '../../../common/auth/actions/authActionCreator';
import LoginForm from './LoginForm';
import BaseComponent from '../../../common/components/BaseComponent';
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

  componentWillUnmount() {
    authStore.removeChangeListener(this._onChange);
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.isLoggedIn) {
      this.context.router.push('/home');
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="login-form-padding-top" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-offset-4 col-lg-4">
            <div className="panel panel-default">
              <div className="panel-heading text-center">
                <h4><span className="label label-primary">My Supgarpost</span></h4>
              </div>
              <div className="panel-body">
                <LoginForm onSubmit={ LoginApp._onSubmit } />
                <div className="panel-footer text-center">
                  <p className="text-muted">
                    <a href="mailto:info@mysugarpost.com">Development Support</a>
                  </p>
                  <p>v1.10.0</p>
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
