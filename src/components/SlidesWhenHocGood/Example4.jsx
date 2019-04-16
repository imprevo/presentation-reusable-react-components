/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text, Slide } from 'spectacle';
import { CodePaneColumns } from '../CodePaneColumns';
import sourceComponent3 from '!raw-loader!./samples/Component5';

const sourceList = [sourceComponent3];

const Example4 = () => {
  return (
    <Slide>
      <Text>Композиция декорируемых декораторов</Text>
      <CodePaneColumns list={sourceList} />
    </Slide>
  );
};

export { Example4 };
