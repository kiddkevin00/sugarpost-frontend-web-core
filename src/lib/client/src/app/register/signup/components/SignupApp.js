import authStore from '../../../../common/auth/stores/authStore';
import authActionCreator from '../../../../common/auth/actions/authActionCreator';
import SignupForm from './SignupForm';
import BaseComponent from '../../../../common/components/BaseComponent';
import React from 'react';

class SignupApp extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onChange', '_onSubmit');
    this.state = _getState();
  }

  componentDidMount() {
    if (this.state.isLoggedIn) {
      this.context.router.push('/profile');
    }

    authStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    authStore.removeChangeListener(this._onChange);
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    if (nextState.isLoggedIn && this.context.router.isActive('/register/signup')) {
      this.context.router.push('/register/payment');
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="signup-form-padding-top" />
          </div>
        </div>
        <div className="row">
          <div
            className="col-xs-offset-0 col-sm-offset-1 col-md-offset-3 col-lg-offset-4
              col-xs-12 col-sm-10 col-md-6 col-lg-4"
          >
            <div className="panel panel-default">
              <div className="panel-heading text-center">
                <h4><span className="label label-primary">My Supgarpost</span></h4>
              </div>
              <div className="panel-body">
                <SignupForm onSubmit={ this._onSubmit } />
                <div className="panel-footer text-center">
                  <p className="text-muted">
                    <a href="mailto:administrator@mysugarpost.com">Development Support</a>
                  </p>
                  <p>v1.12.1</p>
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

  _onSubmit(event, email, password, firstName, lastName, token) {
    // Prevents browser's default navigation (page refresh).
    //event.preventDefault();

    authActionCreator.signup(email, password, firstName, lastName, token);
  }

}
SignupApp.contextTypes = {
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

export default SignupApp;
