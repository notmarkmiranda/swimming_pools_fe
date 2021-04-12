import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import Healthcheck from './components/Healthcheck/Healthcheck';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/healthcheck">
            <Healthcheck />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
};

export default App;