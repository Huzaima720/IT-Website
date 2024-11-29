import React from "react";
import styles from "./Achievements.module.css";
import img1 from "../../assets/images/Rectangle 12.png";
import img2 from "../../assets/images/Rectangle 13.png";
import img3 from "../../assets/images/Rectangle 14.png";
import img4 from "../../assets/images/Rectangle 15.png";

import Statistics from "../Statistics/Statistics";



export default function Achievements() {
  return (
    <section className={styles.Achievements}>
      <div className={styles.images}>
      <div className={styles.img}>
          <img src={img1} alt="Achievement 1" />
        </div>
        <div className={styles.img}>
          <img src={img2} alt="Achievement 2" />
        </div>
        <div className={styles.img}>
          <img src={img3} alt="Achievement 3" />
        </div>
        <div className={styles.img}>
          <img src={img4} alt="Achievement 4" />
        </div> 
      </div>
      <div className={styles.contents}>
        <h2>
          We specialize in delivering cutting edge IT services tailored to meet
          the unique needs of businesses across industries. Our expert team is
          dedicated to providing comprehensive solutions that drive efficiency,
          enhance security, and foster innovation.
        </h2>
        <a href=""> Pay your external workforce in one click.</a>
      </div>
      <Statistics />
    </section>
  );
}
