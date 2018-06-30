import React from "react";

const Navbar = (props) => (

  <nav className="navbar">
    <span className="navbar-brand mb-0 h1">Nintendo Clicky Game!</span>
    <span className="text-center mb-0 h3">{props.message}</span>
    <span className="navbar-text">
      Score: <span>{props.correct}</span>&nbsp;
      Top Score: <span>{props.topscore}</span>
    </span>
  </nav>
)
export default Navbar;