import BaseComponent from './BaseComponent';
import React from 'react';

class Icon extends BaseComponent {

  render() {
    switch (this.props.iconType) {
      case 'refer-mail':
        return (
          <svg viewBox="-9 -5 50 50" fill="white" width="34" height="34">
            <g><circle cx="16" cy="20" r="25" fill="#FBB352" /></g>
            <g>
              <path
                d="M29 4h-26c-1.65 0-3 1.35-3 3v20c0 1.65 1.35 3 3
                3h26c1.65 0 3-1.35 3-3v-20c0-1.65-1.35-3-3-3zM12.461 17.199l-8.461
                6.59v-15.676l8.461 9.086zM5.512 8h20.976l-10.488
                7.875-10.488-7.875zM12.79 17.553l3.21 3.447 3.21-3.447
                6.58 8.447h-19.579l6.58-8.447zM19.539
                17.199l8.461-9.086v15.676l-8.461-6.59z"
              />
            </g>
          </svg>
        )
      default:
        return (
          <div />
        )
    }
  }
}

Icon.propTypes = {
  iconType: React.PropTypes.string.isRequired,
};
export default Icon;
