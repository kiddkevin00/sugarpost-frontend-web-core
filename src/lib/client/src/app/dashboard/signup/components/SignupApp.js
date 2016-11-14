import authStore from '../../../../common/stores/authStore';
import SignupForm from './SignupForm';
import BaseComponent from '../../../../common/components/BaseComponent';
import React from 'react';

class SignupApp extends BaseComponent {

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
      <div>
        <div className="row">
          <div className="col-lg-12">
            <div className="form-padding-top" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-offset-4 col-lg-4">
            <div className="panel panel-default">
              <div className="panel-heading text-center">
                <h4><span className="label label-primary">The English University</span></h4>
              </div>
              <div className="panel-body">
                <SignupForm onSubmit={ this._onSubmit } />
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
