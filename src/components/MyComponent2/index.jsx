import React from 'react';
import PropTypes from 'prop-types';

class MyComponent2 extends React.Component {
  static propTypes = {
    counter: PropTypes.number,
    onIncrease: PropTypes.func,
    onDecrease: PropTypes.func,
  };
  render() {
    const { counter, onIncrease, onDecrease } = this.props;
    return (
      <div className="my-component-2">
        <button onClick={onDecrease}>-</button>
        {counter}
        <button onClick={onIncrease}>+</button>
      </div>
    );
  }
}

export { MyComponent2 };
