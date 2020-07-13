import React, { Fragment } from "react";
import spinner from "./BeanEater.svg";

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        style={{
          width: "200px",
          margin: "auto",
          display: "block",
          position: "absolute",
          top: "200px",
          left: "50%",
        }}
        alt="Loading..."
      />
    </Fragment>
  );
};

export default Spinner;
