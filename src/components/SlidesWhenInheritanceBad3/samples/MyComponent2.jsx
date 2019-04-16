import React from 'react';
import { BaseComponent } from './BaseComponent2';

class MyComponent extends BaseComponent {
  renderTitle() {
    return 'My title';
  }
  renderContent() {
    return 'My content';
  }
}

export { MyComponent };
