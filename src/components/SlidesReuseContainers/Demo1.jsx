import React from 'react';
import { Slide } from 'spectacle';
import { MyComponent1 } from '../MyComponent1';
import { MyComponent2 } from '../MyComponent2';
import { Columns } from '../Columns';

const list = [
  {
    title: 'MyComponent1',
    body: (
      <React.Fragment>
        <MyComponent1 counter={0} />
        <MyComponent1 counter={5} />
      </React.Fragment>
    ),
  },
  {
    title: 'MyComponent2',
    body: (
      <React.Fragment>
        <MyComponent2 counter={0} />
        <MyComponent2 counter={5} />
      </React.Fragment>
    ),
  },
];

const Demo1 = () => (
  <Slide>
    <Columns list={list} />
  </Slide>
);

export { Demo1 };
