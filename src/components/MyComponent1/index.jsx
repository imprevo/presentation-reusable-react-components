import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

class MyComponent1 extends React.Component {
  static propTypes = {
    counter: PropTypes.number,
    onIncrease: PropTypes.func,
    onDecrease: PropTypes.func,
  };
  render() {
    const { counter, onIncrease, onDecrease } = this.props;
    return (
      <div className="my-component-1">
        <div>Counter: {counter}</div>
        <button onClick={onIncrease}>Increase</button>
        <button onClick={onDecrease}>Decrease</button>
      </div>
    );
  }
}

export { MyComponent1 };
