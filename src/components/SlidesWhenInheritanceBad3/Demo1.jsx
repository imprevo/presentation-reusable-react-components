import React from 'react';
import { BaseComponent } from './samples/BaseComponent1';
import { MyComponent } from './samples/MyComponent1';
import { Columns } from '../Columns';

const list = [
  { title: 'BaseComponent', body: <BaseComponent /> },
  { title: 'MyComponent', body: <MyComponent /> },
];

const Demo1 = () => <Columns list={list} />;

export { Demo1 };
