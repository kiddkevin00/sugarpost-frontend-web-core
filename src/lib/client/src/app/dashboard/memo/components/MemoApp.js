import MemoStore from '../stores/MemoStore';
import Header from './Header';
//import MainSection from './MainSection.jsx';
//import Footer from './Footer.jsx';
import BaseComponent from '../../../../common/components/BaseComponent';
import React from 'react';

/*
 * A private method. It should only be used by `setState()` and `getInitialState()` to sync with
 * the data in the Flux store.
 */
function _getState() {
  return {
    allTodos: MemoStore.getAll(),
    areAllComplete: MemoStore.areAllComplete()
  };
}

class MemoApp extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onChange');
    this.state = _getState();
  }

  componentDidMount() {
    MemoStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    MemoStore.removeChangeListener(this._onChange);
  }

  render() {
    return (
      <div className='row'>
        <div className='col-lg-offset-4 col-lg-8'>
          <Header />

        </div>
      </div>
    );
  }

  _onChange() {
    this.setState(_getState());
  }

}

export default MemoApp;
