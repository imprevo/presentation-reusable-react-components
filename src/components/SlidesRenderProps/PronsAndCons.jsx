import React from 'react';
import { Appear, Text, List, ListItem } from 'spectacle';

const PronsAndCons = () => {
  return (
    <div>
      <Text>Плюсы</Text>
      <List>
        <ListItem>Инкапсуляция логики</ListItem>
        <ListItem>Нет коллизии props</ListItem>
        <ListItem>Легко типизировать</ListItem>
      </List>
      <Appear>
        <div>
          <Text>Минусы</Text>
          <List>
            <ListItem>
              Для использования LifeCycle методов нужен дополнительный компонент
            </ListItem>
            <ListItem>На каждый render создается новая функция</ListItem>
            <ListItem>Callback Hell</ListItem>
          </List>
        </div>
      </Appear>
    </div>
  );
};

export { PronsAndCons };
