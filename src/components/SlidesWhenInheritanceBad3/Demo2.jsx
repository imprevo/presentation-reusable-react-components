import React from 'react';
import { BaseComponent } from './samples/BaseComponent2';
import { MyComponent } from './samples/MyComponent2';
import { Columns } from '../Columns';

const list = [
  { title: 'BaseComponent', body: <BaseComponent /> },
  { title: 'MyComponent', body: <MyComponent /> },
];

const Demo2 = () => <Columns list={list} />;

export { Demo2 };
