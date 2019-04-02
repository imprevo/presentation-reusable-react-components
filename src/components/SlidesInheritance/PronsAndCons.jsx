import React from 'react';
import { Text, List, ListItem, Image } from 'spectacle';
import img from './assets/bgjp.png';

const PronsAndCons = () => {
  return (
    <div>
      <Text>плюсы</Text>
      <List>
        <ListItem>просто</ListItem>
      </List>
      <Text>минусы</Text>
      <List>
        <ListItem>неочевидно, какие есть методы и свойства</ListItem>
        <ListItem>невозможно использовать функциональные компоненты</ListItem>
        <ListItem>плохо расширяются</ListItem>
      </List>
      <Image src={img} alt="Banana Gorilla Jungle" width={200} />
    </div>
  );
};

export { PronsAndCons };
