import React from 'react';
import { Heading, List, ListItem, Slide } from 'spectacle';

const LibraryList = () => {
  return (
    <Slide>
      <Heading>Библиотеки</Heading>
      <List>
        <ListItem>react-router</ListItem>
        <ListItem>React context API</ListItem>
      </List>
    </Slide>
  );
};

export { LibraryList };
