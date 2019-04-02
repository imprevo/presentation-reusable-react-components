import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuth, withUserList, injectIntl } from './hocs';

class MyComponent extends React.Component {}

const MyContainer = compose(
  injectIntl,
  withAuth,
  withUserList({ showLoader: true }),
  connect()
)(MyComponent);

export { MyContainer };
