/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text } from 'spectacle';
import { CodePaneColumns } from '../CodePaneColumns';
import sourceSelectOption from '!raw-loader!./samples/SelectOption';

const sourceList = [sourceSelectOption];

const Example1 = () => {
  return (
    <React.Fragment>
      <Text>
        Нужно было добавить атрибут, который не поддерживается сторонней
        библиотекой
      </Text>
      <CodePaneColumns list={sourceList} />
    </React.Fragment>
  );
};

export { Example1 };
