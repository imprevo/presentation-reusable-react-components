/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text, Slide } from 'spectacle';
import { CodePaneColumns } from '../CodePaneColumns';
import source from '!raw-loader!./samples/FormFields3';

const sourceList = [source];

const Example3 = () => {
  return (
    <Slide>
      <Text>Добавим textarea</Text>
      <CodePaneColumns list={sourceList} />
    </Slide>
  );
};

export { Example3 };
