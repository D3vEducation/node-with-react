// Dependencies
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

// Components
import App from './frontend/App';

// Root element
const rootElement = document.querySelector('#root');

// App Wrapper
const renderApp = Component => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootElement
  );
};

// Rendering app
renderApp(App);

// Hot Module Replacement
if (module.hot) {
  module.hot.accept('./frontend/App', () => {
    renderApp(require('./frontend/App').default);
  });
}
