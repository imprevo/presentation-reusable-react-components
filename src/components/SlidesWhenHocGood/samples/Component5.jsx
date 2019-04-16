import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRoles, injectIntl, withFetch, withLoading } from './hocs';

class MyComponent extends React.Component {}

const withUserList = ({ showLoader }) =>
  compose(
    withFetch('/users'),
    withLoading(showLoader, <div>loading...</div>)
  );

const MyContainer = compose(
  injectIntl,
  withRoles(['admin', 'moderator']),
  withUserList({ showLoader: true }),
  connect()
)(MyComponent);

export { MyContainer };
