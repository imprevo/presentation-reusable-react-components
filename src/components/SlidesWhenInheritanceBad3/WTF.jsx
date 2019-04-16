import React from 'react';
import { Image } from 'spectacle';
import img from './assets/wtf.jpg';

const WTF = () => {
  return (
    <div>
      <Image src={img} alt="WTF" />
    </div>
  );
};

export { WTF };
