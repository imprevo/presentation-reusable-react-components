/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text } from 'spectacle';
import { CodePaneColumns } from '../CodePaneColumns';
import sourceFormField from '!raw-loader!./samples/FormFields6/FormField';

const sourceList = [sourceFormField];

const Example6 = () => {
  return (
    <React.Fragment>
      <Text>Уберем switch</Text>
      <CodePaneColumns list={sourceList} />
    </React.Fragment>
  );
};

export { Example6 };
