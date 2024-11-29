import React from "react";
import styles from "./InfoBox.module.css";

export default function InfoBox({ button  , style}) {
  return (
    <section className={`${styles.infoBox} infoBox `} style={style}>
      <h4 style={{ color: style?.color }}>THAT LOT</h4>
      <p style={{ color: style?.color }}>
        Give your company a faster, more agile way to work with freelancers and
        contractors. Find contract and pay yor external workforce in one click,
        eith 100% compliance
      </p>
      {button && <button className="black-btn">BOOK A DEMO</button>}
    </section>
  );
}
