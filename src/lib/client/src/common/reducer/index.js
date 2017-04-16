import home from '../../app/home/reducer';
import forgotPassword from '../../app/register/forgot-password/reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  home,
  forgotPassword,
});

export default rootReducer;
