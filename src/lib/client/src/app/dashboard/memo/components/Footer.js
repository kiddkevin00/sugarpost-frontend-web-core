import DashboardActionCreator from '../actions/MemoActionCreator';
import React from 'react';

import BaseComponent from '../../../../common/components/BaseComponent';

class Footer extends BaseComponent {

  constructor() {
    super();
  }

  render() {
    const totalAmount = Object.keys(this.props.allTodos).length;
    let clearAllCompletedButton = null;

    if (totalAmount> 0) {
      let completeAmount = 0;

      for (var id in this.props.allTodos) {
        if (this.props.allTodos[id].isComplete) {
          completeAmount += 1;
        }
      }
      if (completeAmount > 0) {
        clearAllCompletedButton = (
          <button onClick={ this._onClearAllCompletedClick }>
            clear { completeAmount } completed { completeAmount > 1 ? 'items' : 'item' }
          </button>
        );
      }
    }
    const descriptionSpan = (
      <p>
        <span>
          Total:&nbsp;&nbsp;
          <strong>{ totalAmount }</strong>
          { totalAmount > 0 ? ' items' : ' item' }
        </span>
        &nbsp;&nbsp;&nbsp;
        { clearAllCompletedButton }
      </p>
    );

    return (
      <footer>
        { descriptionSpan }
        <p>Some other info..</p>
      </footer>
    );
  }

  _onClearAllCompletedClick() {
    DashboardActionCreator.destroyCompleted();
  }

}
Footer.propTypes = {
  allTodos: React.PropTypes.object.isRequired
};

export default Footer;
