import React from 'react';
import { Appear, Code, Text, Slide } from 'spectacle';

const Solution = (props) => {
  return (
    <Slide {...props}>
      <Text>
        Наследуемся от компонента из HoC, а не от <Code>BaseComponent</Code>
      </Text>
      <Appear>
        <Text>А как фиксить?</Text>
      </Appear>
      <Appear>
        <div>
          <Text>
            <b>НИКАК</b>
          </Text>
          <Text>
            Доступ к <Code>BaseComponent</Code> больше <u>невозможен</u>
          </Text>
        </div>
      </Appear>
    </Slide>
  );
};

export { Solution };
