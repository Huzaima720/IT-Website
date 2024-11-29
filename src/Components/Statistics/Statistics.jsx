import React from "react";
import styles from "./Statistics.module.css"
import { GrServices } from "react-icons/gr";
import { FaUserAlt } from "react-icons/fa";
import { BsCash } from "react-icons/bs";
export default function Statistics() {
  return (
    <div className={styles.states}>
      <div className={styles.state}>
        <div className={styles.icon}>
          <GrServices />
        </div>
        <h3>12 Services</h3>
      </div>
      <div className={styles.state}>
        <div className={styles.icon}>
          <FaUserAlt />
        </div>
        <h3>200+ Projects</h3>
      </div>
      <div className={styles.state}>
        <div className={styles.icon}>
          <BsCash />
        </div>
        <h3>$200k+ Revenue</h3>
      </div>
      <div className={styles.state}>
        <div className={styles.icon}>
          <FaUserAlt />
        </div>
        <h3>300+ Happy Clients</h3>
      </div>
    </div>
  );
}
