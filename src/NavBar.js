import React from "react";
import { Link } from "@reach/router";

function NavBar() {
  return (
    <div>      
      <Link to="/">Home</Link>
      &nbsp;
      <Link to="add-game">Add New Game Data</Link>
      &nbsp;
      <Link to="stats">View Stats</Link>
    </div>
  );
}

export default NavBar;