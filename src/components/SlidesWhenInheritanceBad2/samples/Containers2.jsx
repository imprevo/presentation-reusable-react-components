import React from 'react';
import { BaseContainer } from './BaseContainer';

class Container extends BaseContainer {
  state = {
    isShow: true,
  };
  onClick = () => this.setState((state) => ({ isShow: !state.isShow }));
  render() {
    const { data, isShow } = this.state;
    return (
      <div>
        <button onClick={this.onClick}>{isShow ? 'hide' : 'show'}</button>
        {isShow && data.map((item, key) => <div key={key}>{item}</div>)}
      </div>
    );
  }
}

export { Container };
