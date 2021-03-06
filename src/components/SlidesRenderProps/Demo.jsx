import React from 'react';
import { Container1, Container2 } from './samples/Containers';
import { Columns } from '../Columns';
import { Slide } from 'spectacle';

const list = [
  { title: 'Container1', body: <Container1 /> },
  { title: 'Container2', body: <Container2 /> },
];

const Demo = () => (
  <Slide>
    <Columns list={list} />
  </Slide>
);

export { Demo };
