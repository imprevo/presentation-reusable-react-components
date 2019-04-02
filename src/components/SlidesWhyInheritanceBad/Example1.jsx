/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text } from 'spectacle';
import { CodePaneColumns } from '../CodePaneColumns';
import sourceFetchContainer from '!raw-loader!./samples/FetchContainer1';
import sourceContainers from '!raw-loader!./samples/Containers1';

const sourceList = [sourceFetchContainer, sourceContainers];

const Example1 = () => {
  return (
    <React.Fragment>
      <Text>Загрузка данных</Text>
      <CodePaneColumns list={sourceList} />
    </React.Fragment>
  );
};

export { Example1 };
