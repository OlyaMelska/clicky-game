import React from "react";
import "../styles/image.css";

const Image = props => {
  return (
    <div className="fixed-size">
      <img
        src={props.src}
        alt={props.alt}
        className="img-fluid"
        isClicked={props.isClicked}
      />
    </div>
  );
};

export default Image;
