/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text } from 'spectacle';
import { CodePaneColumns } from '../CodePaneColumns';
import sourceContainer1 from '!raw-loader!./samples/Container1';
import sourceContainer2 from '!raw-loader!./samples/Container2';

const sourceList = [sourceContainer1, sourceContainer2];

const Example = () => {
  return (
    <React.Fragment>
      <Text>Код</Text>
      <CodePaneColumns list={sourceList} />
    </React.Fragment>
  );
};

export { Example };
