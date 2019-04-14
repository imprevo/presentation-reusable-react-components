import React from 'react';
import { FormFields } from './samples/FormFields8';
import { Columns } from '../Columns';

const list = [
  {
    body: (
      <div style={{ maxWidth: 500, margin: 'auto' }}>
        <FormFields />
      </div>
    ),
  },
];

const Demo8 = () => <Columns list={list} />;

export { Demo8 };
