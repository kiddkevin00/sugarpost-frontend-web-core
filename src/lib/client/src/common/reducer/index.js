import home from '../../app/home/reducer';
import auth from '../auth/reducer';
import login from '../../app/register/login/reducer';
import forgotPassword from '../../app/register/forgot-password/reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  home,
  auth,
  login,
  forgotPassword,
});

export default rootReducer;
