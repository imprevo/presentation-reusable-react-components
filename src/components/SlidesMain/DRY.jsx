import React from 'react';
import { Heading, Slide } from 'spectacle';
import dryBg from './assets/dry.png';

const DRY = () => {
  return (
    <Slide bgImage={dryBg}>
      <Heading size={1} caps>
        DRY
      </Heading>
    </Slide>
  );
};

export { DRY };
