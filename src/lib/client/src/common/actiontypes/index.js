import homeActionTypes from '../../app/home/actionTypes';
import authActionTypes from '../auth/actionTypes';
import loginActionTypes from '../../app/register/login/actionTypes';
import forgotPasswordActionTypes from '../../app/register/forgot-password/actionTypes';
import accountProfileActionTypes from '../../app/account/actiontypes/profile';
import accountSubscriptionActionTypes from '../../app/account/actiontypes/subscription';

const allActionTypesPerSection = {
  HOME: homeActionTypes,
  AUTH: authActionTypes,
  LOGIN: loginActionTypes,
  FORGOT_PASSWORD: forgotPasswordActionTypes,
  ACCOUNT__PROFILE: accountProfileActionTypes,
  ACCOUNT__SUBSCRIPTION: accountSubscriptionActionTypes,
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
