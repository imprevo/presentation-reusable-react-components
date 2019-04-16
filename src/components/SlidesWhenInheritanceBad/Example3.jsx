/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text, Slide } from 'spectacle';
import { CodePaneColumns } from '../CodePaneColumns';
import sourceFetchContainer from '!raw-loader!./samples/FetchContainer2';
import sourceContainers from '!raw-loader!./samples/Containers3';

const sourceList = [sourceFetchContainer, sourceContainers];

const Example3 = () => {
  return (
    <Slide>
      <Text>Загрузка данных при появлении компонента (fixed)</Text>
      <CodePaneColumns list={sourceList} />
    </Slide>
  );
};

export { Example3 };
