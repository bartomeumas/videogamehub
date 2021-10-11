import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Game from './pages/Game';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/game" component={Game}></Route>
        <Route exact path="/signup" component={SignUp}></Route>
        <Route exact path="/login" component={Login}></Route>
      </Switch>
    </Router>
  );
}

export default App;
