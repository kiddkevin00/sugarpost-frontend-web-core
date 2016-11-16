import TextInput from './TextInput';
import memoActionCreator from '../actions/memoActionCreator';
import BaseComponent from '../../../../common/components/BaseComponent';
import React from 'react';

class Header extends BaseComponent {

  render() {
    return (
      <header>
        <h1>Memo</h1>
        <TextInput
          onSave={ Header._onSave }
          value=""
          placeholder="What needs to be done?"
        />
      </header>
    );
  }

  static _onSave(text) {
    if (text.trim()) {
      memoActionCreator.create(text);
    }
  }

}

export default Header;
