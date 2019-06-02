import React from "react";
import Navbar from "./Navbar";
import Image from "./Image";
import imgData from "../url/url";
import "../styles/main.css";

class Counter extends React.Component {
  state = {
    score: 0,
    bestScore: 0,
    text: "Click an image to begin",
    imgArr: imgData
  };

  componentDidMount() {
    this.ramdomizeImages();
  }

  handleClick = e => {
    console.log("Clicked");
    this.calculateScore(e);
    this.handleTextChange(e);
    this.compareScores();
    this.ramdomizeImages();
  };

  calculateScore = e => {
    // console.log("E! ", e);
    // console.log("E.isclicked!!! ", e.isclicked);
    const imgArr = this.state.imgArr.map(image => {
      if (image.src === e.src) {
        return { ...image, isClicked: !image.isClicked };
      }
      return image;
    });

    !e.isclicked
      ? this.setState({ score: this.state.score + 1, imgArr: imgArr })
      : this.setState({ score: 0, imgArr: imgData });
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

  shuffleArray = () => {
    const array = [...this.state.imgArr];
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    console.log(array);
    this.setState({ imgArr: array });
  };

  ramdomizeImages = () => {
    const arr = [];
    console.log("BEFORE RANDOMIZE");
    this.state.imgArr.forEach(x => console.log(x.alt, x.isClicked));
    while (arr.length < this.state.imgArr.length) {
      let r = Math.floor(Math.random() * this.state.imgArr.length);
      if (arr.indexOf(this.state.imgArr[r]) === -1) {
        arr.push(this.state.imgArr[r]);
      }
    }

    this.setState({ imgArr: arr });
    console.log("AFTER RANDOMIZE ARR");
    arr.forEach(x => console.log(x.alt, x.isClicked));
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
              key={element.src}
              src={element.src}
              alt={element.alt}
              isclicked={element.isClicked}
              onClick={element => this.handleClick(element)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Counter;
