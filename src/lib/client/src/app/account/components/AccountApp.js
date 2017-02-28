import authStore from '../../../common/auth/stores/authStore';
import authActionCreator from '../../../common/auth/actions/authActionCreator';
import FormInput from '../../../common/components/FormInput';
import BaseComponent from '../../../common/components/BaseComponent';
import React from 'react';

class AccountApp extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onStoreChange', '_onInputChange');
    this.state = {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  componentDidMount() {
    authStore.addChangeListener(this._onStoreChange);

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
    authStore.removeChangeListener(this._onStoreChange);
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
                <div className="panel-heading"><h4>Profile</h4></div>
                <div className="panel-body">
                  <div className="col-lg-offset-1 col-lg-10 col-lg-xs-12 personal-info">
                    <div className="alert alert-info alert-dismissable">
                      <a className="panel-close close" data-dismiss="alert">×</a>
                      <i className="fa fa-coffee" />
                      This is an <strong>.alert</strong>. Use this to show important messages to
                      the user.
                    </div>
                    <form className="form-horizontal" role="form">
                      <FormInput
                        text="Email Address"
                        ref={ (formInputObj) => { this.email = formInputObj; } }
                        validate={ FormInput.validateEmailField }
                        value={ this.state.email }
                        onChange={ this._onInputChange.bind(this, 'email') } /* eslint-disable-line react/jsx-no-bind */
                        emptyMessage="Empty"
                        errorMessage="Invalid"
                      />
                      <FormInput
                        text="Full Name"
                        ref={ (formInputObj) => { this.fullName = formInputObj; } }
                        value={ this.state.fullName }
                        onChange={ this._onInputChange.bind(this, 'fullName') } /* eslint-disable-line react/jsx-no-bind */
                        emptyMessage="Empty"
                      />
                      <FormInput
                        text="Password"
                        ref={ (formInputObj) => { this.password = formInputObj; } }
                        value={ this.state.password }
                        onChange={ this._onInputChange.bind(this, 'password') } /* eslint-disable-line react/jsx-no-bind */
                        emptyMessage="Empty"
                        errorMessage="Invalid"
                      />
                      <FormInput
                        text="Confirm Password"
                        ref={ (formInputObj) => { this.confirmPassword = formInputObj; } }
                        value={ this.state.confirmPassword }
                        onChange={ this._onInputChange.bind(this, 'confirmPassword') } /* eslint-disable-line react/jsx-no-bind */
                        emptyMessage="Empty"
                        errorMessage="Unmatched"
                      />
                      <div className="form-group">
                        <div className="col-sm-6">
                          <input
                            type="button"
                            className="btn btn-primary btn-block"
                            value="Save Changes"
                          />
                        </div>
                        <div className="col-sm-6">
                          <input
                            type="reset"
                            className="btn btn-default btn-block"
                            value="Cancel"
                          />
                        </div>
                      </div>
                    </form>
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

  _onInputChange(field, value) {
    this.setState({
      [field]: value,
    });
  }

  _onStoreChange() {
    this.setState(_getState());
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
  };
}

export default AccountApp;
