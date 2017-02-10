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
      this.context.router.push({
        pathname: '/register/payment',
        query: { email: this.email },
      });
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="form-padding-top-custom" />
          </div>
        </div>
        <div className="row">
          <div
            className="col-xs-12 col-sm-12 col-md-12 col-lg-12"
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

  _onSubmit(event, email, password, firstName, lastName) {
    this.email = email;

    authActionCreator.signup(this.email, password, firstName, lastName);
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