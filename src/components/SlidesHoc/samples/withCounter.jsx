import React from 'react';

function withCounter(WrappedComponent) {
  return class extends React.Component {
    state = {
      counter: 0,
    };
    onIncrease = () => {
      this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    };
    onDecrease = () => {
      this.setState((prevState) => ({ counter: prevState.counter - 1 }));
    };
    render() {
      return (
        <WrappedComponent
          onDecrease={this.onDecrease}
          onIncrease={this.onIncrease}
          counter={this.state.counter}
          {...this.props}
        />
      );
    }
  };
}

export { withCounter };
