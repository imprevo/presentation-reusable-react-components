import React from 'react';
import { Counter } from './Counter';
import { MyComponent1 } from '../../MyComponent1';
import { MyComponent2 } from '../../MyComponent2';

const Container1 = () => {
  return <Counter Component={MyComponent1} />;
};
const Container2 = () => {
  return <Counter Component={MyComponent2} />;
};

export { Container1, Container2 };
