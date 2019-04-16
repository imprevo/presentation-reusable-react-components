import React from 'react';
import { Image, Slide } from 'spectacle';
import img from './assets/wtf.jpg';

const WTF = () => {
  return (
    <Slide>
      <Image src={img} alt="WTF" />
    </Slide>
  );
};

export { WTF };
