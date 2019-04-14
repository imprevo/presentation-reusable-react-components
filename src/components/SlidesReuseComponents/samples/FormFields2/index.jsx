import React from 'react';

class FormFields extends React.Component {
  renderField({ label, name, error }) {
    return (
      <div className="form-field">
        <label htmlFor={name}>{label}</label>
        <input id={name} name={name} type="text" />
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
        })}
        {this.renderField({
          label: 'Last name',
          name: 'lastName',
          error: 'Error message',
        })}
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export { FormFields };
