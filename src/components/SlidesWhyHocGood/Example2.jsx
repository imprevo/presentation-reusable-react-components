/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text } from 'spectacle';
import { CodePaneColumns } from '../CodePaneColumns';
import sourceComponent3 from '!raw-loader!./samples/Component3';

const sourceList = [sourceComponent3];

const Example2 = () => {
  return (
    <React.Fragment>
      <Text>Композиция декорируемых декораторов</Text>
      <CodePaneColumns list={sourceList} />
    </React.Fragment>
  );
};

export { Example2 };
