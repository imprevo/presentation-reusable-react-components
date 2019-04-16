/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text } from 'spectacle';
import { CodePaneColumns } from '../CodePaneColumns';
import sourceComponent1 from '!raw-loader!./samples/Component3';
import sourceComponent2 from '!raw-loader!./samples/Component4';

const sourceList = [sourceComponent1, sourceComponent2];

const Example3 = () => {
  return (
    <React.Fragment>
      <Text>Композиция декораторов</Text>
      <CodePaneColumns list={sourceList} />
    </React.Fragment>
  );
};

export { Example3 };
