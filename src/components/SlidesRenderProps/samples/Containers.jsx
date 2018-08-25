import React from 'react';
import { Counter } from './Counter';
import { MyComponent1 } from '../../MyComponent1';
import { MyComponent2 } from '../../MyComponent2';

const Container1 = () => {
  return (
    <Counter>
      {({ counter, onIncrease, onDecrease }) => (
        <MyComponent1
          counter={counter}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
      )}
    </Counter>
  );
};
const Container2 = () => {
  return (
    <Counter>
      {({ counter, onIncrease, onDecrease }) => (
        <MyComponent2
          counter={counter}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
      )}
    </Counter>
  );
};

export { Container1, Container2 };
