import React from 'react';

class FormField extends React.Component {
  renderInput() {
    const { type } = this.props;
    switch (type) {
      case 'textarea':
        return this.renderTextarea();
      case 'select':
        return this.renderSelect();
      default:
        return this.renderText();
    }
  }
  renderTextarea() {
    const { name } = this.props;
    return <textarea id={name} name={name} />;
  }
  renderText() {
    const { name } = this.props;
    return <input id={name} name={name} type="text" />;
  }
  renderSelect() {
    const { name, options } = this.props;
    return (
      <select id={name} name={name}>
        {options.map(({ label, value }, key) => (
          <option key={key} value={value}>
            {label}
          </option>
        ))}
      </select>
    );
  }
  render() {
    const { label, name, error } = this.props;
    return (
      <div className="form-field">
        <label htmlFor={name}>{label}:</label>
        {this.renderInput()}
        <p>{error}</p>
      </div>
    );
  }
}

export { FormField };
