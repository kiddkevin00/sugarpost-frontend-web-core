import memoStore from '../stores/memoStore';
import Header from './Header';
import MainSection from './MainSection';
import Footer from './Footer';
import BaseComponent from '../../../../common/components/BaseComponent';
import React from 'react';

class MemoApp extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onChange');
    this.state = _getState();
  }

  componentDidMount() {
    memoStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    memoStore.removeChangeListener(this._onChange);
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-offset-4 col-lg-8">
          <Header />
          <br />
          <MainSection
            allTodos={ this.state.allTodos }
            areAllComplete={ this.state.areAllComplete }
          />
          <Footer allTodos={ this.state.allTodos } />
        </div>
      </div>
    );
  }

  _onChange() {
    this.setState(_getState());
  }

}

/*
 * A private method. It should only be used by `setState()` and `getInitialState()` to sync up
 * the data in the Flux's store.
 */
function _getState() {
  return {
    allTodos: memoStore.getAll(),
    areAllComplete: memoStore.areAllComplete()
  };
}

export default MemoApp;
