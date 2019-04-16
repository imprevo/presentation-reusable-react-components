/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text, Slide } from 'spectacle';
import { CodePaneColumns } from '../CodePaneColumns';
import sourceFormFields from '!raw-loader!./samples/FormFields5';
import sourceFormField from '!raw-loader!./samples/FormFields5/FormField';

const sourceList = [sourceFormField, sourceFormFields];

const Example5 = () => {
  return (
    <Slide>
      <Text>Разделим форму и компоненты</Text>
      <CodePaneColumns list={sourceList} />
    </Slide>
  );
};

export { Example5 };
