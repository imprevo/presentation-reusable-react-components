/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text, Slide } from 'spectacle';
import { CodePaneColumns } from '../CodePaneColumns';
import sourceBaseContainer from '!raw-loader!./samples/BaseContainer';
import sourceContainers from '!raw-loader!./samples/Containers';

const sourceList = [sourceBaseContainer, sourceContainers];

const Example = () => {
  return (
    <Slide>
      <Text>Наследование от базового контейнера</Text>
      <CodePaneColumns list={sourceList} />
    </Slide>
  );
};

export { Example };
