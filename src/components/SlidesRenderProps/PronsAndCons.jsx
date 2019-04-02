import React from 'react';
import { Text, List, ListItem } from 'spectacle';

const PronsAndCons = () => {
  return (
    <div>
      <Text>плюсы</Text>
      <List>
        <ListItem>инкапсуляция логики</ListItem>
        <ListItem>нет коллизии props</ListItem>
        <ListItem>легче типизировать</ListItem>
      </List>
      <Text>минусы</Text>
      <List>
        <ListItem>
          для использования LifeCycle методов нужен дополнительный компонент
        </ListItem>
        <ListItem>на каждый render создается новая функция</ListItem>
        <ListItem>callback hell</ListItem>
      </List>
    </div>
  );
};

export { PronsAndCons };
