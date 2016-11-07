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

class TeachersApp extends BaseComponent {

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
            Get Here at The English University, our teachers are patient, innovative, and passionate about the success of our students. They come from diverse backgrounds and are dedicated to reach your goals in a fun, engaging, and effective manner. They're trained to properly assess your goals and create a customized lesson plan that suits your needs. The lesson plan gives students a clear idea of what they will be learning, what the assignments are, and what the grading policy is. All assignments have learning goals and develop new skills for the student. Below you can view our teachers' biographies and schedule an  appointment with one today!e number
          </p>
        </div>
      </div>
    );
  }

  _onChange() {
    this.setState(_getState());
  }

}

export default TeachersApp;
