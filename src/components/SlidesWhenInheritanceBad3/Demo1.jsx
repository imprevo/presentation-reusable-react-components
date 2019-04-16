import React from 'react';
import { BaseComponent } from './samples/BaseComponent1';
import { MyComponent } from './samples/MyComponent1';
import { Columns } from '../Columns';
import { Slide } from 'spectacle';

const list = [
  { title: 'BaseComponent', body: <BaseComponent /> },
  { title: 'MyComponent', body: <MyComponent /> },
];

const Demo1 = () => (
  <Slide>
    <Columns list={list} />
  </Slide>
);

export { Demo1 };
