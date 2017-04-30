import HomeApp from '../../../../../../../lib/client/src/app/home/components/App';
import { shallow, mount } from 'enzyme';
import React from 'react';

describe('Home App component', () => {
  let props;
  let component;
  let wrapper;

  beforeEach(() => {
    props = {};
    component = new HomeApp(props);
  });

  afterEach(() => {
    if (wrapper) {
      wrapper.unmount();
      wrapper = null;
    }
  });

  it('is defined', function () {
    expect(HomeApp).not.to.be.an('undefined');
  });

  it('can be initiated', () => {
    expect(component).not.to.be.an('undefined');
  });

  it('can mount into DOM succesfully', () => {
    spy(HomeApp.prototype, 'componentDidMount');

    wrapper = mount(<HomeApp { ...props } />);

    expect(HomeApp.prototype.componentDidMount).to.have.been.called;
    expect(wrapper.state()).to.deep.equal({});

    HomeApp.prototype.componentDidMount.restore();
  });

  it('can unmount from DOM successfully', () => {
    spy(HomeApp.prototype, 'componentWillUnmount');

    wrapper = mount(<HomeApp { ...props } />);
    wrapper.unmount();

    expect(HomeApp.prototype.componentWillUnmount).to.have.been.called;

    HomeApp.prototype.componentWillUnmount.restore();
  });

  it('will always render a `header` component', () => {
    wrapper = shallow(<HomeApp { ...props } />);

    expect(wrapper.find('header').length).to.equal(1);
  });

  it('will update the component successfully when received new props', () => {
    const p = {};

    spy(HomeApp.prototype, 'componentWillReceiveProps');

    wrapper = mount(<HomeApp { ...props } />);
    wrapper.setProps(p);

    expect(HomeApp.prototype.componentWillReceiveProps).to.have.been.calledWith(props);
    expect(wrapper.state()).to.deep.equal({});
  });

});
