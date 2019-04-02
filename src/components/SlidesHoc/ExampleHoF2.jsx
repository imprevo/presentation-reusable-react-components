/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text } from 'spectacle';
import { CodePaneColumns } from '../CodePaneColumns';
import sourceHoF from '!raw-loader!./samples/hof2';

const sourceList = [sourceHoF];

const ExampleHoF2 = () => {
  return (
    <React.Fragment>
      <Text>Соединяем</Text>
      <CodePaneColumns list={sourceList} />
    </React.Fragment>
  );
};

export { ExampleHoF2 };
