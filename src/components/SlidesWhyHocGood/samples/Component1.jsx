import React from 'react';
import { connect } from 'react-redux';
import { withRoles, withUserList, injectIntl } from './hocs';

class MyComponent extends React.Component {}

const MyContainer = injectIntl(
  withRoles(['admin', 'moderator'])(
    withUserList({ showLoader: true })(connect()(MyComponent))
  )
);

export { MyContainer };
