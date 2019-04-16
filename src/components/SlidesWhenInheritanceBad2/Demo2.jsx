import React from 'react';
import { Text, Image, Slide } from 'spectacle';
import img from './assets/wtf.jpg';

const Demo2 = () => (
  <Slide>
    <Text>TypeError: Cannot read property 'map' of undefined</Text>
    <Image src={img} alt="WTF" />
  </Slide>
);

export { Demo2 };
