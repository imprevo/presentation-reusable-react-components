import React from 'react';
import {
  FieldTextarea,
  FieldText,
  FieldSelect,
  FieldLayout,
} from './FormComponents';

const FormFieldText = (props) => (
  <FieldLayout {...props}>
    <FieldText {...props} />
  </FieldLayout>
);

const FormFieldTextarea = (props) => (
  <FieldLayout {...props}>
    <FieldTextarea {...props} />
  </FieldLayout>
);

const FormFieldSelect = (props) => (
  <FieldLayout {...props}>
    <FieldSelect {...props} />
  </FieldLayout>
);

export { FormFieldText, FormFieldTextarea, FormFieldSelect };
