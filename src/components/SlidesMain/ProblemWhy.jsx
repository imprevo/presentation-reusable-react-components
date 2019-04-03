import React from 'react';
import { Heading } from 'spectacle';
import dryBg from './assets/dry.png';

const ProblemWhy = () => {
  return (
    <Heading size={1} caps>
      DRY
    </Heading>
  );
};

ProblemWhy.bgImage = dryBg;

export { ProblemWhy };
