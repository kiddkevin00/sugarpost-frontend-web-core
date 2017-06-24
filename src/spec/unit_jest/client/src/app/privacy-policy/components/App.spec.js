import PrivacyPolicyApp from '../../../../../../../lib/client/src/app/privacy-policy/components/App';
import renderer from 'react-test-renderer';
import React from 'react';


test('Privacy Policy App component snapshot test', function () {
  const component = renderer.create(<PrivacyPolicyApp />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
