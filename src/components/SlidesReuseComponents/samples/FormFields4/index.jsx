import React from 'react';

const professionList = [
  { label: 'Frontend', value: 1 },
  { label: 'Backend', value: 2 },
  { label: 'QA', value: 3 },
];

class FormFields extends React.Component {
  renderField({ label, name, error, type, options }) {
    let input;
    switch (type) {
      case 'textarea':
        input = <textarea id={name} name={name} />;
        break;
      case 'select':
        input = (
          <select id={name} name={name}>
            {options.map(({ label, value }) => (
              <option value={value}>{label}</option>
            ))}
          </select>
        );
        break;
      default:
        input = <input id={name} name={name} type="text" />;
        break;
    }
    return (
      <div className="form-field">
        <label htmlFor={name}>{label}:</label>
        {input}
        <p>{error}</p>
      </div>
    );
  }
  render() {
    return (
      <form>
        {this.renderField({
          label: 'First name',
          name: 'firstName',
          error: 'Error message',
          type: 'text',
        })}
        {this.renderField({
          label: 'Last name',
          name: 'lastName',
          error: 'Error message',
          type: 'text',
        })}
        {this.renderField({
          label: 'Bio',
          name: 'bio',
          error: 'Error message',
          type: 'textarea',
        })}
        {this.renderField({
          label: 'Profession',
          name: 'profession',
          error: 'Error message',
          type: 'select',
          options: professionList,
        })}
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export { FormFields };
