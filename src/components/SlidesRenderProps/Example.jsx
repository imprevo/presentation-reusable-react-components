/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text } from 'spectacle';
import { CodePaneColumns } from '../CodePaneColumns';
import sourceCounter from '!raw-loader!./samples/Counter';
import sourceContainers from '!raw-loader!./samples/Containers';

const sourceList = [sourceCounter, sourceContainers];

const Example = () => {
  return (
    <React.Fragment>
      <Text>Код</Text>
      <CodePaneColumns list={sourceList} />
    </React.Fragment>
  );
};

export { Example };
