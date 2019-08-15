import React, { Component } from 'react';
import './App.css';
import Landing from './Landing.js'
import AddGame from './AddGame.js'
import Stats from './Stats.js'
import { Router } from "@reach/router";

class App extends Component {
  render() {
    return (
      <div >
        <Router>
          <Landing path="/"/>
          <AddGame path="add-game"/>
          <Stats path="stats"/>
        </Router>
      </div>
    );
  }
}

export default App;
