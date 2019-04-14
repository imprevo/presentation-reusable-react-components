/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text } from 'spectacle';
import { CodePaneColumns } from '../CodePaneColumns';
import source from '!raw-loader!./samples/FormFields1';

const sourceList = [source];

const Example1 = () => {
  return (
    <React.Fragment>
      <Text>v1</Text>
      <CodePaneColumns list={sourceList} />
    </React.Fragment>
  );
};

export { Example1 };
