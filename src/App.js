import React, { Component } from 'react';
import './App.css';
import Landing from './Landing.js'
import AddGame from './AddGame.js'
import Stats from './Stats.js'
import { Router } from "@reach/router";
import NavBar from './NavBar';
import Box from '@material-ui/core/Box';



class App extends Component {
  render() {
    return (
    <Box color="primary">
      <NavBar />
        <Router>
          <Landing path="/"/>
          <AddGame path="add-game"/>
          <Stats path="stats"/>
        </Router>
    </Box>
    );
  }
}

export default App;
