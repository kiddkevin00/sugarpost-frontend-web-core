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
      <div className="inner-bg">
        <div className="container">
          <div className="row">
            <div className="col-sm-7 text">
              <h1><strong>Bootstrap</strong> Flat Registration Form</h1>
              <div className="description">
                <p> This is a free responsive flat registration form made with Bootstrap.
                    Download it on
                    <a href="http://azmind.com"><strong>AZMIND</strong></a>,
                    customize and use it as you like!
                </p>
              </div>
              <div className="top-big-link">
                 <a className="btn btn-link-1" href="#">Button 1</a>
                 <a className="btn btn-link-2" href="#">Button 2</a>
              </div>
            </div>
            <div className="col-sm-5 form-box">
              <div className="form-top">
                <div className="form-top-left">
                  <h3>Sign up now</h3>
                  <p>Fill in the form below to get instant access:</p>
                </div>
                <div className="form-top-right">
                  <i className="fa fa-pencil" />
                </div>
                <div className="form-top-divider" />
              </div>
              <div className="form-bottom">
                <form role="form" className="registration-form">
                  <div className="form-group">
                    <label className="sr-only" htmlFor="form-first-name">First name</label>
                    <input
                      className="form-first-name form-control"
                      name="form-first-name"
                      type='text'
                      placeholder='First name...'
                      id="form-first-name" />
                  </div>
                  <div className="form-group">
                    <label className="sr-only" htmlFor="form-last-name">Last name</label>
                    <input
                      type="text"
                      name="form-last-name"
                      placeholder="Last name..."
                      className="form-last-name form-control"
                      id="form-last-name" />
                  </div>
                  <div className="form-group">
			              <label className="sr-only" htmlFor="form-email">Email</label>
                    <input
                      type="text"
                      name="form-email"
                      placeholder="Email..."
                      className="form-email form-control"
                      id="form-email" />
                  </div>
                  <div className="form-group">
                    <label className="sr-only" htmlFor="form-about-yourself">About yourself</label>
                    <textarea
                      name="form-about-yourself"
                      placeholder="About yourself..."
                      className="form-about-yourself form-control"
                      id="form-about-yourself">
                    </textarea>
                  </div>
                  <button type="submit" className="btn">Sign me up!</button>
                </form>
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
