import memoActionCreator from '../actions/memoActionCreator';
import TextInput from './TextInput';
import BaseComponent from '../../../common/components/BaseComponent';
import React from 'react';
import classNames from 'classnames';
import uuid from 'node-uuid';

class ListItem extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onToggleComplete', '_onDeleteClick', '_onDoubleClick', '_onSave');
    this.state = { isEditing: false };
  }

  render() {
    let input = null;
    const todo = this.props.todo;
    const inputId = uuid.v4();

    if (this.state.isEditing) {
      input = (
        <TextInput
          onSave={ this._onSave }
          value={ todo.text }
          id={ inputId }
        />
      );
    }

    return (
      <li
        className={ classNames({
          'text-danger': !todo.isComplete,
          'text-success': todo.isComplete,
          'text-warning': this.state.isEditing,
        }) }
      >
        <input
          onChange={ this._onToggleComplete }
          checked={ todo.isComplete }
          type="checkbox"
        />
        &nbsp;&nbsp;
        <label onDoubleClick={ this._onDoubleClick } htmlFor={ inputId }>
          { todo.text }
        </label>
        &nbsp;&nbsp;
        <button onClick={ this._onDeleteClick } type="button">Delete</button>
        &nbsp;&nbsp;&nbsp;
        { input }
      </li>
    );
  }

  _onToggleComplete() {
    memoActionCreator.toggleComplete(this.props.todo);
  }

  _onDeleteClick() {
    memoActionCreator.destroy(this.props.todo.id);
  }

  _onDoubleClick() {
    this.setState({ isEditing: true });
  }

  _onSave(text) {
    memoActionCreator.updateText(this.props.todo.id, text);

    this.setState({ isEditing: false });
  }

}
ListItem.propTypes = {
  todo: React.PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default ListItem;
