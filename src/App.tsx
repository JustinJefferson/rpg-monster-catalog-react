import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Lore from './pages/Lore';
import Mechanics from './pages/Mechanics';
import Monsters from './pages/Monsters';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="lore">
            <Lore />
          </Route>
          <Route path="mechanics">
            <Mechanics />
          </Route>
          <Route path="monsters">
            <Monsters />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
