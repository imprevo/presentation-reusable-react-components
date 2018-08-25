/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text, Layout, Fill } from 'spectacle';
import { CodePane } from '../CodePane';
import sourceComponent1 from '!raw-loader!../MyComponent1';
import sourceComponent2 from '!raw-loader!../MyComponent2';

const Example = () => {
  return (
    <React.Fragment>
      <Text>Пример</Text>
      <Layout>
        <Fill>
          <CodePane source={sourceComponent1} />
        </Fill>
        <Fill>
          <CodePane source={sourceComponent2} />
        </Fill>
      </Layout>
    </React.Fragment>
  );
};

export { Example };
