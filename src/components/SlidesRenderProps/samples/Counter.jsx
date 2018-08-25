import React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component {
  static propTypes = {
    children: PropTypes.func,
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
    return this.props.children({
      counter: this.state.counter,
      onIncrease: this.onIncrease,
      onDecrease: this.onDecrease,
    });
  }
}

export { Counter };
