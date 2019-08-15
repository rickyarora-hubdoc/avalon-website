import React from "react";
import { Link } from "@reach/router";
import NavBar from "./NavBar"

function Landing() {
  return (
    <div>
      <NavBar/>
      Loaded Landing Div
      
      <Link to="add-game">Add New Game Data</Link>
      
      <Link to="stats">View Stats</Link>
    </div>
  );
}

export default Landing;