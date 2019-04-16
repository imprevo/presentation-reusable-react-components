import React from 'react';

const FieldTextarea = ({ name }) => <textarea id={name} name={name} />;

const FieldText = ({ name }) => <input id={name} name={name} type="text" />;

const FieldSelect = ({ name, options }) => (
  <select id={name} name={name}>
    {options.map(({ label, value }, key) => (
      <option key={key} value={value}>
        {label}
      </option>
    ))}
  </select>
);

export { FieldTextarea, FieldText, FieldSelect };
