import React from "react";
import styles from "./FeatureShowcase.module.css";
import Image from "../../assets/images/img1.png";
export default function FeatureShowcase() {
  return (
    <section className={styles.featureShowcase}>
      <div className={styles.featureImg}>
        <img src={Image} alt="Feature Image" />
      </div>
      <div className={styles.featureText}>
        <p>
          Give your company a faster, more agile way to work with freelancers
          and contractors. Findcontract and pay yor external workforce in one
          click, eith 100% compliance
        </p>
      </div>
    </section>
  );
}
