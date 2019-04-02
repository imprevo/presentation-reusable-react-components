import React from 'react';
import { Text, List, ListItem, Image } from 'spectacle';
import img from './assets/bgjp.png';

const PronsAndCons = () => {
  return (
    <div>
      <Text>Плюсы</Text>
      <List>
        <ListItem>Просто</ListItem>
      </List>
      <Text>Минусы</Text>
      <List>
        <ListItem>Неочевидно, какие есть методы и свойства</ListItem>
        <ListItem>Невозможно использовать функциональные компоненты</ListItem>
        <ListItem>Плохо расширяются</ListItem>
      </List>
      <Image src={img} alt="Banana Gorilla Jungle" width={200} />
    </div>
  );
};

export { PronsAndCons };
