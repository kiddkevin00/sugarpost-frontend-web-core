import configureStore from '../common/store/';
import AsyncRoute from '../common/components/AsyncRoute';
import RootApp from './RootApp';
import HomeApp from './home/components/App';
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
    <IndexRoute component={ HomeApp } />
    <Route path="home" component={ HomeApp } />
    <Route path="register" component={ (props) => <AsyncRoute props={ props } loadingPromise={ System.import('./register/') } /> }>
      <Route path="login" component={ (props) => <AsyncRoute props={ props } loadingPromise={ System.import('./register/login/components/App') } /> } />
      <Route path="signup" component={ (props) => <AsyncRoute props={ props } loadingPromise={ System.import('./register/signup/components/App') } /> } />
      <Route path="payment" component={ (props) => <AsyncRoute props={ props } loadingPromise={ System.import('./register/payment/components/App') } /> } />
      <Route path="forgot-password" component={ (props) => <AsyncRoute props={ props } loadingPromise={ System.import('./register/forgot-password/components/App') } /> } />
      <Route path="referral" component={ (props) => <AsyncRoute props={ props } loadingPromise={ System.import('./register/referral/components/App') } /> } />
    </Route>
    <Route path="privacy-policy" component={ (props) => <AsyncRoute props={ props } loadingPromise={ System.import('./privacy-policy/components/App') } /> } />
    <Route path="terms-of-use" component={ (props) => <AsyncRoute props={ props } loadingPromise={ System.import('./terms-of-use/components/App') } /> } />
    <Route path="account" component={ (props) => <AsyncRoute props={ props } loadingPromise={ System.import('./account/components/App') } /> } />
    <Route path="vouchers" component={ (props) => <AsyncRoute props={ props } loadingPromise={ System.import('./voucher/components/VoucherApp') } /> } />
  </Route>
);
let store;
let history;
let clientRoutes; // eslint-disable-line import/no-mutable-exports

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
