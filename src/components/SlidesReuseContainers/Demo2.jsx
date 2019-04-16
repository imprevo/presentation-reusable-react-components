import React from 'react';
import { Slide } from 'spectacle';
import { Container1 } from './samples/Container1';
import { Container2 } from './samples/Container2';
import { Columns } from '../Columns';

const list = [
  { title: 'Container1', body: <Container1 /> },
  { title: 'Container2', body: <Container2 /> },
];

const Demo2 = () => (
  <Slide>
    <Columns list={list} />
  </Slide>
);

export { Demo2 };
