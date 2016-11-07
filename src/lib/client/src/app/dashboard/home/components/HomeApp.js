import BaseComponent from '../../../../common/components/BaseComponent';
import React from 'react';

/*
 * A private method. It should only be used by `setState()` and `getInitialState()` to sync with
 * the data in the Flux's store.
 */
function _getState() {
  return {
  };
}

class HomeApp extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onChange');
    this.state = _getState();
  }

  componentDidMount() {
    
  }

  componentWillUnmount() {
    
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <p>Welcome to English University!</p>
        </div>
      </div>
    );
  }

  _onChange() {
    this.setState(_getState());
  }

}

export default HomeApp;
