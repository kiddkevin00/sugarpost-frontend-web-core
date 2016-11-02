import BaseComponent from '../../../../common/components/BaseComponent';
import React from 'react';

const ENTER_KEY_CODE = 13;

// generic text input React Component
class TextInput extends BaseComponent {
  constructor(props) {
    super();
    this._bind('_onSave', '_onChange', '_onKeyDown');
    this.state = props;
  }

  render() {
    return (
      <input
        onBlur={this._onSave}
        onChange={this._onChange}
        onKeyDown={this._onKeyDown}
        value={this.state.value}
        className={this.props.className}
        id={this.props.id}
        placeholder={this.props.placeholder}
        autoFocus={true}
        type='text'
      />
    );
  }

  _onSave() {
    this.props.onSave(this.state.value);
    this.setState({
      value: ''
    });
  }

  _onChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  _onKeyDown(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      this._onSave();
    }
  }

}
TextInput.popTypes = {
  onSave: React.PropTypes.func.isRequired,
  placeholder: React.PropTypes.string,
  value: React.PropTypes.string,
  className: React.PropTypes.string,
  id: React.PropTypes.string
};

export { TextInput as default };
