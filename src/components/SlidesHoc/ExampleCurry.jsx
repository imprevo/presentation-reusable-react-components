/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text, Slide } from 'spectacle';
import { CodePaneColumns } from '../CodePaneColumns';
import sourceCurry from '!raw-loader!./samples/curry';

const sourceList = [sourceCurry];

const ExampleCurry = () => {
  return (
    <Slide>
      <Text>Каррирование (currying)</Text>
      <CodePaneColumns list={sourceList} />
    </Slide>
  );
};

export { ExampleCurry };
