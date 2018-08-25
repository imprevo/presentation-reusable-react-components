import React from 'react';
import PropTypes from 'prop-types';

const MyComponent2 = ({ counter, onIncrease, onDecrease }) => {
  return (
    <div className="my-component-2">
      <button onClick={onIncrease}>+</button>
      {counter}
      <button onClick={onDecrease}>-</button>
    </div>
  );
};

MyComponent2.propTypes = {
  counter: PropTypes.number,
  onIncrease: PropTypes.func,
  onDecrease: PropTypes.func,
};

export { MyComponent2 };
