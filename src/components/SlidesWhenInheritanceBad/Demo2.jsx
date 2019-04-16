import React from 'react';
import { Slide } from 'spectacle';
import { Container } from './samples/Containers2';
import { Columns } from '../Columns';

const list = [{ title: 'Container', body: <Container /> }];

const Demo2 = () => (
  <Slide>
    <Columns list={list} />
  </Slide>
);

export { Demo2 };
