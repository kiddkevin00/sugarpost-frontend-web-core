import BaseComponent from '../../../../common/components/BaseComponent';
import React from 'react';

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
      <div>
        <div className="row">
          <div className="col-lg-12">
            <img
              src="assets/images/free-english-classes.jpg" width="60%"
              style={ { 'margin-left': 'auto', 'margin-right': 'auto', display: 'block' } }
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h2 style={ { 'text-align': 'center' } }>Welcome to The English University!</h2>
            <h3 style={ { 'text-align': 'center' } }>
              Here you will find everything you need to become fluent in English. English is
              spoken by billions of people and is the international language of business. No
              matter what your field of study or work, understanding and speaking English is
              vital to your success. We provide English classes and private tutoring to help
              you achieve your goals. Our program covers grammar, vocabulary, pronunciation,
              spelling, listening, speaking, reading, and writing.
            </h3>
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

export default HomeApp;
