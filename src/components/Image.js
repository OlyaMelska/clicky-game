import React from "react";

const Image = props => {
  return (
    <div className="col-sm-3">
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
