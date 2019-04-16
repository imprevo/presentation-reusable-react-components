import React from 'react';
import { Slide } from 'spectacle';
import { Container } from './samples/Containers3';
import { Columns } from '../Columns';

const list = [{ title: 'Container', body: <Container /> }];

const Demo3 = () => (
  <Slide>
    <Columns list={list} />
  </Slide>
);

export { Demo3 };
