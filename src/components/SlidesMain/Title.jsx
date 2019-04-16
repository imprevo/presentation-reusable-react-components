import React from 'react';
import { Heading, Slide } from 'spectacle';

const Title = () => {
  return (
    <Slide>
      <Heading size={1} caps>
        React
      </Heading>
      <Heading size={1} fit caps>
        Разделение и переиспользование кода
      </Heading>
    </Slide>
  );
};

export { Title };
