import React from 'react';
import { Appear, Text, List, ListItem, Image, Slide } from 'spectacle';
import img from './assets/bgjp.png';

const PronsAndCons = (props) => {
  return (
    <Slide {...props}>
      <Text>Плюсы</Text>
      <List>
        <ListItem>Просто</ListItem>
      </List>
      <Appear>
        <div>
          <Text>Минусы</Text>
          <List>
            <ListItem>Неочевидно, какие есть методы и свойства</ListItem>
            <ListItem>
              Невозможно использовать функциональные компоненты
            </ListItem>
            <ListItem>Плохо расширяются</ListItem>
          </List>
          <Image src={img} alt="Banana Gorilla Jungle" width={200} />
        </div>
      </Appear>
    </Slide>
  );
};

export { PronsAndCons };
