/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text, Slide } from 'spectacle';
import { CodePaneColumns } from '../CodePaneColumns';
import source from '!raw-loader!./samples/FormFields4';

const sourceList = [source];

const Example4 = () => {
  return (
    <Slide>
      <Text>Добавим селект...</Text>
      <CodePaneColumns list={sourceList} />
    </Slide>
  );
};

export { Example4 };
