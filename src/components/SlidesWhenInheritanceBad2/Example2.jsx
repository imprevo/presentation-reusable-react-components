/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text } from 'spectacle';
import { CodePaneColumns } from '../CodePaneColumns';
import sourceBaseContainer from '!raw-loader!./samples/BaseContainer';
import sourceContainers from '!raw-loader!./samples/Containers2';

const sourceList = [sourceBaseContainer, sourceContainers];

const Example2 = () => {
  return (
    <React.Fragment>
      <Text>Добавим состояние</Text>
      <CodePaneColumns list={sourceList} />
    </React.Fragment>
  );
};

export { Example2 };
