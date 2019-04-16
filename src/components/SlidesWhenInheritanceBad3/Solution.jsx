import React from 'react';
import { Text } from 'spectacle';

const Solution = () => {
  return (
    <div>
      <Text>
        Наследуемся от компонента из HoC, а не от <code>BaseComponent</code>
      </Text>
      <Text>А как фиксить?</Text>
      <Text>
        <b>НИКАК</b>
      </Text>
      <Text>
        Доступ к <code>BaseComponent</code> больше <u>невозможен</u>
      </Text>
    </div>
  );
};

export { Solution };
