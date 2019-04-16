/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text, Slide } from 'spectacle';
import { CodePaneColumns } from '../CodePaneColumns';
import sourceFetchContainer from '!raw-loader!./samples/FetchContainer2';
import sourceContainers from '!raw-loader!./samples/Containers2';

const sourceList = [sourceFetchContainer, sourceContainers];

const Example2 = () => {
  return (
    <Slide>
      <Text>Загрузка данных при появлении компонента</Text>
      <CodePaneColumns list={sourceList} />
    </Slide>
  );
};

export { Example2 };
