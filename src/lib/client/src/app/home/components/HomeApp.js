import homeStore from '../stores/homeStore';
import homeActionCreator from '../actions/homeActionCreator';
import SubscribeForm from './SubscribeForm';
import BaseComponent from '../../../common/components/BaseComponent';
import React from 'react';

class HomeApp extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onChange');
    this.state = _getState();
  }

  componentDidMount() {
    homeStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    homeStore.removeChangeListener(this._onChange);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <img src="/assets/images/jumbotron.png" className="jumbotron-custom" alt="jumbotron" />
        </div>
        <div className="row">
          <div className="col-lg-12 text-center">
            <h3 className="bold-font-custom">ABOUT US:</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-offset-4 col-lg-4 text-center">
            <h4>
              Founded in Winter 2016, Sugarpost is currently a New York based online monthly
              subscription service that sends its users a package of dessert deals including
              frozen treats and baked goods. For exclusive offers and updates on the launch,
              please subscribe by entering your e-mail below.
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-offset-4 col-lg-4">
            <SubscribeForm onSubmit={ HomeApp._onSubmit } />
          </div>
        </div>
      </div>
    );
  }

  _onChange() {
    this.setState(_getState());
  }

  static _onSubmit(event, email) {
    // Prevents browser's default navigation (page refresh).
    event.preventDefault();

    homeActionCreator.subscribe(email);
  }

}

/*
 * A private method. It should only be used by `setState()` and `getInitialState()` to sync up
 * the data in the Flux's store.
 */
function _getState() {
  return {};
}

export default HomeApp;
