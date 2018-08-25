import React from 'react';
import { Text, List, ListItem } from 'spectacle';

const PronsAndCons = () => {
  return (
    <div>
      <Text>плюсы</Text>
      <List>
        <ListItem>переиспользование кода</ListItem>
        <ListItem>инкапсуляция логики</ListItem>
        <ListItem>нет коллизии props</ListItem>
        <ListItem>легче типизировать</ListItem>
      </List>
      <Text>минусы</Text>
      <List>
        <ListItem>
          для использования LifeCycle методов нужен дополнительный компонент
        </ListItem>
        <ListItem>
          на каждый render возвращается новая функция. нужно выносить в
          отдельный метод класса
        </ListItem>
        <ListItem>
          callback hell при использовании нескольких компонентов
        </ListItem>
      </List>
    </div>
  );
};

export { PronsAndCons };
