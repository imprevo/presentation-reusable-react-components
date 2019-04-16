import React from 'react';
import { Heading, Text, Slide } from 'spectacle';

const Title = () => {
  return (
    <Slide>
      <Heading size={3} caps textColor="tertiary">
        Когда наследование это единственный способ
      </Heading>
      <Text textColor="tertiary">(но все равно плохо)</Text>
    </Slide>
  );
};

export { Title };
