import homeActionTypes from '../../app/home/actionTypes';
import authActionTypes from '../auth/actionTypes';
import loginActionTypes from '../../app/register/login/actionTypes';
import signupActionTypes from '../../app/register/signup/actiontypes';
import forgotPasswordActionTypes from '../../app/register/forgot-password/actionTypes';
import accountProfileActionTypes from '../../app/account/actiontypes/profileForm';
import accountSubscriptionActionTypes from '../../app/account/actiontypes/subscriptionSection';
import paymentActionTypes from '../../app/register/payment/actiontypes/paymentForm';
import referralActionTypes from '../../app/register/referral/actiontypes/referralForm';
import referralShareActionTypes from '../../app/register/referral/actiontypes/shareSection';

const allActionTypesPerSection = {
  HOME: homeActionTypes,
  AUTH: authActionTypes,
  LOGIN: loginActionTypes,
  SIGNUP: signupActionTypes,
  FORGOT_PASSWORD: forgotPasswordActionTypes,
  ACCOUNT__PROFILE: accountProfileActionTypes,
  ACCOUNT__SUBSCRIPTION: accountSubscriptionActionTypes,
  PAYMENT: paymentActionTypes,
  REFERRAL: referralActionTypes,
  REFERRAL__SHARE: referralShareActionTypes,
};

namespaceActionTypesPerSection(allActionTypesPerSection);

function namespaceActionTypesPerSection(actionTypesPerSection) {
  for (const section in actionTypesPerSection) {
    const actionTypes = actionTypesPerSection[section];

    for (const type in actionTypes) {
      actionTypes[type] = `${section}.${actionTypes[type]}`;
    }
  }
}

export default allActionTypesPerSection;
