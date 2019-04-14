/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text } from 'spectacle';
import { CodePaneColumns } from '../CodePaneColumns';
import source from '!raw-loader!./samples/FormFields4';

const sourceList = [source];

const Example4 = () => {
  return (
    <React.Fragment>
      <Text>Добавим селект...</Text>
      <CodePaneColumns list={sourceList} />
    </React.Fragment>
  );
};

export { Example4 };
