import BaseComponent from '../../../../common/components/BaseComponent';
import React from 'react';

const enterKeyCode = 13;

// A React component class for generic text input.
class TextInput extends BaseComponent {

  constructor(props) {
    super(props);

    this._bind('_onSave', '_onChange', '_onKeyDown');
    this.state = props;
  }

  render() {
    return (
      <input
        onBlur={ this._onSave }
        onChange={ this._onChange }
        onKeyDown={ this._onKeyDown }
        className={ this.props.className }
        id={ this.props.id }
        placeholder={ this.props.placeholder }
        value={ this.state.value }
        autoFocus={ true }
        type="text"
      />
    );
  }

  _onSave() {
    this.props.onSave(this.state.value);

    this.setState({ value: '' });
  }

  _onChange(event) {
    this.setState({ value: event.target.value });
  }

  _onKeyDown(event) {
    if (event.keyCode === enterKeyCode) {
      this._onSave();
    }
  }

}
TextInput.popTypes = {
  onSave: React.PropTypes.func.isRequired,
  className: React.PropTypes.string,
  id: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  value: React.PropTypes.string,
};

export default TextInput;
