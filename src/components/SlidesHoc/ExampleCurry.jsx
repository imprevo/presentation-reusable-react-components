/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text } from 'spectacle';
import { CodePaneColumns } from '../CodePaneColumns';
import sourceCurry from '!raw-loader!./samples/curry';

const sourceList = [sourceCurry];

const ExampleCurry = () => {
  return (
    <React.Fragment>
      <Text>Каррирование (currying)</Text>
      <CodePaneColumns list={sourceList} />
    </React.Fragment>
  );
};

export { ExampleCurry };
