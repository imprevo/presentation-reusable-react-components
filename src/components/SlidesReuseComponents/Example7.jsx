/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text } from 'spectacle';
import { CodePaneColumns } from '../CodePaneColumns';
import sourceFormComponents from '!raw-loader!./samples/FormFields7/FormComponents';
import sourceFormField from '!raw-loader!./samples/FormFields7/FormField';

const sourceList = [sourceFormComponents, sourceFormField];

const Example7 = () => {
  return (
    <React.Fragment>
      <Text>v7</Text>
      <CodePaneColumns list={sourceList} />
    </React.Fragment>
  );
};

export { Example7 };
