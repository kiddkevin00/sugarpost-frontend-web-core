import TextInput from './TextInput';
import memoActionCreator from '../actions/memoActionCreator';
import BaseComponent from '../../../../common/components/BaseComponent';
import React from 'react';

class Header extends BaseComponent {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <h1>Memo</h1>
        <TextInput
          onSave={ this._onSave }
          value=""
          placeholder="What needs to be done?"
        />
      </header>
    );
  }

  _onSave(text) {
    if (text.trim()) {
      memoActionCreator.create(text);
    }
  }

}

export default Header;
