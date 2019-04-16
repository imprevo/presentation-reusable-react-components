import React from 'react';
import { Heading, List, ListItem, Slide } from 'spectacle';

const Compose = () => {
  return (
    <Slide>
      <Heading>compose</Heading>
      <List>
        <ListItem>compose из redux</ListItem>
        <ListItem>compose из lodash (a.k.a. flowRight)</ListItem>
        <ListItem>recompose</ListItem>
      </List>
    </Slide>
  );
};

export { Compose };
