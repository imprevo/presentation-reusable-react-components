import React from 'react';
import { Heading, List, ListItem } from 'spectacle';

const LibraryList = () => {
  return (
    <div>
      <Heading>Библиотеки</Heading>
      <List>
        <ListItem>connect из react-redux</ListItem>
        <ListItem>injectIntl из react-intl</ListItem>
        <ListItem>loadable из react-loadable</ListItem>
        <ListItem>reduxForm из redux-form</ListItem>
        <ListItem>
          SortableContainer, SortableElement из react-sortable-hoc
        </ListItem>
      </List>
    </div>
  );
};

export { LibraryList };
