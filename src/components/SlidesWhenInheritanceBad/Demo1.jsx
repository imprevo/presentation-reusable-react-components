import React from 'react';
import { Slide } from 'spectacle';
import { Container } from './samples/Containers1';
import { Columns } from '../Columns';

const list = [{ title: 'Container', body: <Container /> }];

const Demo1 = () => (
  <Slide>
    <Columns list={list} />
  </Slide>
);

export { Demo1 };
