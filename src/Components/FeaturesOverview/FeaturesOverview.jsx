import React from "react";
import styles from "./FeaturesOverview.module.css";
import FeatureCard from "../FeatureCard/FeatureCard";
import StylizedHeading from "../StylizedHeading";


export default function FeaturesOverview() {
  return (
    <section className={styles.featuresOverview}>
      <StylizedHeading text="Everything you need to get ahead" className={styles.heading} />
      {/* <h2>Everything you need to get ahead</h2> */}
      <FeatureCard />
      <FeatureCard reverse={true} />
      <FeatureCard />
    </section>
  );
}
