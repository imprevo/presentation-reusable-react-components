import React from 'react';
import { Text, List, ListItem } from 'spectacle';

const PronsAndCons = () => {
  return (
    <div>
      <Text>плюсы</Text>
      <List>
        <ListItem>Инкапсуляция логики</ListItem>
      </List>
      <Text>минусы</Text>
      <List>
        <ListItem>Коллизии props</ListItem>
        <ListItem>Неочевидно, какие props</ListItem>
        <ListItem>Нельзя объявлять в рендере/динамически</ListItem>
        <ListItem>
          Сложно типизировать (уже нет - см React.AbstractComponent)
        </ListItem>
      </List>
    </div>
  );
};

export { PronsAndCons };
