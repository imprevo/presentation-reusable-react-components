import React from 'react';

class BaseComponent extends React.Component {
  renderTitle() {
    return 'Base title';
  }
  renderContent() {
    return 'Base content';
  }
  render() {
    return (
      <div>
        <h3>{this.renderTitle()}</h3>
        <p>{this.renderContent()}</p>
      </div>
    );
  }
}

export { BaseComponent };
