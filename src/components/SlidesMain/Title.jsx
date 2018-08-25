import React from 'react';
import { Heading } from 'spectacle';

const Title = () => {
  return (
    <div>
      <Heading size={1} caps>
        React
      </Heading>
      <Heading size={1} fit caps>
        Разделение и переиспользование кода
      </Heading>
    </div>
  );
};

export { Title };
