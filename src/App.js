import React, { Component } from 'react';
import './App.css';
import Landing from './Landing.js'
import AddGame from './AddGame.js'
import Stats from './Stats.js'
import { Router } from "@reach/router";
import NavBar from './NavBar';
import Grid from '@material-ui/core/Grid';
import Demo from './demo';



let imgUrl = '../texture.png'; 

class App extends Component {
  render() {
    return (
<div className = 'Component-Bg' 
     style = {{ backgroundImage: 'url(' + imgUrl + ')', 
                backgroundSize: 'cover', 
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
              }}>
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
    </div>
    );
  }
}

export default App;
