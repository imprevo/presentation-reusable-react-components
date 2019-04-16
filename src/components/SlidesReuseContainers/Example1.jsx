/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text, Slide } from 'spectacle';
import { CodePaneColumns } from '../CodePaneColumns';
import sourceComponent1 from '!raw-loader!../MyComponent1';
import sourceComponent2 from '!raw-loader!../MyComponent2';

const sourceList = [sourceComponent1, sourceComponent2];

const Example1 = () => {
  return (
    <Slide>
      <Text>2 разных компонента</Text>
      <CodePaneColumns list={sourceList} />
    </Slide>
  );
};

export { Example1 };
