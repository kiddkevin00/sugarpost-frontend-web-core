import authActionCreator from '../common/auth/actions/authActionCreator';
import RootApp from './RootApp';
import HomeApp from './home/components/HomeApp';
import RegisterApp from './register/';
import LoginApp from './register/login/components/LoginApp';
import SignupApp from './register/signup/components/SignupApp';
import PaymentApp from './register/payment/components/PaymentApp';
import ForgotPasswordApp from './register/forgot-password/components/ForgotPasswordApp';
import ReferralApp from './register/referral/components/ReferralApp';
import PrivacyPolicyApp from './privacy-policy/components/PrivacyPolicyApp';
import TermsOfUse from './terms-of-use/components/TermsOfUseApp';
import AccountApp from './account/components/AccountApp';
import VoucherApp from './voucher/components/VoucherApp';
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const clientRoutes = (
  <Router history={ browserHistory }>
    <Route path="/" component={ RootApp }>
      <IndexRoute component={ HomeApp } />
      <Route path="home" component={ HomeApp } />
      <Route path="register" component={ RegisterApp }>
        <Route path="login" component={ LoginApp } />
        <Route path="signup" component={ SignupApp } onEnter={ storeParamMap } />
        <Route path="payment" component={ PaymentApp } onEnter={ inTransition } />
        <Route path="forgot-password" component={ ForgotPasswordApp } />
        <Route path="referral" component={ ReferralApp } onEnter={ inTransition } />
      </Route>
      <Route path="privacy-policy" component={ PrivacyPolicyApp } />
      <Route path="terms-of-use" component={ TermsOfUse } />
      <Route path="account" component={ AccountApp } onEnter={ inTransition } />
      <Route path="vouchers" component={ VoucherApp } onEnter={ inTransition } />
    </Route>
  </Router>
);

function storeParamMap(nextState) {
  if (Object.keys(nextState.location.query).length) {
    authActionCreator.storeParamMap(nextState.location.query);
  }
}
function inTransition(nextState, replace) {
  authActionCreator.inTransition(nextState, replace);
}

export default clientRoutes;
