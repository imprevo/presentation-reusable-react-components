/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text, Slide } from 'spectacle';
import { CodePaneColumns } from '../CodePaneColumns';
import sourceFormFields from '!raw-loader!./samples/FormFields8';

const sourceList = [sourceFormFields];

const Example8_2 = () => {
  return (
    <Slide>
      <Text>Та-да!</Text>
      <CodePaneColumns list={sourceList} />
    </Slide>
  );
};

export { Example8_2 };
