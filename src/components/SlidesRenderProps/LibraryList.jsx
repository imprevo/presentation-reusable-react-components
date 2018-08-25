import React from 'react';
import { Heading, List, ListItem } from 'spectacle';

const LibraryList = () => {
  return (
    <div>
      <Heading>библиотеки</Heading>
      <List>
        <ListItem>react-router</ListItem>
        <ListItem>React context API</ListItem>
      </List>
    </div>
  );
};

export { LibraryList };
