import home from '../../app/home/reducer';
import auth from '../auth/reducer';
import login from '../../app/register/login/reducer';
import forgotPassword from '../../app/register/forgot-password/reducer';
import account from '../../app/account/reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  home,
  auth,
  login,
  forgotPassword,
  account,
});

export default rootReducer;
