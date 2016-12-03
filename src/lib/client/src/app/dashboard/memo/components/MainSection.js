import memoActionCreator from '../actions/memoActionCreator';
import ListItem from './ListItem';
import BaseComponent from '../../../../common/components/BaseComponent';
import React from 'react';

class MainSection extends BaseComponent {

  render() {
    const allTodos = this.props.allTodos;

    if (Object.keys(allTodos).length === 0) {
      return null;
    }

    const todoList = [];

    for (const id in allTodos) {
      if (allTodos.hasOwnProperty(id)) {
        todoList.push(
          <ListItem
            todo={ allTodos[id] }
          />
        );
      }
    }

    return (
      <section>
        <input
          checked={ this.props.areAllComplete }
          onChange={ MainSection._onToggleCompleteAll }
          id="toggle-all"
          type="checkbox"
        />
        &nbsp;
        <label htmlFor="toggle-all">Toggle All</label>
        <ul>{ todoList }</ul>
      </section>
    );
  }

  static _onToggleCompleteAll() {
    memoActionCreator.toggleCompleteAll();
  }

}
MainSection.propTypes = {
  allTodos: React.PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  areAllComplete: React.PropTypes.bool.isRequired,
};

export default MainSection;
