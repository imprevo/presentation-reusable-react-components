import React from 'react';
import { Heading, Text } from 'spectacle';

const Title = () => {
  return (
    <div>
      <Heading size={3} caps textColor="tertiary">
        Когда наследование это единственный способ
      </Heading>
      <Text textColor="tertiary">(но все равно плохо)</Text>
    </div>
  );
};

export { Title };
