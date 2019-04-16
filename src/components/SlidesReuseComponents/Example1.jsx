/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text, Slide } from 'spectacle';
import { CodePaneColumns } from '../CodePaneColumns';
import source from '!raw-loader!./samples/FormFields1';

const sourceList = [source];

const Example1 = () => {
  return (
    <Slide>
      <Text>Форма</Text>
      <CodePaneColumns list={sourceList} />
    </Slide>
  );
};

export { Example1 };
