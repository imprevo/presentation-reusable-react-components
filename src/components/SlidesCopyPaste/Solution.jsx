import React from 'react';
import { Text, Image } from 'spectacle';
import img from './assets/harold.jpeg';

const Solution = () => {
  return (
    <div>
      <Text>Ничего не делать и продолжать копипастить</Text>
      <Image src={img} alt="Banana Gorilla Jungle" />
    </div>
  );
};

export { Solution };
