import FormInput from '../../login/components/FormInput';
import BaseComponent from '../../../../common/components/BaseComponent';
import React from 'react';

class QuoteApp extends BaseComponent {

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
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-offset-4 col-lg-4">
            <h3>Get a Quote Box</h3>
            <hr />
            <h4>Length</h4>
            <h4>Level</h4>
            <h4>Name</h4>
            <h4>Email</h4>
            <h4>Phone</h4>
          </div>
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
  return {};
}

export default QuoteApp;
