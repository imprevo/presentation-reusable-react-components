/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text, Slide } from 'spectacle';
import { CodePaneColumns } from '../CodePaneColumns';
import sourceFetchContainer from '!raw-loader!./samples/FetchContainer1';
import sourceContainers from '!raw-loader!./samples/Containers1';

const sourceList = [sourceFetchContainer, sourceContainers];

const Example1 = () => {
  return (
    <Slide>
      <Text>Загрузка данных</Text>
      <CodePaneColumns list={sourceList} />
    </Slide>
  );
};

export { Example1 };
