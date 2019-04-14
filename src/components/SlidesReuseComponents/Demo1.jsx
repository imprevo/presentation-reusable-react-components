import React from 'react';
import { FormFields } from './samples/FormFields1';
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

const Demo1 = () => <Columns list={list} />;

export { Demo1 };
