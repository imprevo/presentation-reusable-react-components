/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { CodePaneColumns } from '../CodePaneColumns';
import sourceComponent1 from '!raw-loader!./samples/Component1';
import sourceComponent2 from '!raw-loader!./samples/Component2';

const sourceList = [sourceComponent1, sourceComponent2];

const Example = () => <CodePaneColumns list={sourceList} />;

export { Example };
