/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text, Slide } from 'spectacle';
import { CodePaneColumns } from '../CodePaneColumns';
import sourceBaseComponent from '!raw-loader!./samples/BaseComponent2';
import sourceMyComponent from '!raw-loader!./samples/MyComponent2';

const sourceList = [sourceBaseComponent, sourceMyComponent];

const Example2 = () => {
  return (
    <Slide>
      <Text>Обернем базовый компонент в HoC</Text>
      <CodePaneColumns list={sourceList} />
    </Slide>
  );
};

export { Example2 };
