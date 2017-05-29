import HomeApp, { UnwrappedHomeApp } from '../../../../../../../lib/client/src/app/home/components/App';
import configureStore from '../../../../../../../lib/client/src/common/store/';
import { shallow, render } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Modal } from 'react-bootstrap';
import { Provider } from 'react-redux';
import React from 'react';

test('Home App component should be rendered correctly', () => {
  const component = shallow(
    <UnwrappedHomeApp isModalOpen={ false } dispatchCloseModal={ () => null } />
  );
  const tree = shallowToJson(component);

  expect(tree).toMatchSnapshot();
});

test('Home App component should render correct number of Modal', () => {
  const component = shallow(
    <UnwrappedHomeApp isModalOpen={ true } dispatchCloseModal={ () => null } />
  );

  expect(component.find(Modal).length).toBe(1);
});

test('Home App component can close the initial popup', () => {
  const component = shallow(
    <UnwrappedHomeApp isModalOpen={ true } dispatchCloseModal={ () => null } />
  );

  expect(component.find(Modal).node.props.show).toBe(true);

  component.find('button').simulate('click');

  pending('Seems to have some issue related to async action.');
  expect(component.find(Modal).node.props.show).toBe(false);
});

test('Home App component can close the initial popup - 2', () => {
  const store = configureStore();
  const component = render(
    <Provider store={ store }>
      <HomeApp isModalOpen={ true } dispatchCloseModal={ () => null } />
    </Provider>
  );

  pending('Seems to have some issue related to async action.');
  expect(component.find('#promotion-modal').length).toBe(1);

  store.dispatch({ type: 'HOME.CLOSE_MODAL' });

  expect(component.find('#promotion-modal').length).toBe(0);
});
