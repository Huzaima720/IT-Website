import React from "react";
import styles from "./Process.module.css";
import StylizedHeading from "../StylizedHeading";

export default function Process({ title, subtitle, button, items }) {
  return (
    <section className={styles.process}>
      <StylizedHeading text={title} />

      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}

      {
        <div className={styles.itemsContainer}>
          {items.map((item, index) => (
            <Item key={index} item={item} />
          ))}
        </div>
      }
      {button && <button className="purple-btn">SEE OUR WORK</button>}
    </section>
  );
}

const Item = ({ item }) => {
  return (
    <div className={styles.item}>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  );
};
