import React from 'react';
import { Text, List, ListItem } from 'spectacle';

const PronsAndCons = () => {
  return (
    <div>
      <Text>плюсы</Text>
      <List>
        <ListItem>переиспользование кода</ListItem>
        <ListItem>инкапсуляция логики</ListItem>
      </List>
      <Text>минусы</Text>
      <List>
        <ListItem>коллизии props</ListItem>
        <ListItem>неочевидно, какие props</ListItem>
        <ListItem>нельзя объявлять в рендере/динамически</ListItem>
        <ListItem>сложно типизировать</ListItem>
      </List>
    </div>
  );
};

export { PronsAndCons };
