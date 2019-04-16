/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text, Slide } from 'spectacle';
import { CodePaneColumns } from '../CodePaneColumns';
import sourceHoF from '!raw-loader!./samples/hof1';

const sourceList = [sourceHoF];

const ExampleHoF1 = () => {
  return (
    <Slide>
      <Text>Higher-order Function</Text>
      <CodePaneColumns list={sourceList} />
    </Slide>
  );
};

export { ExampleHoF1 };
