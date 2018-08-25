import React from 'react';
import { MyComponent1 } from '../../MyComponent1';

class Container1 extends React.Component {
  state = {
    counter: 0,
  };
  onIncrease = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };
  onDecrease = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - 1,
    }));
  };
  render() {
    return (
      <MyComponent1
        counter={this.state.counter}
        onIncrease={this.onIncrease}
        onDecrease={this.onDecrease}
      />
    );
  }
}

export { Container1 };
