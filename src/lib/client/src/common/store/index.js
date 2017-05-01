import rootReducer from '../reducer/';
import thunkMiddleware from 'redux-thunk';
//import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux';

function configureStore(history, initialState) {
  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(routerMiddleware(history)),
    applyMiddleware(thunkMiddleware),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ?
      window.devToolsExtension() : (f) => f
  ));

  return store;
}

export default configureStore;
