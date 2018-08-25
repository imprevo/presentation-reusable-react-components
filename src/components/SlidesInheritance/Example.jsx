/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text, Layout, Fill } from 'spectacle';
import { CodePane } from '../CodePane';
import sourceBaseContainer from '!raw-loader!./samples/BaseContainer';
import sourceContainers from '!raw-loader!./samples/Containers';

const Example = () => {
  return (
    <React.Fragment>
      <Text>Пример</Text>
      <Layout>
        <Fill>
          <CodePane source={sourceBaseContainer} />
        </Fill>
        <Fill>
          <CodePane source={sourceContainers} />
        </Fill>
      </Layout>
    </React.Fragment>
  );
};

export { Example };
