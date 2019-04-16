/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text, Slide } from 'spectacle';
import { CodePaneColumns } from '../CodePaneColumns';
import sourceCounter from '!raw-loader!./samples/Counter';
import sourceContainers from '!raw-loader!./samples/Containers';

const sourceList = [sourceCounter, sourceContainers];

const Example = () => {
  return (
    <Slide>
      <Text>Передача функции в children</Text>
      <CodePaneColumns list={sourceList} />
    </Slide>
  );
};

export { Example };
