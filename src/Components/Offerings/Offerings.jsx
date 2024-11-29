import React from "react";
import StylizedHeading from "../StylizedHeading";

import styles from "./Offerings.module.css";

import webImg from "../../assets/images/Web Dev.jpg";
import businessImg from "../../assets/images/Business Planning.jpg";
import UxUiImg from "../../assets/images/UI UX.jpg";
import { Link } from "react-router";

const offeringsData = [
  {
    title: "Web Development",
    img: webImg,
  },
  {
    title: "Business Planning",
    img: businessImg,
  },
  {
    title: "UI/UX Design",
    img: UxUiImg,
  },
  {
    title: "Web Development",
    img: webImg,
  },
  {
    title: "Business Planning",
    img: businessImg,
  },
  {
    title: "UI/UX Design",
    img: UxUiImg,
  },
  {
    title: "Web Development",
    img: webImg,
  },
  {
    title: "Business Planning",
    img: businessImg,
  },
  {
    title: "UI/UX Design",
    img: UxUiImg,
  },
];

export default function Offerings() {
  return (
    <section className={styles.offerings}>
      <StylizedHeading text="Our Offerings" className={styles.heading} />
      <div className={styles.cardsContainer}>
        {offeringsData.map((offering, index) => (
          <OfferingsCard
            key={index}
            title={offering.title}
            img={offering.img}
          />
        ))}
      </div>
      <button className="purple-btn">SEE OUR WORK</button>
    </section>
  );
}

const OfferingsCard = ({ title, img }) => {
  return (
   
    <Link to="/services/web-dev" className={styles.card}>
      <div className={styles.cardImg}>
        <img src={img} alt={title} />
      </div>
      <div className={styles.cardTitle}>
        <h3>{title}</h3>
      </div>
    </Link>
    
  );
};
