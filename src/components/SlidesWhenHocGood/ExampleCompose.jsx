/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text, Slide } from 'spectacle';
import { CodePaneColumns } from '../CodePaneColumns';
import sourceComponent1 from '!raw-loader!redux/src/compose';

const sourceList = [sourceComponent1];

const ExampleCompose = () => {
  return (
    <Slide>
      <Text>compose из redux</Text>
      <CodePaneColumns list={sourceList} />
    </Slide>
  );
};

export { ExampleCompose };
