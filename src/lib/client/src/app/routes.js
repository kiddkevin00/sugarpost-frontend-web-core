import RootApp from './RootApp';
import configureStore from '../common/store/';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';


// [TODO] Finds a more elegant way to resolve isomorphic issue.
if (global) {
  global.System = { import() {} };
}

const routes = (
  <div id="root">
    <Route path="/" component={ RootApp } />
  </div>
);

let store;
let clientRoutes; // eslint-disable-line import/no-mutable-exports

if (typeof window !== 'undefined') {
  store = configureStore();

  clientRoutes = (
    <Provider store={ store }>
      <BrowserRouter>
        { routes }
      </BrowserRouter>
    </Provider>
  );
}

export { routes };
export { clientRoutes };
