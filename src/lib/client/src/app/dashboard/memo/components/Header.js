import TextInput from './TextInput';
import DashboardActionCreator from '../actions/MemoActionCreator';
import BaseComponent from '../../../../common/components/BaseComponent';
import React from 'react';

class Header extends BaseComponent {
  constructor() {
    super();
  }

  render() {
    return (
      <header>
        <h1>Memo</h1>
        <TextInput
          onSave={this._onSave}
          value=''
          placeholder='What needs to be done?'
        />
      </header>
    );
  }

  _onSave(text) {
    if (text.trim()) {
      DashboardActionCreator.create(text);
    }
  }

}

export { Header as default };
