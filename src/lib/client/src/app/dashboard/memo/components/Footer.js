import memoActionCreator from '../actions/memoActionCreator';
import BaseComponent from '../../../../common/components/BaseComponent';
import React from 'react';

class Footer extends BaseComponent {

  render() {
    const totalAmount = Object.keys(this.props.allTodos).length;
    let clearAllCompletedButton = null;

    if (totalAmount > 0) {
      let completeAmount = 0;

      for (const id in this.props.allTodos) {
        if (this.props.allTodos[id].isComplete) {
          completeAmount += 1;
        }
      }
      if (completeAmount > 0) {
        clearAllCompletedButton = (
          <button onClick={ Footer._onDestroyCompletedClick }>
            Clear { completeAmount } completed { completeAmount > 1 ? 'items' : 'item' }
          </button>
        );
      }
    }

    return (
      <footer>
        <p>
          <span>
            Total:&nbsp;&nbsp;
            <strong>{ totalAmount }</strong>
            { totalAmount > 0 ? ' items' : ' item' }
          </span>
          <br />
          <br />
          { clearAllCompletedButton }
        </p>
        <p>Some other info..</p>
      </footer>
    );
  }

  static _onDestroyCompletedClick() {
    memoActionCreator.destroyCompleted();
  }

}
Footer.propTypes = {
  allTodos: React.PropTypes.object.isRequired, /* eslint-disable-line react/forbid-prop-types */
};

export default Footer;
