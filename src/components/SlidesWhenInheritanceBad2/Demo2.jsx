import React from 'react';
import { Text, Image } from 'spectacle';
import img from './assets/wtf.jpg';

const Demo2 = () => (
  <React.Fragment>
    <Text>TypeError: Cannot read property 'map' of undefined</Text>
    <Image src={img} alt="WTF" />
  </React.Fragment>
);

export { Demo2 };
