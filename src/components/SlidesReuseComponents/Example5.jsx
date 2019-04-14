/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text } from 'spectacle';
import { CodePaneColumns } from '../CodePaneColumns';
import sourceFormFields from '!raw-loader!./samples/FormFields5';
import sourceFormField from '!raw-loader!./samples/FormFields5/FormField';

const sourceList = [sourceFormField, sourceFormFields];

const Example5 = () => {
  return (
    <React.Fragment>
      <Text>v5</Text>
      <CodePaneColumns list={sourceList} />
    </React.Fragment>
  );
};

export { Example5 };
