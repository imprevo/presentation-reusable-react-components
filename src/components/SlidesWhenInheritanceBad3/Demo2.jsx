import React from 'react';
import { BaseComponent } from './samples/BaseComponent2';
import { MyComponent } from './samples/MyComponent2';
import { Columns } from '../Columns';
import { Slide } from 'spectacle';

const list = [
  { title: 'BaseComponent', body: <BaseComponent /> },
  { title: 'MyComponent', body: <MyComponent /> },
];

const Demo2 = () => (
  <Slide>
    <Columns list={list} />
  </Slide>
);

export { Demo2 };
