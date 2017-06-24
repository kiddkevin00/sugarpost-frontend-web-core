import TermsOfUseApp from '../../../../../../../lib/client/src/app/terms-of-use/components/App';
import renderer from 'react-test-renderer';
import React from 'react';


test('Terms Of Use App component snapshot test', function () {
  const component = renderer.create(<TermsOfUseApp />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
