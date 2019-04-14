import React from 'react';
import {
  FormFieldText,
  FormFieldTextarea,
  FormFieldSelect,
} from './FormFields';

const professionList = [
  { label: 'Frontend', value: 1 },
  { label: 'Backend', value: 2 },
  { label: 'QA', value: 3 },
];

class FormFields extends React.Component {
  render() {
    return (
      <form>
        <FormFieldText
          label="First name"
          name="firstName"
          error="Error message"
        />
        <FormFieldText
          label="Last name"
          name="lastName"
          error="Error message"
        />
        <FormFieldTextarea label="Bio" name="bio" error="Error message" />
        <FormFieldSelect
          label="Profession"
          name="profession"
          error="Error message"
          options={professionList}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export { FormFields };
