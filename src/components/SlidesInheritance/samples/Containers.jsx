import React from 'react';
import { BaseContainer } from './BaseContainer';
import { MyComponent1 } from '../../MyComponent1';
import { MyComponent2 } from '../../MyComponent2';

class Container1 extends BaseContainer {
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
class Container2 extends BaseContainer {
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

export { Container1, Container2 };
