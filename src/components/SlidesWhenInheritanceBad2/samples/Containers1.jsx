import React from 'react';
import { BaseContainer } from './BaseContainer';

class Container extends BaseContainer {
  render() {
    const { data } = this.state;
    return <div>{data.map((item, key) => <div key={key}>{item}</div>)}</div>;
  }
}

export { Container };
