/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text } from 'spectacle';
import { CodePaneColumns } from '../CodePaneColumns';
import sourceComponent1 from '!raw-loader!../MyComponent1';
import sourceComponent2 from '!raw-loader!../MyComponent2';

const sourceList = [sourceComponent1, sourceComponent2];

const Example = () => {
  return (
    <React.Fragment>
      <Text>Пример</Text>
      <CodePaneColumns sourceList={sourceList} />
    </React.Fragment>
  );
};

export { Example };
