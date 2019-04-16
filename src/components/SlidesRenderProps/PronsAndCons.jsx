import React from 'react';
import { Appear, Text, List, ListItem, Slide } from 'spectacle';

const PronsAndCons = (props) => {
  return (
    <Slide {...props}>
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
    </Slide>
  );
};

export { PronsAndCons };
