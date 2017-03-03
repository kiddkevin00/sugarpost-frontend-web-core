import BaseComponent from './BaseComponent';
import React from 'react';
import Helpers from 'react-scroll/lib/mixins/Helpers';

class Div extends BaseComponent {

  render() {
    return (
      <div { ...this.props }>
        { this.props.children }
      </div>
    );
  }

}

export default Helpers.Scroll(Div);
