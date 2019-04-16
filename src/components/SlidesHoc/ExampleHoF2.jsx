/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text, Slide } from 'spectacle';
import { CodePaneColumns } from '../CodePaneColumns';
import sourceHoF from '!raw-loader!./samples/hof2';

const sourceList = [sourceHoF];

const ExampleHoF2 = () => {
  return (
    <Slide>
      <Text>Соединяем</Text>
      <CodePaneColumns list={sourceList} />
    </Slide>
  );
};

export { ExampleHoF2 };
