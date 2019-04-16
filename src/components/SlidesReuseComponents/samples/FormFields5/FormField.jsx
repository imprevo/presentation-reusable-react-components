import React from 'react';

class FormField extends React.Component {
  render() {
    const { label, name, error, type, options } = this.props;
    let input;
    switch (type) {
      case 'textarea':
        input = <textarea id={name} name={name} />;
        break;
      case 'select':
        input = (
          <select id={name} name={name}>
            {options.map(({ label, value }, key) => (
              <option key={key} value={value}>
                {label}
              </option>
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
}

export { FormField };
