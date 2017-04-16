import home from '../../app/home/reducer/';
import forgotPassword from '../../app/register/forgot-password/reducer/';
import login from '../../app/register/login/reducer/';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  home,
  forgotPassword,
  login,
});

export default rootReducer;
