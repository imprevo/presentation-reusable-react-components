/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text, Slide } from 'spectacle';
import { CodePaneColumns } from '../CodePaneColumns';
import sourceBaseContainer from '!raw-loader!./samples/BaseContainer';
import sourceContainers from '!raw-loader!./samples/Containers3';

const sourceList = [sourceBaseContainer, sourceContainers];

const Example3 = () => {
  return (
    <Slide>
      <Text>Нужно смержить состояния (fixed)</Text>
      <CodePaneColumns list={sourceList} />
    </Slide>
  );
};

export { Example3 };
