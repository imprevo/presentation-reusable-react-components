import React from 'react';
import { Text, List, ListItem, Slide } from 'spectacle';

const Problem = () => {
  return (
    <Slide>
      <Text>2 вида React-компонентов</Text>
      <List>
        <ListItem>Presentation component - отображение.</ListItem>
        <ListItem>Container component - логика и данные</ListItem>
      </List>
    </Slide>
  );
};

export { Problem };
