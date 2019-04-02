import React from 'react';
import { Text } from 'spectacle';
import { Container } from './samples/Containers2';
import { Columns } from '../Columns';

const list = [{ title: 'Container', body: <Container /> }];

const Demo2 = () => {
  return (
    <React.Fragment>
      <Text>Пример</Text>
      <Columns list={list} />
    </React.Fragment>
  );
};

export { Demo2 };
