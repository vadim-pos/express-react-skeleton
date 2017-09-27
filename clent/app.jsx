import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Components
import App from './components/App';

// Globaal styles
import './scss/styles.scss';

// Function for app rendering
const renderApp = () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('app')    
  );
};

// Render app for first time
renderApp();

// If hot update triggered - rerender app
if (module.hot) {
  module.hot.accept('./components/App', () => renderApp());
}