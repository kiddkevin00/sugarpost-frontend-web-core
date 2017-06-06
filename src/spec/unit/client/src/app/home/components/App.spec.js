import { UnwrappedHomeApp } from '../../../../../../../lib/client/src/app/home/components/App';
import { shallow, mount } from 'enzyme';
import React from 'react';


describe('Home App component', () => {
  let props;
  let component;
  let wrapper;

  beforeEach(() => {
    props = {
      isModalOpen: false,
      dispatchCloseModal() {},
    };
    component = new UnwrappedHomeApp(props);
  });

  afterEach(() => {
    if (wrapper) {
      wrapper.unmount();
      wrapper = null;
    }
  });

  it('is defined', () => {
    expect(UnwrappedHomeApp).not.to.be.an('undefined');
  });

  it('can be initiated', () => {
    expect(component).not.to.be.an('undefined');
  });

  it('can mount into DOM succesfully', () => {
    spy(UnwrappedHomeApp.prototype, 'componentDidMount');

    wrapper = mount(<UnwrappedHomeApp { ...props } />);

    expect(UnwrappedHomeApp.prototype.componentDidMount).to.have.been.called;
    expect(wrapper.state()).to.deep.equal({});

    UnwrappedHomeApp.prototype.componentDidMount.restore();
  });

  it('can unmount from DOM successfully', () => {
    spy(UnwrappedHomeApp.prototype, 'componentWillUnmount');

    wrapper = mount(<UnwrappedHomeApp { ...props } />);
    wrapper.unmount();

    expect(UnwrappedHomeApp.prototype.componentWillUnmount).to.have.been.called;

    UnwrappedHomeApp.prototype.componentWillUnmount.restore();
  });

  it('will always render a `header` component', () => {
    wrapper = shallow(<UnwrappedHomeApp { ...props } />);

    expect(wrapper.find('header').length).to.equal(1);
  });

  it('will update the component successfully when received new props', () => {
    const p = {};

    spy(UnwrappedHomeApp.prototype, 'componentWillReceiveProps');

    wrapper = mount(<UnwrappedHomeApp { ...props } />);
    wrapper.setProps(p);

    expect(UnwrappedHomeApp.prototype.componentWillReceiveProps).to.have.been.calledWith(props);
    expect(wrapper.state()).to.deep.equal({});
  });

});
