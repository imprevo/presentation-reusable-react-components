/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text } from 'spectacle';
import { CodePaneColumns } from '../CodePaneColumns';
import sourceBaseComponent from '!raw-loader!./samples/BaseComponent1';
import sourceMyComponent from '!raw-loader!./samples/MyComponent1';

const sourceList = [sourceBaseComponent, sourceMyComponent];

const Example1 = () => {
  return (
    <React.Fragment>
      <Text>Переопределим методы рендера</Text>
      <CodePaneColumns list={sourceList} />
    </React.Fragment>
  );
};

export { Example1 };
