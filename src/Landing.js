import React from "react";
import { Link } from "@reach/router";

function Landing() {
  return (
    <div>
      Loaded Landing Div
      <Link to="add-game">Add New Game Data</Link>
      <Link to="stats">View Stats</Link>
    </div>
  );
}

export default Landing;