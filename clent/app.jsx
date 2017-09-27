import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// App routes
import routes from './routes';

// Globaal styles
import './scss/styles.scss';

const renderApp = () => render(
  <BrowserRouter>{routes}</BrowserRouter>,
  document.getElementById('app')    
);

// Render app for first time
renderApp();

// If hot update triggered - rerender app with specified routes
if (module.hot) {
  module.hot.accept('./routes', () => renderApp());
}