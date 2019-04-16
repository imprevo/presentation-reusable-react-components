/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text } from 'spectacle';
import { CodePaneColumns } from '../CodePaneColumns';
import sourceBaseContainer from '!raw-loader!./samples/BaseContainer';
import sourceContainers from '!raw-loader!./samples/Containers1';

const sourceList = [sourceBaseContainer, sourceContainers];

const Example1 = () => {
  return (
    <React.Fragment>
      <Text>Переиспользование state</Text>
      <CodePaneColumns list={sourceList} />
    </React.Fragment>
  );
};

export { Example1 };
