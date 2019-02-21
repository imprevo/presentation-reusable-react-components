import React from 'react';
import { Heading, List, ListItem } from 'spectacle';

const ExampleList = () => {
  return (
    <div>
      <Heading>примеры</Heading>
      <List>
        <ListItem>fetching data</ListItem>
        <ListItem>индикатор загрузки - wait load image</ListItem>
        <ListItem>ErrorBoundary - componentDidCatch</ListItem>
        <ListItem>collapsed - (isCollapsed, onToggle)</ListItem>
        <ListItem>координаты курсора мыши - x, y, mouseMove</ListItem>
        <ListItem>
          синхронизация вкладок - текст в инпуте - value, onChange
        </ListItem>
      </List>
    </div>
  );
};

export { ExampleList };
