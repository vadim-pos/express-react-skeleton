import React from 'react';
import { Route } from 'react-router-dom';

const App = () => (
  <div className="app">
    <Route exact path="/" component={props => <h1>Client works!</h1>} />
  </div>
);

export default App;