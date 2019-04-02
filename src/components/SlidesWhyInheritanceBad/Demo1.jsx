import React from 'react';
import { Text } from 'spectacle';
import { Container } from './samples/Containers1';
import { Columns } from '../Columns';

const list = [{ title: 'Container', body: <Container /> }];

const Demo1 = () => {
  return (
    <React.Fragment>
      <Text>Пример</Text>
      <Columns list={list} />
    </React.Fragment>
  );
};

export { Demo1 };
