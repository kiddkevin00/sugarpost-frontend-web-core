import authActionCreator from '../../../common/auth/actioncreator/';
import SubscriptionSection from './SubscriptionSection';
import ProfileForm from './ProfileForm';
import BaseComponent from '../../../common/components/BaseComponent';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';

class AccountApp extends BaseComponent {

  componentDidMount() {
    if (!this.props.isLoggedIn) {
      this.props.dispatchAuthCheck(this.props.urlPath);
    }
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    if (!nextProps.isLoggedIn) {
      nextProps.dispatchPushRoute('/register/login');
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
  dispatchPushRoute: PropTypes.func.isRequired,

  isLoggedIn: PropTypes.bool.isRequired,
  forceUpdate: PropTypes.bool.isRequired,
  urlPath: PropTypes.string.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    forceUpdate: state.auth.forceUpdate,
    urlPath: ownProps.location.pathname,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatchAuthCheck(transitionPath) {
      dispatch(authActionCreator.authCheck(transitionPath));
    },

    dispatchPushRoute(route) {
      dispatch(push(route));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountApp);
