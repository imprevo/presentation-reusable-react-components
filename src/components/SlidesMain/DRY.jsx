import React from 'react';
import { Heading } from 'spectacle';
import dryBg from './assets/dry.png';

const DRY = () => {
  return (
    <Heading size={1} caps>
      DRY
    </Heading>
  );
};

DRY.bgImage = dryBg;

export { DRY };
