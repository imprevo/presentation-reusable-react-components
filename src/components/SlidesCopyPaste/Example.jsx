/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text, Layout, Fill } from 'spectacle';
import { CodePane } from '../CodePane';
import sourceContainer1 from '!raw-loader!./samples/Container1';
import sourceContainer2 from '!raw-loader!./samples/Container2';

const Example = () => {
  return (
    <React.Fragment>
      <Text>Пример</Text>
      <Layout>
        <Fill>
          <CodePane source={sourceContainer1} />
        </Fill>
        <Fill>
          <CodePane source={sourceContainer2} />
        </Fill>
      </Layout>
    </React.Fragment>
  );
};

export { Example };
