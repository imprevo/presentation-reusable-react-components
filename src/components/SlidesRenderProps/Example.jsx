/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text, Layout, Fill } from 'spectacle';
import { CodePane } from '../CodePane';
import sourceCounter from '!raw-loader!./samples/Counter';
import sourceContainers from '!raw-loader!./samples/Containers';

const Example = () => {
  return (
    <React.Fragment>
      <Text>Пример</Text>
      <Layout>
        <Fill>
          <CodePane source={sourceCounter} />
        </Fill>
        <Fill>
          <CodePane source={sourceContainers} />
        </Fill>
      </Layout>
    </React.Fragment>
  );
};

export { Example };
