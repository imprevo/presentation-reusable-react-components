/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text, Slide } from 'spectacle';
import { CodePaneColumns } from '../CodePaneColumns';
import sourceHoc from '!raw-loader!./samples/withCounter';
import sourceContainers from '!raw-loader!./samples/Containers';

const sourceList = [sourceHoc, sourceContainers];

const Example = () => {
  return (
    <Slide>
      <Text>Higher-order Component</Text>
      <CodePaneColumns list={sourceList} />
    </Slide>
  );
};

export { Example };
