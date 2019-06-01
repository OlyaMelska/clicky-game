import React from "react";
import Navbar from "./Navbar";
import Image from "./Image";
import imgData from "../url/url";
import "../styles/main.css";

class Counter extends React.Component {
  state = {
    score: 0,
    bestScore: 0,
    guess: true,
    text: "Click an image to begin",
    imgArr: imgData
  };

  componentDidMount() {
    this.ramdomizeImages();
  }

  handleClickCount = () => {
    console.log("Clicked");
    this.setState({ score: this.state.score + 1 });
    this.compareScores();
    this.handleTextChange();
    this.ramdomizeImages();
  };

  compareScores = () => {
    this.state.score > this.state.bestScore //if the current score is higher than current best score
      ? this.setState({ bestScore: this.state.score }) //set it to the current score
      : this.setState({ bestScore: this.state.bestScore }); //if no, keep it as it was
  };

  handleTextChange = e => {
    !e.isclicked
      ? this.setState({ text: "You've guessed correctly" })
      : this.setState({ text: "Wrong!" });
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
        <Navbar
          score={this.state.score}
          bestScore={this.state.bestScore}
          text={this.state.text}
        />
        <div className="flex">
          {this.state.imgArr.map(element => (
            <Image
              // key={element.src}
              src={element.src}
              alt={element.alt}
              isclicked={element.wasClicked}
              onClick={this.handleClickCount}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Counter;
