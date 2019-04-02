import React from 'react';
import { Heading, List, ListItem } from 'spectacle';

const TaskList = () => {
  return (
    <React.Fragment>
      <Heading>Задание</Heading>
      <List>
        <ListItem>Координаты курсора мыши - x, y, mouseMove</ListItem>
        <ListItem>Аккордеон - isCollapsed, onToggle</ListItem>
        <ListItem>Загрузка данных - isLoaded, data, error</ListItem>
        <ListItem>
          Картинка с индикатором загрузки - isLoaded, data, error
        </ListItem>
        <ListItem>
          Синхронизация текста в инпуте в разных вкладках браузера - value,
          onChange
        </ListItem>
      </List>
    </React.Fragment>
  );
};

export { TaskList };
