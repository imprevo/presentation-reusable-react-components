import React from 'react';
import { Heading, List, ListItem } from 'spectacle';

const Compose = () => {
  return (
    <div>
      <Heading>compose</Heading>
      <List>
        <ListItem>compose из redux</ListItem>
        <ListItem>compose из lodash (a.k.a. flowRight)</ListItem>
        <ListItem>
          <s>recompose</s> (deprecated)
        </ListItem>
      </List>
    </div>
  );
};

export { Compose };
