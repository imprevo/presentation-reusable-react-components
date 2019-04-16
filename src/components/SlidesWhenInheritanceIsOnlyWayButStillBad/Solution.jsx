import React from 'react';
import { Image, Text } from 'spectacle';
import img from './assets/meh.jpg';

const Solution = () => {
  return (
    <div>
      <Text>
        Через пару месяцев библиотека обновилась и компонент перестал работать
      </Text>
      <Image src={img} alt="Meh" />
    </div>
  );
};

export { Solution };
