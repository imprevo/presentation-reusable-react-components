import React from 'react';
import { CodePane as BaseCodePane } from 'spectacle';
import 'prism-themes/themes/prism-darcula.css';
import './styles.css';

const CodePane = (props) => (
  <BaseCodePane overflow className="CodePane" {...props} />
);

CodePane.defaultProps = {
  lang: 'jsx',
  theme: 'external',
  textSize: 14,
};

export { CodePane };
