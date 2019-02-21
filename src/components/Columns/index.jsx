import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Fill, Text } from 'spectacle';

const Columns = ({ list }) => {
  return (
    <Layout>
      {list.map(({ title, body }, index) => (
        <Fill key={index}>
          <Text>{title}</Text>
          {body}
        </Fill>
      ))}
    </Layout>
  );
};

Columns.propTypes = {
  sourceList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      body: PropTypes.string,
    })
  ),
};

export { Columns };
