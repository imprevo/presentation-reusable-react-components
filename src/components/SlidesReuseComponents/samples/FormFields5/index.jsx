import React from 'react';
import { FormField } from './FormField';

const professionList = [
  { label: 'Frontend', value: 1 },
  { label: 'Backend', value: 2 },
  { label: 'QA', value: 3 },
];

class FormFields extends React.Component {
  render() {
    return (
      <form>
        <FormField
          label="First name"
          name="firstName"
          error="Error message"
          type="text"
        />
        <FormField
          label="Last name"
          name="lastName"
          error="Error message"
          type="text"
        />
        <FormField
          label="Bio"
          name="bio"
          error="Error message"
          type="textarea"
        />
        <FormField
          label="Profession"
          name="profession"
          error="Error message"
          type="select"
          options={professionList}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export { FormFields };
