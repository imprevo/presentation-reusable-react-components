/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text } from 'spectacle';
import { CodePaneColumns } from '../CodePaneColumns';
import source from '!raw-loader!./samples/FormFields2';

const sourceList = [source];

const Example2 = () => {
  return (
    <React.Fragment>
      <Text>Переиспользуем поле</Text>
      <CodePaneColumns list={sourceList} />
    </React.Fragment>
  );
};

export { Example2 };
