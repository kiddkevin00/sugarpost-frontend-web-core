import home from '../../app/home/reducer';
import auth from '../auth/reducer';
import login from '../../app/register/login/reducer';
import forgotPassword from '../../app/register/forgot-password/reducer';
import accountProfile from '../../app/account/reducers/profileForm';
import accountSubscription from '../../app/account/reducers/subscriptionSection';
import payment from '../../app/register/payment/reducers/paymentForm';
import referral from '../../app/register/referral/reducers/referralForm';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  home,
  auth,
  login,
  forgotPassword,
  accountProfile,
  accountSubscription,
  payment,
  referral,
});

export default rootReducer;
