/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text, Slide } from 'spectacle';
import { CodePaneColumns } from '../CodePaneColumns';
import sourceComponent from '!raw-loader!./samples/Component1';

const sourceList = [sourceComponent];

const Example1 = () => {
  return (
    <Slide>
      <Text>Композиция</Text>
      <CodePaneColumns list={sourceList} />
    </Slide>
  );
};

export { Example1 };
