/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text } from 'spectacle';
import { CodePaneColumns } from '../CodePaneColumns';
import source from '!raw-loader!./samples/FormFields3';

const sourceList = [source];

const Example3 = () => {
  return (
    <React.Fragment>
      <Text>v3</Text>
      <CodePaneColumns list={sourceList} />
    </React.Fragment>
  );
};

export { Example3 };
