import React from "react";
import { GoDotFill } from "react-icons/go";

export default function StylizedHeading({ text }) {
  return (
    <div className="stylizedHeading">
      <h2>{text}</h2>
      <div className="text-decoration">
        <span className="heading-line"></span>
        <div className="dots">
          <span className="dot" ></span>
          <span className="dot" ></span>
          <span className="dot" ></span>
        </div>
      </div>
    </div>
  );
}
