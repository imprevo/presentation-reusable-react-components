import React from 'react';
import { Slide } from 'spectacle';
import { FormFields } from './samples/FormFields4';
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

const Demo4 = () => (
  <Slide>
    <Columns list={list} />
  </Slide>
);

export { Demo4 };
