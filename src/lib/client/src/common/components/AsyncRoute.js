import BaseComponent from './BaseComponent';
import React from 'react';
import PropTypes from 'prop-types';

class AsyncRoute extends BaseComponent {

  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
    };
  }

  componentDidMount() {
    if (this.props.loadingPromise) {
      this.props.loadingPromise
        .then((module) => {
          this.component = module.default;

          this.setState({ isLoaded: true });
        });
    }
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <this.component { ...this.props.props } />
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
