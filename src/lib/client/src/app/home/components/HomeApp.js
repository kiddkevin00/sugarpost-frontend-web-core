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
         <header>
          <div className="header-content">
          <div className="header-content-inner">
              <h1 id="homeHeading">SUGARPOST</h1>
              <p>Premium subscription service to a sweet adventure</p>
                <SubscribeForm onSubmit={ HomeApp._onSubmit } />
          </div>
        </div>
       </header>
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

  static _onLink(url) {
    const win = window.open(url, '_blank');

    win.focus();
  }

}

/*
 * A private method. It should only be used by `setState()` and `getInitialState()` to sync up
 * the data in the Flux's store.
 */
function _getState() {
  return {
    subscribeFeedbackTxt: homeStore.getSubscribeFeedbackTxt(),
    subscribeFeedbackCssClass: homeStore.getSubscribeFeedbackCssClass(),
  };
}

export default HomeApp;
