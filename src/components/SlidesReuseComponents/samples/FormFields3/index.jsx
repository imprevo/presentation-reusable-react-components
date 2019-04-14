import React from 'react';

class FormFields extends React.Component {
  renderField({ label, name, error, type }) {
    return (
      <div className="form-field">
        <label htmlFor={name}>{label}:</label>
        {type === 'textarea' ? (
          <textarea id={name} name={name} />
        ) : (
          <input id={name} name={name} type="text" />
        )}
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
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export { FormFields };
