import forgotPasswordActionTypes from '../../app/register/forgot-password/action/actionTypes';

const actionTypesPerSection = {
  FORGOT_PASSWORD: forgotPasswordActionTypes,

};

for (const section in actionTypesPerSection) {
  const actionTypes = actionTypesPerSection[section];

  for (const type in actionTypes) {
    actionTypes[type] = `${section}.${actionTypes[type]}`;
  }
}

export default actionTypesPerSection;
