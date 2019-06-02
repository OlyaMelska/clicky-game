import React from "react";
import "../styles/image.css";

const Image = props => {
  return (
    <div className="fixed-size">
      <img
        src={props.src}
        alt={props.alt}
        className="img-fluid img frame"
        isclicked={props.isclicked}
        onClick={() => props.onClick(props)}
      />
    </div>
  );
};

export default Image;
