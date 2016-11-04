import DashboardActionCreator from '../actions/MemoActionCreator';
import TextInput from './TextInput';
import BaseComponent from '../../../../common/components/BaseComponent';
import React from 'react';
import classNames from 'classnames';

class ListItem extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onToggleComplete', '_onDeleteClick', '_onDoubleClick', '_onSave');
    this.state = { isEditing: false };
  }

  render() {
    const todo = this.props.todo;
    let input = null;

    if (this.state.isEditing) {
      input = (
        <TextInput
          onSave={ this._onSave }
          value={ this.props.todo.text }
        />
      );
    }

    return (
      <li key={ todo.key }
        className={ classNames({
          'text-danger': !todo.isComplete,
          'text-success': todo.isComplete,
          'text-warning': this.state.isEditing
        }) }>
        <div>
          <input
            onChange={ this._onToggleComplete }
            checked={ todo.isComplete }
            type="checkbox"
          />
          &nbsp;&nbsp;
          <label onDoubleClick={ this._onDoubleClick }>
            { todo.text }
          </label>
          &nbsp;&nbsp;
          <button onClick={ this._onDeleteClick } type="button">delete</button>
          &nbsp;&nbsp;&nbsp;
          { input }
        </div>
      </li>
    );
  }

  _onToggleComplete() {
    DashboardActionCreator.toggleComplete(this.props.todo);
  }

  _onDeleteClick() {
    DashboardActionCreator.destroy(this.props.todo.id);
  }

  _onDoubleClick() {
    this.setState({ isEditing: true });
  }

  _onSave(text) {
    DashboardActionCreator.updateText(this.props.todo.id, text);

    this.setState({ isEditing: false });
  }

}
ListItem.propTypes = {
  todo: React.PropTypes.object.isRequired
};

export default ListItem;
