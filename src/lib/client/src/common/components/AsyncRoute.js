import BaseComponent from './BaseComponent';
import React from 'react';
import PropTypes from 'prop-types';

class AsyncRoute extends BaseComponent {

  constructor(props) {
    super(props);

    this.state = {
      Component: null,
    };
  }

  componentDidMount() {
    if (this.props.loadingPromise) {
      this.props.loadingPromise
        .then((module) => {
          this.setState({ Component: module.default || module });
        });
    }
  }

  render() {
    if (this.state.Component) {
      return (
        <this.state.Component { ...this.props.props } />
      );
    }
    return (
      <h1>loading...</h1>
    );
  }

}
AsyncRoute.propTypes = {
  props: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  loadingPromise: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

export default AsyncRoute;
