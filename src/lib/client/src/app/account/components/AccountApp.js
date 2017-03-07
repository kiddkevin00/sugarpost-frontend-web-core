import authStore from '../../../common/auth/stores/authStore';
import authActionCreator from '../../../common/auth/actions/authActionCreator';
import AccountForm from './AccountForm';
import BaseComponent from '../../../common/components/BaseComponent';
import React from 'react';

class AccountApp extends BaseComponent {

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
      nextContext.router.push('/login');
    }
  }

  componentWillUnmount() {
    authStore.removeChangeListener(this._onChange);
  }

  render() {
    return (
      <div id="account-app">
        <div className="container">
          <div className="row">
            <div className="col-xs-6">
              <div className="header-placeholder-custom" />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-6">
              <div className="panel panel-default">
                <div className="panel-heading"><h4>Subscription</h4></div>
                <div className="panel-body">
                  <small>Complete</small>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-success"
                      role="progressbar"
                      aria-valuenow="72"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={ { width: '72%' } }
                    >
                      <span className="sr-only">72% Complete</span>
                    </div>
                  </div>
                  <small>In Progress</small>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-info"
                      role="progressbar"
                      aria-valuenow="20"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={ { width: '20%' } }
                    >
                      <span className="sr-only">20% Complete</span>
                    </div>
                  </div>
                  <small>At Risk</small>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-danger"
                      role="progressbar"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={ { width: '80%' } }
                    >
                      <span className="sr-only">80% Complete</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="panel panel-default">
                <div className="panel-heading"><h4>Placeholder 2</h4></div>
                <div className="panel-body">
                  <small>Complete</small>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-success"
                      role="progressbar"
                      aria-valuenow="72"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={ { width: '72%' } }
                    >
                      <span className="sr-only">72% Complete</span>
                    </div>
                  </div>
                  <small>In Progress</small>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-info"
                      role="progressbar"
                      aria-valuenow="20"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={ { width: '20%' } }
                    >
                      <span className="sr-only">20% Complete</span>
                    </div>
                  </div>
                  <small>At Risk</small>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-danger"
                      role="progressbar"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={ { width: '80%' } }
                    >
                      <span className="sr-only">80% Complete</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="panel panel-default">
                <div className="panel-heading"><h4>Placeholder 1</h4></div>
                <div className="panel-body">
                  <small>Complete</small>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-success"
                      role="progressbar"
                      aria-valuenow="72"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={ { width: '72%' } }
                    >
                      <span className="sr-only">72% Complete</span>
                    </div>
                  </div>
                  <small>In Progress</small>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-info"
                      role="progressbar"
                      aria-valuenow="20"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={ { width: '20%' } }
                    >
                      <span className="sr-only">20% Complete</span>
                    </div>
                  </div>
                  <small>At Risk</small>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-danger"
                      role="progressbar"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={ { width: '80%' } }
                    >
                      <span className="sr-only">80% Complete</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-6">
              <div className="panel panel-default">
                <div className="panel-heading"><h4>Profile</h4></div>
                <div className="panel-body">
                  <div className="col-lg-offset-1 col-lg-10 col-lg-xs-12">
                    <AccountForm
                      onSubmit={ AccountApp._onSubmit }
                      fullName={ this.state.user.fullName }
                      email={ this.state.user.email }
                      isErrorVisible={ this.state.error.isVisible }
                      errorMsg={ this.state.error.message }
                    />
                  </div>
                </div>
              </div>

              <div className="panel panel-default">
                <div className="panel-heading"><h4>Placeholder 3</h4></div>
                <div className="panel-body">
                  <small>Complete</small>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-success"
                      role="progressbar"
                      aria-valuenow="72"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={ { width: '72%' } }
                    >
                      <span className="sr-only">72% Complete</span>
                    </div>
                  </div>
                  <small>In Progress</small>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-info"
                      role="progressbar"
                      aria-valuenow="20"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={ { width: '20%' } }
                    >
                      <span className="sr-only">20% Complete</span>
                    </div>
                  </div>
                  <small>At Risk</small>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-danger"
                      role="progressbar"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={ { width: '80%' } }
                    >
                      <span className="sr-only">80% Complete</span>
                    </div>
                  </div>
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

  static _onSubmit(event, _email, _password, _fullName) {
    const email = _email && _email.trim();
    const password = _password && _password.trim();
    const fullName = _fullName && _fullName.trim();

    // TODO
  }

}
AccountApp.contextTypes = {
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
    error: authStore.getError('account'),
  };
}

export default AccountApp;
