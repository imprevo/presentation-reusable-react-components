import React from 'react';
import { Image, Text, Slide } from 'spectacle';
import img from './assets/meh.jpg';

const Solution = () => {
  return (
    <Slide>
      <Text>
        Через пару месяцев библиотека обновилась и компонент перестал работать
      </Text>
      <Image src={img} alt="Meh" />
    </Slide>
  );
};

export { Solution };
