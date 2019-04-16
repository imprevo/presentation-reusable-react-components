import React from 'react';
import { Text, List, ListItem, Slide } from 'spectacle';

const Solution = () => {
  return (
    <Slide>
      <Text>Варианты решения</Text>
      <List>
        <ListItem>Копипаста</ListItem>
        <ListItem>Наследование</ListItem>
        <ListItem>Higher-Order Components (HoC)</ListItem>
        <ListItem>Render props</ListItem>
      </List>
    </Slide>
  );
};

export { Solution };
