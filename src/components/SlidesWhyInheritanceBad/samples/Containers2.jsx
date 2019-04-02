import React from 'react';
import { FetchContainer } from './FetchContainer2';

class Container extends FetchContainer {
  componentDidMount() {
    console.log('mount!');
  }
  render() {
    const { data, loading } = this.state;
    if (loading) return 'loading...';
    return (
      <div>
        {data}
        <button onClick={this.loadData}>reload</button>
      </div>
    );
  }
}

export { Container };
