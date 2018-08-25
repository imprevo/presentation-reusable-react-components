import React from 'react';
import PropTypes from 'prop-types';

const MyComponent1 = ({ counter, onIncrease, onDecrease }) => {
  return (
    <div className="my-component-1">
      Counter: {counter}
      <button onClick={onIncrease}>Increase</button>
      <button onClick={onDecrease}>Decrease</button>
    </div>
  );
};

MyComponent1.propTypes = {
  counter: PropTypes.number,
  onIncrease: PropTypes.func,
  onDecrease: PropTypes.func,
};

export { MyComponent1 };
