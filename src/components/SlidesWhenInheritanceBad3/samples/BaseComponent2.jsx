import React from 'react';

const someHoC = (Wrapped) =>
  class extends React.Component {
    render() {
      return <Wrapped {...this.props} />;
    }
  };

class BaseView extends React.Component {
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

const BaseComponent = someHoC(BaseView);

export { BaseComponent };
