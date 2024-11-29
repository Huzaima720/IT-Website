import React from "react";
import styles from "./FeatureCard.module.css";
import Image from "../../assets/images/Rectangle 6.png";

import { TbPointFilled } from "react-icons/tb";

export default function FeatureCard({ reverse }) {
  return (
    <div className={`${styles.card} ${reverse? styles.reverse : ""}`}>
      <div className={styles.cardImage}>
        <img src={Image} alt="Feature Image" />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>The Fastest Hiring And Payments </h3>
        <p>
          We specialize in delivering cutting-edge IT services tailored to meet
          the unique needs of businesses across industries. Our expert team is
          dedicated to providing comprehensive solutions that drive efficiency,
          enhance security, and foster innovation.
        </p>
        <ul className={styles.points}>
          <li><TbPointFilled/> Managed IT Services</li>
          <li><TbPointFilled/> Cloud Solution </li>
          <li><TbPointFilled/> Cybersecurity</li>
          <li><TbPointFilled/> IT Consulting</li>
          
        </ul>
        <a href=""> Pay your external workforce in one click</a>
      </div>
    </div>
  );
}
