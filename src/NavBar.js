import React from "react";
import { Link } from "@reach/router";

function NavBar() {
  return (
    <div>      
      {" "}<Link to="/">Home</Link>
      {" "}<Link to="add-game">Add New Game Data</Link>
      {" "}<Link to="stats">View Stats</Link>
    </div>
  );
}

export default NavBar;