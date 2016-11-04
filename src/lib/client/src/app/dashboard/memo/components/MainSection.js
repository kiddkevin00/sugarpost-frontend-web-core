import MemoActionCreator from '../actions/MemoActionCreator';
import ListItem from './ListItem';
import BaseComponent from '../../../../common/components/BaseComponent';
import React from 'react';

class MainSection extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onToggleCompleteAll');
  }

  render() {
    const allTodos = this.props.allTodos;

    if (Object.keys(allTodos).length === 0) {
      return null;
    }

    const todoList = [];

    for (let key in allTodos) {
      todoList.push(
        <ListItem
          key={ key }
          todo={ allTodos[key] }
        />
      );
    }

    return (
      <section>
        <input
          checked={ this.props.areAllComplete }
          onChange={ this._onToggleCompleteAll }
          id="toggle-all"
          type="checkbox"
        />
        &nbsp;
        <label htmlFor="ToggleAll">Toggle All</label>
        <ul>{ todoList }</ul>
      </section>
    );
  }

  _onToggleCompleteAll() {
    MemoActionCreator.toggleCompleteAll();
  }

}
MainSection.propTypes = {
  allTodos: React.PropTypes.object.isRequired,
  areAllComplete: React.PropTypes.bool.isRequired
};

export default MainSection;
