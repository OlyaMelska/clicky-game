import React from "react";
import "../styles/main.css";

class Counter extends React.Component {
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
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <img
              src="../images/1.jpg"
              alt="Salvador Dali painting"
              className="img-fluid"
            />
          </div>
          <div className="col-sm-3">
            <img
              src="../images/2.jpg"
              alt="Salvador Dali painting"
              className="img-fluid"
            />
          </div>
          <div className="col-sm-3">
            <img
              src="../images/3.jpg"
              alt="Salvador Dali painting"
              className="img-fluid"
            />
          </div>
          <div className="col-sm-3">
            <img
              src="../images/4.jpg"
              alt="Salvador Dali painting"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
