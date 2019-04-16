import React from 'react';
import { Heading, List, ListItem, Slide } from 'spectacle';

const LibraryList = () => {
  return (
    <Slide>
      <Heading>Библиотеки</Heading>
      <List>
        <ListItem>connect из react-redux</ListItem>
        <ListItem>injectIntl из react-intl</ListItem>
        <ListItem>loadable из react-loadable</ListItem>
        <ListItem>reduxForm из redux-form</ListItem>
        <ListItem>withState, branch, lifecycle из recompose</ListItem>
        <ListItem>
          SortableContainer, SortableElement из react-sortable-hoc
        </ListItem>
      </List>
    </Slide>
  );
};

export { LibraryList };
