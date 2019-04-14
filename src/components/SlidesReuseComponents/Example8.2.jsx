/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text } from 'spectacle';
import { CodePaneColumns } from '../CodePaneColumns';
import sourceFormFields from '!raw-loader!./samples/FormFields8';

const sourceList = [sourceFormFields];

const Example8_2 = () => {
  return (
    <React.Fragment>
      <Text>Та-да!</Text>
      <CodePaneColumns list={sourceList} />
    </React.Fragment>
  );
};

export { Example8_2 };
