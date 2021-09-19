import './App.css';
import Homepage from './components/home/Homepage'
import MakeAChange from './components/MakeAChange/MakeAChange'
import Nav from './components/navigation/Nav'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login'
import Register from './Register'
import Reset from './Reset'
import Dashboard from './Dashboard'
import Setup from './Setup'
import React, { useState, useEffect } from 'react';


function App() {

  useEffect(() => {
    
  });

  return (
    <div><div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/reset" component={Reset} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/setup" component={Setup} />
        </Switch>
      </Router>
    </div>
    <div>

    </div></div>
      )
}

export default App;
