import React from 'react';
import { Text, List, ListItem } from 'spectacle';

const PronsAndCons = () => {
  return (
    <div>
      <Text>Плюсы</Text>
      <List>
        <ListItem>Инкапсуляция логики</ListItem>
      </List>
      <Text>Минусы</Text>
      <List>
        <ListItem>Коллизии props</ListItem>
        <ListItem>Неочевидно, какие props</ListItem>
        <ListItem>Нельзя объявлять в рендере/динамически</ListItem>
        <ListItem>
          <s>Сложно типизировать</s> (уже нет - см React.AbstractComponent)
        </ListItem>
      </List>
    </div>
  );
};

export { PronsAndCons };
