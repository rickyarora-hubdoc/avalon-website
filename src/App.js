import React, { Component } from 'react';
import './App.css';
import Landing from './Landing.js'
import AddGame from './AddGame.js'
import Stats from './Stats.js'
import { Router } from "@reach/router";
import NavBar from './NavBar';
import Grid from '@material-ui/core/Grid';
import Demo from './demo';



class App extends Component {
  render() {
    return (
    <Grid container spacing={3} justify="center" alignItems="center">
      <Grid item md={12}>
      <Demo />
      </Grid>
      <NavBar />
        <Router>
          <Landing path="/"/>
          <AddGame path="add-game"/>
          <Stats path="stats"/>
        </Router>
    </Grid>
    );
  }
}

export default App;
