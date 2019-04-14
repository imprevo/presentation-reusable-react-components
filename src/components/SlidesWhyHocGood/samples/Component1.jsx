import React from 'react';
import { connect } from 'react-redux';
import { withRoles, withUserList, injectIntl } from './hocs';

class MyComponent extends React.Component {}

const MyContainer = withRoles(['admin', 'moderator'])(
  withUserList({ showLoader: true })(MyComponent)
);

export { MyContainer };
