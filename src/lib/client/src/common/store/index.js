import rootReducer from '../reducer/';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';


function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(thunkMiddleware),
    applyMiddleware(logger),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ?
      window.devToolsExtension() : (f) => f,
  ));

  return store;
}

export default configureStore;
