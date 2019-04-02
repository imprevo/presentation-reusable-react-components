import React from 'react';
import { Text, List, ListItem } from 'spectacle';

const Solution = () => {
  return (
    <div>
      <Text>варианты решения</Text>
      <List>
        <ListItem>Копипаста</ListItem>
        <ListItem>Наследование</ListItem>
        <ListItem>Higher-Order Components (HoC)</ListItem>
        <ListItem>Render props</ListItem>
      </List>
    </div>
  );
};

export { Solution };
