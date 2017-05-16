import { UnwrappedHomeApp } from '../../../../../../../lib/client/src/app/home/components/App';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

test('Home App component snapshot test', () => {
  const component = shallow(
    <UnwrappedHomeApp isModalOpen={ false } dispatchCloseModal={ () => null } />
  );
  const tree = shallowToJson(component);

  expect(tree).toMatchSnapshot();
});
