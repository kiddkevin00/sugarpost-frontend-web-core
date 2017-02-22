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
      fullNameIsValid: false,
      emailIsValid: false,
      passwordIsValid: false,
      confirmPasswordIsValid: false,
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
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="header-placeholder-custom" />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="panel panel-default">
                <div className="panel-heading"><h4>Profile</h4></div>
                <div className="panel-body">
                  <div className="col-lg-offset-2 col-md-8 personal-info">
                    <div className="alert alert-info alert-dismissable">
                      <a className="panel-close close" data-dismiss="alert">×</a>
                      <i className="fa fa-coffee" />
                      This is an <strong>.alert</strong>. Use this to show important messages to the user.
                    </div>
                    <form className="form-horizontal" role="form">
                      <div className="form-group">
                        <label className="col-lg-3 control-label" htmlFor="form-email">Email :</label>
                        <div className="col-lg-8">
                          <FormInput
                            onChange={ this._onInputChange.bind(this, 'email') } /* eslint-disable-line react/jsx-no-bind */
                            value={ this.state.email }
                            type="email"
                            placeholder="Email address..."
                            className="form-control"
                            id="form-email"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-lg-3 control-label" htmlFor="form-full-name">Full Name :</label>
                        <div className="col-lg-8">
                          <FormInput
                            onChange={ this._onInputChange.bind(this, 'fullName') } /* eslint-disable-line react/jsx-no-bind */
                            value={ this.state.fullName }
                            type="text"
                            placeholder="Full name..."
                            className="form-control"
                            id="form-full-name"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-md-3 control-label" htmlFor="form-password">Password :</label>
                        <div className="col-md-8">
                          <FormInput
                            onChange={ this._onInputChange.bind(this, 'password') } /* eslint-disable-line react/jsx-no-bind */
                            value={ this.state.password }
                            type="password"
                            placeholder="New password..."
                            className="form-control"
                            id="form-password"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-md-3 control-label" htmlFor="form-confirm-password">Confirm password :</label>
                        <div className="col-md-8">
                          <FormInput
                            onChange={ this._onInputChange.bind(this, 'confirmPassword') } /* eslint-disable-line react/jsx-no-bind */
                            value={ this.state.confirmPassword }
                            type="password"
                            placeholder="Confirm password..."
                            className="form-control"
                            id="form-confirm-password"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-md-3 control-label"></label>
                        <div className="col-md-4">
                          <input type="button" className="btn btn-primary btn-block" value="Save Changes" />
                        </div>
                        <div className="col-md-4">
                          <input type="reset" className="btn btn-default btn-block" value="Cancel" />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <hr />
              <div className="panel panel-default">
                <div className="panel-heading"><h4>Subscription</h4></div>
                <div className="panel-body">
                  <small>Complete</small>
                  <div className="progress">
                    <div className="progress-bar progress-bar-success" role="progressbar"
                         aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"
                         style={ { width: '72%' } }
                    >
                      <span className="sr-only">72% Complete</span>
                    </div>
                  </div>
                  <small>In Progress</small>
                  <div className="progress">
                    <div className="progress-bar progress-bar-info" role="progressbar"
                         aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"
                         style={ { width: '20%' } }
                    >
                      <span className="sr-only">20% Complete</span>
                    </div>
                  </div>
                  <small>At Risk</small>
                  <div className="progress">
                    <div className="progress-bar progress-bar-danger" role="progressbar"
                         aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"
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

  _onInputChange(field, value, isValid) {
    this.setState({
      [field]: value,
      [`${field}IsValid`]: isValid,
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
