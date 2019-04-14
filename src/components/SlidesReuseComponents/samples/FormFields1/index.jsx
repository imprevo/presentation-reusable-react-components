import React from 'react';

class FormFields extends React.Component {
  render() {
    return (
      <form>
        <div className="form-field">
          <label htmlFor="firstName">First name:</label>
          <input id="firstName" name="firstName" type="text" />
          <p>Error message</p>
        </div>
        <div className="form-field">
          <label htmlFor="lastName">Last name:</label>
          <input id="lastName" name="lastName" type="text" />
          <p>Error message</p>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export { FormFields };
