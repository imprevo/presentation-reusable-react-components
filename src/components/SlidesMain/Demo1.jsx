import React from 'react';
import { MyComponent1 } from '../MyComponent1';
import { MyComponent2 } from '../MyComponent2';
import { Columns } from '../Columns';

const list = [
  { title: 'MyComponent1', body: <MyComponent1 counter={0} /> },
  { title: 'MyComponent2', body: <MyComponent2 counter={0} /> },
];

const Demo1 = () => <Columns list={list} />;

export { Demo1 };
