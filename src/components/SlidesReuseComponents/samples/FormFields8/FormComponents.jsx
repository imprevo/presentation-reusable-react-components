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

const FieldLayout = ({ label, name, error, children }) => (
  <div className="form-field">
    <label htmlFor={name}>{label}:</label>
    {children}
    <p>{error}</p>
  </div>
);

export { FieldTextarea, FieldText, FieldSelect, FieldLayout };
