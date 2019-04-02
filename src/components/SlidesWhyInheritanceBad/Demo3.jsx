import React from 'react';
import { Container } from './samples/Containers3';
import { Columns } from '../Columns';

const list = [{ title: 'Container', body: <Container /> }];

const Demo3 = () => <Columns list={list} />;

export { Demo3 };
