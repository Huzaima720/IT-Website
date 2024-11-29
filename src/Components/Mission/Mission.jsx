import React from "react";
import styles from "../FeatureCard/FeatureCard.module.css";
import img from "../../assets/images/img2.png";
import StylizedHeading from "../StylizedHeading";
export default function Mission({ title , reverse}) {
  return (
    <div className={`${styles.card} ${reverse? styles.reverse : ""}`}>
      <div className={styles.cardImage}>
        <img src={img} alt="Mission" />
      </div>
      <div className={styles.cardContent}>
        <StylizedHeading text={title} className={styles.cardTitle}/>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac erat
          in dolor condimentum tincidunt. Nulla facilisi. Sed vel felis sed
          neque fermentum finibus. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Duis vel metus id urna
          elementum congue. Sed euismod, orci ut semper consectetur, felis ex
          efficitur justo, at convallis ligula enim at velit. Maecenas vel
          condimentum ipsum.
        </p>
      </div>
    </div>
  );
}
