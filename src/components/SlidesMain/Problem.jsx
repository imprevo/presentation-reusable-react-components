import React from 'react';
import { Text, Heading } from 'spectacle';

const Problem = () => {
  return (
    <React.Fragment>
      <Heading>Проблематика</Heading>
      <Text>presentation component - отображение. можно переиспользовать</Text>
      <Text>
        container component - логика и данные. нельзя переиспользовать
      </Text>
      <Text>Задача - переиспользовать container</Text>
    </React.Fragment>
  );
};

export { Problem };
