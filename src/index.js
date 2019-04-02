import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function renderApp() {
  ReactDOM.render(<App />, document.getElementById('root'));
}

renderApp();

if (module.hot) {
  module.hot.accept('./App', function() {
    renderApp();
  });
}
