import React from 'react';
import { List, ListItem, Slide } from 'spectacle';

const ProblemWhy = () => {
  return (
    <Slide>
      <List>
        <ListItem>Проще переиспользовать и комбинировать</ListItem>
        <ListItem>Проще поддерживать</ListItem>
        <ListItem>Оптимизация рендера</ListItem>
      </List>
    </Slide>
  );
};

export { ProblemWhy };
