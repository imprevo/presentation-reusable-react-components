/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text, Slide } from 'spectacle';
import { CodePaneColumns } from '../CodePaneColumns';
import sourceComponent1 from '!raw-loader!./samples/Component3';
import sourceComponent2 from '!raw-loader!./samples/Component4';

const sourceList = [sourceComponent1, sourceComponent2];

const Example3 = () => {
  return (
    <Slide>
      <Text>Композиция декораторов</Text>
      <CodePaneColumns list={sourceList} />
    </Slide>
  );
};

export { Example3 };
