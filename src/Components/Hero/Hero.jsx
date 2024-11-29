import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Hero.module.css";

export default function Hero({content}) {
  const {title , description , img} = content;
  console.log(img)
  const backgroundImage = {
    backgroundImage: `url(${img})`,
  };
  return (
    <section className={styles.heroSection} style={backgroundImage}>
      <Navbar />

      <div className={styles.heroText}>
        <h1>{title}</h1>
        <p>
          {description}
        </p>
        <div className={styles.buttons}>
          <button className="purple-btn">BOOK A DEMO</button>
          <button className="border-btn">REQUEST A QUOTE</button>
        </div>
      </div>
    </section>
  );
}
