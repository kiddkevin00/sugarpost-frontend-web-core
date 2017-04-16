import homeActionTypes from '../../app/home/actions/actionTypes';
import forgotPasswordActionTypes from '../../app/register/forgot-password/actions/actionTypes';
import loginActionTypes from '../../app/register/login/actions/actionTypes';

const allActionTypesPerSection = {
  HOME: homeActionTypes,
  FORGOT_PASSWORD: forgotPasswordActionTypes,
  LOGIN: loginActionTypes,
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
