import React from "react";

const Navbar = (props) => (

  <nav className="navbar">
    <div className="oval text-center">Nintendo Clicky Game</div>
    <span className="text-center h5">{props.message}</span>
    <span className="navbar-text">
      Score: <span>{props.correct}</span>&nbsp;
      Top Score: <span>{props.topscore}</span>
    </span>
  </nav>
)
export default Navbar;