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
      <div>
        <div className="form-top">
          <div className="form-top-left">
            <h3>Sign up now</h3>
            <p>Fill in the form below to get started:</p>
          </div>
          <div className="form-top-right">
            <i className="fa fa-pencil" />
          </div>
          <div className="form-top-divider" />
        </div>
        <div className="form-bottom">
          <SignupForm />
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
