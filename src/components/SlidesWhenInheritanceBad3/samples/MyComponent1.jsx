import React from 'react';
import { BaseComponent } from './BaseComponent1';

class MyComponent extends BaseComponent {
  renderTitle() {
    return 'My title';
  }
  renderContent() {
    return 'My content';
  }
}

export { MyComponent };
