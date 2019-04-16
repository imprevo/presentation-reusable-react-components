import React from 'react';
import { Appear, Text, List, ListItem } from 'spectacle';

const PronsAndCons = () => {
  return (
    <div>
      <Text>Плюсы</Text>
      <List>
        <ListItem>Инкапсуляция логики</ListItem>
      </List>
      <Appear>
        <div>
          <Text>Минусы</Text>
          <List>
            <ListItem>Коллизии props</ListItem>
            <ListItem>Неочевидно, какие props приходят в компонент</ListItem>
            <ListItem>Нельзя объявлять в рендере/динамически</ListItem>
            <ListItem>Component hell в react devtools</ListItem>
            <ListItem>
              <s>Сложно типизировать</s> (уже нет - см React.AbstractComponent)
            </ListItem>
          </List>
        </div>
      </Appear>
    </div>
  );
};

export { PronsAndCons };
