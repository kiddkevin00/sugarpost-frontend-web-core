import BaseComponent from './BaseComponent';
import React from 'react';
import PropTypes from 'prop-types';

class Icon extends BaseComponent {

  render() {
    switch (this.props.type) {
      case 'email':
        return (
          <svg viewBox="-9 -7 50 50" fill="white" width="34" height="34">
            <g><circle cx="16" cy="18" r="25" fill="#FBB352" /></g>
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
        );
      case 'circle_error':
        return (
          <svg viewBox="0 0 20 20">
            <path
              d="M10,0.982c4.973,0,9.018,4.046,9.018,9.018S14.973,19.018,10,
              19.018S0.982,14.973,0.982,10 S5.027,0.982,10,0.982 M10,0C4.477,0,0,
              4.477,0,10c0,5.523,4.477,10,10,10s10-4.477,10-10C20,4.477,15.523,0,
              10,0L10,0z M9,5.703 V5.441h2.5v0.262l-0.66,5.779H9.66L9,
              5.703z M9.44,12.951h1.621v1.491H9.44V12.951z"
            />
          </svg>
        );
      case 'circle_tick':
        return (
          <svg viewBox="0 0 23 23">
            <path
              d="M11.5,23C5.2,23,0,17.8,0,11.5S5.2,0,11.5,0S23,5.2,23,11.5S17.8,
              23,11.5,23z M11.5,1C5.7,1,1,5.7,1,11.5S5.7,22,11.5,22 S22,17.3,22,
              11.5S17.3,1,11.5,
              1z M10.4,15.2l6.7-7c0.2-0.2,0.2-0.5,0-0.7c-0.2-0.2-0.5-0.2-0.7,
              0L10,14.2L7,11 c-0.2-0.2-0.5-0.2-0.7,0c-0.2,0.2-0.2,
              0.5,0,0.7l3.4,3.5c0.1,0.1,0.2,0.1,0.3,0.1S10.3,15.3,10.4,15.2z"
            />
          </svg>
        );
      case 'circle_tick_filled':
        return (
          <svg viewBox="0 0 20 20">
            <path
              fill="#4FB07F"
              d="M9.5,0C14.7,0,19,4.3,19,9.5S14.7,19,9.5,19S0,14.7,0,9.5S4.3,
              0,9.5,0z"
            />
            <path
              fill="#FFFFFF"
              d="M8.7,12.9c-0.1,0-0.2,0-0.3-0.1l-2.4-2.5c-0.1-0.1-0.1-0.4,
              0-0.5c0.1-0.2,0.4-0.2,0.5,0L8.7,12l4.6-5 c0.1-0.1,0.4-0.1,0.5,
              0c0.1,0.2,0.1,0.4,0,0.5L9,12.8C9,12.8,8.9,12.9,8.7,12.9C8.8,
              12.9,8.8,12.9,8.7,12.9z"
            />
          </svg>
        );
      default:
        return (
          <div />
        );
    }
  }

}
Icon.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Icon;
