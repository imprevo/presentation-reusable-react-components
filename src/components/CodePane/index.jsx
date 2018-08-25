import React from 'react';
import { CodePane as BaseCodePane } from 'spectacle';
import 'prism-themes/themes/prism-darcula.css';

const CodePane = (props) => <BaseCodePane {...props} />;

CodePane.defaultProps = {
  lang: 'jsx',
  theme: 'external',
};

export { CodePane };
