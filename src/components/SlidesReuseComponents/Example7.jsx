/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text, Slide } from 'spectacle';
import { CodePaneColumns } from '../CodePaneColumns';
import sourceFormComponents from '!raw-loader!./samples/FormFields7/FormComponents';
import sourceFormField from '!raw-loader!./samples/FormFields7/FormField';

const sourceList = [sourceFormComponents, sourceFormField];

const Example7 = () => {
  return (
    <Slide>
      <Text>Еще разделим компоненты</Text>
      <CodePaneColumns list={sourceList} />
    </Slide>
  );
};

export { Example7 };
