import BaseComponent from '../../../common/components/BaseComponent';
import React from 'react';

class ProfileApp extends BaseComponent {

  constructor(props) {
    super(props);

    this.state = _getState();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <h1>Only logged-in user can see this page!</h1>
          </div>
        </div>
      </div>
    );
  }

}

/*
 * A private method. It should only be used by `setState()` and `getInitialState()` to sync up
 * the data in the Flux's store.
 */
function _getState() {
  return {};
}

export default ProfileApp;
