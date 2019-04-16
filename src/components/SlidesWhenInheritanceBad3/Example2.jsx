/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text } from 'spectacle';
import { CodePaneColumns } from '../CodePaneColumns';
import sourceBaseComponent from '!raw-loader!./samples/BaseComponent2';
import sourceMyComponent from '!raw-loader!./samples/MyComponent2';

const sourceList = [sourceBaseComponent, sourceMyComponent];

const Example2 = () => {
  return (
    <React.Fragment>
      <Text>Обернем базовый компонент в HoC</Text>
      <CodePaneColumns list={sourceList} />
    </React.Fragment>
  );
};

export { Example2 };
