import React from 'react';
import { Container } from './samples/Containers2';
import { Columns } from '../Columns';

const list = [{ title: 'Container', body: <Container /> }];

const Demo2 = () => <Columns list={list} />;

export { Demo2 };
