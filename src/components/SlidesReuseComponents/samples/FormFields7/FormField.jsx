import React from 'react';
import { FieldTextarea, FieldText, FieldSelect } from './FormComponents';

class FormField extends React.Component {
  renderInput() {
    const { type, name, options } = this.props;
    switch (type) {
      case 'textarea':
        return <FieldTextarea name={name} />;
      case 'select':
        return <FieldSelect name={name} options={options} />;
      default:
        return <FieldText name={name} />;
    }
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
