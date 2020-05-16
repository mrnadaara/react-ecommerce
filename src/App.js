import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';

function App() {
  return (
    <Switch>
      <Route component={HomePage} path='/' exact />
    </Switch>
  );
}

export default App;
