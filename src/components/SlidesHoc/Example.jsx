/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text } from 'spectacle';
import { CodePaneColumns } from '../CodePaneColumns';
import sourceHoc from '!raw-loader!./samples/withCounter';
import sourceContainers from '!raw-loader!./samples/Containers';

const sourceList = [sourceHoc, sourceContainers];

const Example = () => {
  return (
    <React.Fragment>
      <Text>Код</Text>
      <CodePaneColumns list={sourceList} />
    </React.Fragment>
  );
};

export { Example };
