import React from 'react';
import { Image, Slide } from 'spectacle';
import img from './assets/success.gif';

const Success = () => (
  <Slide bgColor="#f5e10e">
    <Image width="100%" src={img} alt="Success" />
  </Slide>
);

export { Success };
