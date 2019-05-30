import React from "react";
import "../styles/navbar.css";

class Navbar extends React.Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <nav id="nav" className="sticky-top ">
        <h2>Click on ART!</h2>
        <h2 id="correctly">Click an image to begin</h2>
        <h2 id="score">Score: </h2>
        <h2 id="total-score">Total Score: </h2>
      </nav>
    );
  }
}

export default Navbar;
