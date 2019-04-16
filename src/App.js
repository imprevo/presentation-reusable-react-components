import React, { Component } from 'react';
import { Deck } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import SlidesMain from './components/SlidesMain';
import SlidesReuseComponents from './components/SlidesReuseComponents';
import SlidesReuseContainers from './components/SlidesReuseContainers';
import SlidesCopyPaste from './components/SlidesCopyPaste';
// import SlidesSlot from './components/SlidesSlot';
import SlidesInheritance from './components/SlidesInheritance';
import SlidesHoc from './components/SlidesHoc';
import SlidesRenderProps from './components/SlidesRenderProps';
import SlidesFinal from './components/SlidesFinal';
import SlidesWhenInheritanceBad from './components/SlidesWhenInheritanceBad';
import SlidesWhenInheritanceBad2 from './components/SlidesWhenInheritanceBad2';
import SlidesWhenInheritanceBad3 from './components/SlidesWhenInheritanceBad3';
import SlidesWhenInheritanceIsOnlyWayButStillBad from './components/SlidesWhenInheritanceIsOnlyWayButStillBad';
import SlidesWhenHocGood from './components/SlidesWhenHocGood';

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
  return slides.map((A, key) => <A key={key} />);
}

class App extends Component {
  render() {
    return (
      <Deck
        transition={['slide']}
        theme={theme}
        transitionDuration={500}
        progress="bar"
      >
        {renderSlides(SlidesMain)}

        {renderSlides(SlidesReuseComponents)}

        {renderSlides(SlidesReuseContainers)}
        {renderSlides(SlidesCopyPaste)}
        {renderSlides(SlidesInheritance)}
        {/* {renderSlides(SlidesSlot)} */}
        {renderSlides(SlidesHoc)}
        {renderSlides(SlidesRenderProps)}

        {renderSlides(SlidesWhenInheritanceBad)}
        {renderSlides(SlidesWhenInheritanceBad2)}
        {renderSlides(SlidesWhenInheritanceBad3)}
        {renderSlides(SlidesWhenInheritanceIsOnlyWayButStillBad)}
        {renderSlides(SlidesWhenHocGood)}

        {renderSlides(SlidesFinal)}
      </Deck>
    );
  }
}

export default App;
