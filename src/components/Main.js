import React from "react";
import Navbar from "./Navbar";
import Image from "./Image";
import imgData from "../url/url";
import "../styles/main.css";

class Counter extends React.Component {
  state = {
    score: 0,
    bestScore: 0,
    imgArr: imgData
  };

  componentDidMount() {
    this.ramdomizeImages();
  }

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  ramdomizeImages = () => {
    const arr = [];

    while (arr.length < imgData.length) {
      let r = Math.floor(Math.random() * imgData.length);
      if (arr.indexOf(r) === -1) {
        arr.push(imgData[r]);
      }
    }
    console.log("shuffled Array", arr);

    this.setState({ imgArr: arr });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="flex">
          {this.state.imgArr.map(element => (
            <Image
              src={element.src}
              alt={element.alt}
              isClicked={element.isClicked}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Counter;
