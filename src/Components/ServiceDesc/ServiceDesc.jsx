import React from "react";
import styles from "./ServiceDesc.module.css";
import StylizedHeading from "../StylizedHeading";
import Image from "../../assets/images/Rectangle 84.png";
export default function ServiceDesc() {
  return (
    <section className={styles.serviceDesc}>
      <StylizedHeading text="Service Description" />
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur. Nibh non viverra purus nunc. In
        suscipit eget tristique pretium. Congue quam diam enim mi pellentesque
        augue arcu. Praesent aliquam dapibus habitant mattis porta lorem
        porttitor lacus commodo.Elementum elementum orci etiam fames venenatis
        sed.n suscipit eget tristique pretium. Congue quam diam enim mi
        pellentesque augue arcu. Praesent aliquam dapibus habitant mattis porta
        lorem porttitor lacus commodo.Elementum elementum orci etiam fames
        venenatis sed
      </p>
      <div className={styles.servicesContainer}>
        <div className={styles.serviceList}>
          <h4 className={styles.serviceItem}>Front-End Development</h4>
          <h4 className={styles.serviceItem}>Back-End Development</h4>
          <h4 className={styles.serviceItem}>
            Content Management System (CMS) Integration
          </h4>
          <h4 className={styles.serviceItem}>Word-Press Development</h4>
          <h4 className={styles.serviceItem}>Shopify Development</h4>
        </div>
        <div className={styles.imageSection}>
          <img src={Image} alt="service description" />
        </div>
      </div>
      <StylizedHeading text="Advantages" />
      <ul className={styles.advantages}>
        <li>
          Lorem ipsum dolor sit amet consectetur. Nulla commodo fermentum felis
          enim eleifend tellus leo hac
        </li>
        <li>
          Tristique morbi suspendisse sit vestibulum euismod sit in aliquam.
          Ipsum pellentesque aliquam elementum sed
        </li>
        <li>Dictum velit eros amet morbi augue egestas</li>
        <li>
          Congue facilisis senectus amet commodo aliquam vitae mi amet duis
        </li>
        <li>
          Arcu malesuada quam arcu consectetur aliquam. Habitasse eu sem vitae
          vel id diam
        </li>
        <li>
          Euismod in eget risus etiam a nullam. Potenti netus ipsum sit amet in
          diam sit vel non
        </li>
      </ul>
    </section>
  );
}
