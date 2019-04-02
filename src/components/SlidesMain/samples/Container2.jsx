import React from 'react';
import { MyComponent2 } from '../../MyComponent2';

class Container2 extends React.Component {
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
      <MyComponent2
        counter={this.state.counter}
        onIncrease={this.onIncrease}
        onDecrease={this.onDecrease}
      />
    );
  }
}

export { Container2 };
