import React from 'react';
import { withRoles, withUserList } from './hocs';

class MyComponent extends React.Component {}

const MyContainer = withRoles(['admin', 'moderator'])(
  withUserList({ showLoader: true })(MyComponent)
);

export { MyContainer };
