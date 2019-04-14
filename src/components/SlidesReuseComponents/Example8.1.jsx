/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text } from 'spectacle';
import { CodePaneColumns } from '../CodePaneColumns';
import sourceFormComponents from '!raw-loader!./samples/FormFields8/FormComponents';
import sourceFormFields from '!raw-loader!./samples/FormFields8/FormFields';

const sourceList = [sourceFormComponents, sourceFormFields];

const Example8_1 = () => {
  return (
    <React.Fragment>
      <Text>Разделим общий компонент</Text>
      <CodePaneColumns list={sourceList} />
    </React.Fragment>
  );
};

export { Example8_1 };
