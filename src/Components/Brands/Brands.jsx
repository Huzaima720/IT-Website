import React from "react";
import styles from "./Brands.module.css";
import Logo from "../../assets/images/GitHub.png";
export default function Brands() {
  return (
    <div className={styles.brandsContainer}>
      <div className={styles.brand}>
        <img src={Logo} />
      </div>
      <div className={styles.brand}>
        <img src={Logo} />
      </div>
      <div className={styles.brand}>
        <img src={Logo} />
      </div>
      <div className={styles.brand}>
        <img src={Logo} />
      </div>
      <div className={styles.brand}>
        <img src={Logo} />
      </div>
    </div>
  );
}
