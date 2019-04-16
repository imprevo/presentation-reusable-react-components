/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text } from 'spectacle';
import { CodePaneColumns } from '../CodePaneColumns';
import sourceBaseContainer from '!raw-loader!./samples/BaseContainer';
import sourceContainers from '!raw-loader!./samples/Containers3';

const sourceList = [sourceBaseContainer, sourceContainers];

const Example3 = () => {
  return (
    <React.Fragment>
      <Text>Нужно смержить состояния (fixed)</Text>
      <CodePaneColumns list={sourceList} />
    </React.Fragment>
  );
};

export { Example3 };
