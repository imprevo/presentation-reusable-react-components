import React from 'react';
import { Text, List, ListItem } from 'spectacle';

const Problem = () => {
  return (
    <React.Fragment>
      <Text>2 вида React-компонентов</Text>
      <List>
        <ListItem>Presentation component - отображение.</ListItem>
        <ListItem>Container component - логика и данные</ListItem>
      </List>
    </React.Fragment>
  );
};

export { Problem };
