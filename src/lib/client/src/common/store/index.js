import rootReducer from '../reducer/';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);
  
  return store;
}

export default configureStore;
