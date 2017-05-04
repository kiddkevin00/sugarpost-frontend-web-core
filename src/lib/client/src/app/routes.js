import configureStore from '../common/store/';
import AsyncRoute from '../common/components/AsyncRoute';
import RootApp from './RootApp';
import RegisterApp from './register/';
import LoginApp from './register/login/components/App';
import SignupApp from './register/signup/components/App';
import PaymentApp from './register/payment/components/App';
import ForgotPasswordApp from './register/forgot-password/components/App';
import ReferralApp from './register/referral/components/App';
import PrivacyPolicyApp from './privacy-policy/components/App';
import TermsOfUse from './terms-of-use/components/App';
import AccountApp from './account/components/App';
import VoucherApp from './voucher/components/VoucherApp';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import React from 'react';

// [TODO] Finds a more elegant way to resolve isomorphic issue.
if (global) {
  global.System = { import() {} };
}

const routes = (
  <Route path="/" component={ RootApp }>
    <IndexRoute component={ (props) => <AsyncRoute props={ props } loadingPromise={ System.import('./home/components/App.js') } /> } />
    <Route path="home" component={ (props) => <AsyncRoute props={ props } loadingPromise={ System.import('./home/components/App.js') } /> } />
    <Route path="register" component={ RegisterApp }>
      <Route path="login" component={ LoginApp } />
      <Route path="signup" component={ SignupApp } />
      <Route path="payment" component={ PaymentApp } />
      <Route path="forgot-password" component={ ForgotPasswordApp } />
      <Route path="referral" component={ ReferralApp } />
    </Route>
    <Route path="privacy-policy" component={ PrivacyPolicyApp } />
    <Route path="terms-of-use" component={ TermsOfUse } />
    <Route path="account" component={ AccountApp } />
    <Route path="vouchers" component={ VoucherApp } />
  </Route>
);
let store;
let history;
let clientRoutes;

if (typeof window !== 'undefined') {
  store = configureStore(browserHistory);
  history = syncHistoryWithStore(browserHistory, store);

  clientRoutes = (
    <Provider store={ store }>
      <Router history={ history }>
        { routes }
      </Router>
    </Provider>
  );
}

export { routes };
export { clientRoutes };
