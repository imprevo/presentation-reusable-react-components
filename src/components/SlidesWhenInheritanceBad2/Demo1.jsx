import React from 'react';
import { Container } from './samples/Containers1';
import { Columns } from '../Columns';

const list = [{ title: 'Container', body: <Container /> }];

const Demo1 = () => <Columns list={list} />;

export { Demo1 };
