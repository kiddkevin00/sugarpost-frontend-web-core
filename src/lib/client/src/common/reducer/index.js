import home from '../../app/home/reducers/app';
import auth from '../auth/reducer/';
import login from '../../app/register/login/reducers/loginForm';
import signup from '../../app/register/signup/reducers/signupForm';
import forgotPassword from '../../app/register/forgot-password/reducers/forgotPasswordForm';
import accountProfile from '../../app/account/reducers/profileForm';
import accountSubscription from '../../app/account/reducers/subscriptionSection';
import payment from '../../app/register/payment/reducers/paymentForm';
import referral from '../../app/register/referral/reducers/referralForm';
import referralShare from '../../app/register/referral/reducers/shareSection';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  home,
  auth,
  signup,
  login,
  forgotPassword,
  accountProfile,
  accountSubscription,
  payment,
  referral,
  referralShare,
  routing: routerReducer
});

export default rootReducer;
