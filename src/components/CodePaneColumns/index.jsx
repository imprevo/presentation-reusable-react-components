import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Fill } from 'spectacle';
import { CodePane } from '../CodePane';

const CodePaneColumns = ({ sourceList }) => {
  return (
    <Layout>
      {sourceList.map((source, index) => (
        <Fill key={index}>
          <CodePane source={source} />
        </Fill>
      ))}
    </Layout>
  );
};

CodePaneColumns.propTypes = {
  sourceList: PropTypes.arrayOf(PropTypes.string),
};

export { CodePaneColumns };
