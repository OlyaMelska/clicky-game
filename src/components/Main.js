import React from "react";
import Navbar from "./Navbar";
import Image from "./Image";
import imgData from "../url/url";
import "../styles/main.css";
const arr = [];

class Counter extends React.Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  componentDidMount() {
    this.ramdomizeImages();
  }

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  ramdomizeImages = () => {
    while (arr.length < imgData.length) {
      let r = Math.floor(Math.random() * imgData.length);
      if (arr.indexOf(r) === -1) {
        arr.push(imgData[r]);
      }
    }
    console.log("shuffled Array", arr);
    return arr;
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="container" />
        {imgData.map(element => (
          <Image
            src={element.src}
            alt={element.alt}
            isClicked={element.isClicked}
          />
        ))}
      </div>
    );
  }
}

export default Counter;
