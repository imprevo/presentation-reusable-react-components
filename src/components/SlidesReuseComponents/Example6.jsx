/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text, Slide } from 'spectacle';
import { CodePaneColumns } from '../CodePaneColumns';
import sourceFormField from '!raw-loader!./samples/FormFields6/FormField';

const sourceList = [sourceFormField];

const Example6 = () => {
  return (
    <Slide>
      <Text>Уберем switch</Text>
      <CodePaneColumns list={sourceList} />
    </Slide>
  );
};

export { Example6 };
