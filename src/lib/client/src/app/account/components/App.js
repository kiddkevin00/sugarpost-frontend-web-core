import authActionCreator from '../../../common/auth/actionCreator';
import SubscriptionSection from './SubscriptionSection';
import ProfileForm from './ProfileForm';
import BaseComponent from '../../../common/components/BaseComponent';
import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';

class AccountApp extends BaseComponent {

  componentDidMount() {
    if (!this.props.isLoggedIn) {
      this.props.dispatchAuthCheck();
    }
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    if (!nextProps.isLoggedIn) {
      nextContext.router.push('/register/login');
    }
  }

  render() {
    return (
      <div id="account-app">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="header-placeholder-custom" />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-5">
              <div className="panel panel-default">
                <div className="panel-heading"><h4>Subscription</h4></div>
                <div className="panel-body">
                  <div className="col-lg-xs-12">
                    <SubscriptionSection />
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-7">
              <div className="panel panel-default">
                <div className="panel-heading"><h4>Profile</h4></div>
                <div className="panel-body">
                  <div className="col-lg-offset-1 col-lg-10 col-lg-xs-12">
                    <ProfileForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
AccountApp.propTypes = {
  dispatchAuthCheck: PropTypes.func.isRequired,

  isLoggedIn: PropTypes.bool.isRequired,
  forceUpdate: PropTypes.bool.isRequired,
};
AccountApp.contextTypes = {
  router: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    forceUpdate: state.auth.forceUpdate,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatchAuthCheck() {
      dispatch(authActionCreator.authCheck());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountApp);
