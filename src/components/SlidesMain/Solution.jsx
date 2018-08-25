import React from 'react';
import { Text, List, ListItem } from 'spectacle';

const Solution = () => {
  return (
    <div>
      <Text>варианты решения</Text>
      <List>
        <ListItem>Копипаста</ListItem>
        <ListItem>Наследование</ListItem>
        <ListItem>Слоты</ListItem>
        <ListItem>Компоненты высшего порядка (HoC)</ListItem>
        <ListItem>render props</ListItem>
      </List>
    </div>
  );
};

export { Solution };
