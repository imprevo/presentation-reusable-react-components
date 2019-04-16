/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text } from 'spectacle';
import { CodePaneColumns } from '../CodePaneColumns';
import sourceComponent from '!raw-loader!./samples/Component1';

const sourceList = [sourceComponent];

const Example1 = () => {
  return (
    <React.Fragment>
      <Text>Композиция</Text>
      <CodePaneColumns list={sourceList} />
    </React.Fragment>
  );
};

export { Example1 };
