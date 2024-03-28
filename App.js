// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppShell from './appshell';
import Coursed from './Coursed';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <AppShell onSearch={setSearchQuery} />
        </Route>
        <Route path="/coursed">
          <Coursed searchQuery={searchQuery} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
