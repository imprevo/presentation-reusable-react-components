import React from 'react';
import { Text, Image, Slide } from 'spectacle';
import img from './assets/harold.jpeg';

const Solution = () => {
  return (
    <Slide>
      <Text>Ничего не делать и продолжать копипастить</Text>
      <Image src={img} alt="Banana Gorilla Jungle" />
    </Slide>
  );
};

export { Solution };
