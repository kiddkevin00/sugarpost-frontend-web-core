import React from 'react';
import Scroll from 'react-scroll';
import Helpers from 'react-scroll/lib/mixins/Helpers';

const Div = React.createClass({
  render() {
    return React.DOM.div(this.props, this.props.children);
  }
});

module.exports = Helpers.Scroll(Div);
