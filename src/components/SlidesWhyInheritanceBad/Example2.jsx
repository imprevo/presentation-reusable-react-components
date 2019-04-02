/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text } from 'spectacle';
import { CodePaneColumns } from '../CodePaneColumns';
import sourceFetchContainer from '!raw-loader!./samples/FetchContainer2';
import sourceContainers from '!raw-loader!./samples/Containers2';

const sourceList = [sourceFetchContainer, sourceContainers];

const Example2 = () => {
  return (
    <React.Fragment>
      <Text>Код</Text>
      <CodePaneColumns list={sourceList} />
    </React.Fragment>
  );
};

export { Example2 };
