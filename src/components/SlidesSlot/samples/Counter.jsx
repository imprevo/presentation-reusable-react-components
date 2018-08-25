import React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component {
  static propTypes = {
    Component: PropTypes.node,
  };
  state = {
    counter: 0,
  };
  onIncrease = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  };
  onDecrease = () => {
    this.setState((prevState) => ({ counter: prevState.counter - 1 }));
  };
  render() {
    const { Component } = this.props;
    return (
      <Component
        counter={this.state.counter}
        onDecrease={this.onDecrease}
        onIncrease={this.onIncrease}
      />
    );
  }
}

export { Counter };
