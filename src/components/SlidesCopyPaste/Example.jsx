/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Text, Layout, Fill } from 'spectacle';
import { CodePane } from '../CodePane';
import sourceComponent1 from '!raw-loader!./raw/Component1.jsx';
import sourceComponent2 from '!raw-loader!./raw/Component2.jsx';

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
