import React from 'react';
import { Heading, List, ListItem } from 'spectacle';

const Compose = () => {
  return (
    <div>
      <Heading>compose</Heading>
      <List>
        <ListItem>compose из redux</ListItem>
        <ListItem>react-compose</ListItem>
        <ListItem>proposal-pipeline-operator</ListItem>
      </List>
    </div>
  );
};

export { Compose };
