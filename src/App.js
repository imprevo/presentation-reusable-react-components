import React, { Component } from 'react';
import { Deck, Slide } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import SlidesMain from './components/SlidesMain';
import SlidesCopyPaste from './components/SlidesCopyPaste';
import SlidesSlot from './components/SlidesSlot';
import SlidesInheritance from './components/SlidesInheritance';
import SlidesHoc from './components/SlidesHoc';
import SlidesRenderProps from './components/SlidesRenderProps';
import SlidesFinal from './components/SlidesFinal';

const theme = createTheme(
  {
    // primary: 'lightyellow',
    // secondary: 'red',
    // tertiary: 'black',
    // quarternary: 'hotpink',
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

// TODO: ошибка, если обернуть Slide в React.Fragment или другой компонент
// TypeError: Cannot read property 'componentWillAppear' of undefined
function renderSlides(slides) {
  return slides.map((A, key) => (
    <Slide key={key}>
      <A />
    </Slide>
  ));
}

class App extends Component {
  render() {
    return (
      <Deck transition={['slide']} theme={theme} transitionDuration={500}>
        {renderSlides(SlidesMain)}
        {renderSlides(SlidesCopyPaste)}
        {renderSlides(SlidesInheritance)}
        {renderSlides(SlidesSlot)}
        {renderSlides(SlidesHoc)}
        {renderSlides(SlidesRenderProps)}
        {renderSlides(SlidesFinal)}
      </Deck>
    );
  }
}

export default App;
