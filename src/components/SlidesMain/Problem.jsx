import React from 'react';
import { Text, Heading } from 'spectacle';

const Problem = () => {
  return (
    <React.Fragment>
      <Heading>Проблема</Heading>
      <Text>Presentation component - отображение, можно переиспользовать.</Text>
      <Text>
        Container component - логика и данные, нельзя переиспользовать.
      </Text>
    </React.Fragment>
  );
};

export { Problem };
