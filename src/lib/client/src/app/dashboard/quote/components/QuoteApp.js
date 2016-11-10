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
      <div className="row">
        <div className="col-lg-12">
          <p>
            Get a Quote Box

            Program of study- (allow person option to choose several programs) English classes (fulltime), Skype lessons etc
            Length of study- Have a calendar to choose start date and for end date
            Level of study- Drop down of 1-10, 1 being a complete beginner and 10 being advanced
            Name
            Email Address
            Phone number
          </p>
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
    
  };
}

export default QuoteApp;
