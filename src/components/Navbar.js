import React from "react";
import "../styles/navbar.css";

const Navbar = props => {
  return (
    <nav id="nav" className="sticky-top ">
      <h2>Click on ART!</h2>
      <h2 id="text">{props.text}</h2>
      <h2 id="score">Score: {props.score}</h2>
      <h2 id="total-score">Highest Score: {props.bestScore}</h2>
    </nav>
  );
};

export default Navbar;
