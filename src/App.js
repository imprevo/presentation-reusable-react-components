import React, { Component } from 'react';
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Code,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';

const theme = createTheme(
  {
    // primary: 'red',
    // secondary: 'blue'
  },
  {
    primary: 'Helvetica',
    secondary: {
      name: 'Droid Serif',
      googleFont: true,
      styles: ['400', '700i'],
    },
  }
);

class App extends Component {
  render() {
    return (
      <Deck theme={theme}>
        <Slide>
          <Text>Hello 1</Text>
        </Slide>
        <Slide>
          <Text>Hello 2</Text>
        </Slide>
      </Deck>
    );
  }
}

export default App;
