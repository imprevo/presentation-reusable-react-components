import React from 'react';

class BaseContainer extends React.Component {
  state = {
    counter: 0,
  };
  onIncrease = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };
  onDecrease = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - 1,
    }));
  };
}

export { BaseContainer };
