import React from 'react';
import { connect } from 'react-redux';
import { withAuth, withUserList, injectIntl } from './hocs';

class MyComponent extends React.Component {}

const MyContainer = injectIntl(
  withAuth(withUserList({ showLoader: true })(connect()(MyComponent)))
);

export { MyContainer };
