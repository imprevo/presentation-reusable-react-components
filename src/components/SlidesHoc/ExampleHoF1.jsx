/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text } from 'spectacle';
import { CodePaneColumns } from '../CodePaneColumns';
import sourceHoF from '!raw-loader!./samples/hof1';

const sourceList = [sourceHoF];

const ExampleHoF1 = () => {
  return (
    <React.Fragment>
      <Text>Higher-order Function</Text>
      <CodePaneColumns list={sourceList} />
    </React.Fragment>
  );
};

export { ExampleHoF1 };
