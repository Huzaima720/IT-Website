import React from "react";
import styles from "./Team.module.css";
import StylizedHeading from "../StylizedHeading";
import IGIcon from "../../assets/social icons/instagram.png";
import LinkedInIcon from "../../assets/social icons/linkedin.png";
import FBIcon from "../../assets/social icons/facebook.png";
import TwitterIcon from "../../assets/social icons/twitter.png";
import YTIcon from "../../assets/social icons/youtube.png";

import memberImg from "../../assets/images/Rectangle 55.png";
const TeamData = [
  {
    name: "John Doe",
    role: "Frontend Developer",
    image: memberImg,
  },
  {
    name: "Jane Smith",
    role: "Backend Developer",
    image: memberImg,
  },
  {
    name: "David Johnson",
    role: "Product Manager",
    image: memberImg,
  },
];
export default function Team() {
  return (
    <section className={styles.team}>
      <StylizedHeading text="Our Team" />
      <div className={styles.teamContainer}>
        {TeamData.map((member, index) => (
          <div key={index} className={styles.teamMember}>
            <div className={styles.memberImage}>
              <img src={member.image} alt={member.name} />
            </div>
            <div className={styles.memberDetails}>
              <h3>{member.name}</h3>
              <p>{member.role}</p>

              <div className={styles.socialIcons}>
                <a href="https://www.linkedin.com/">
                  <img src={LinkedInIcon} alt="LinkedIn" />
                </a>
                <a href="https://www.instagram.com/">
                  <img src={IGIcon} alt="Instagram" />
                </a>
                <a href="https://www.facebook.com/">
                  <img src={FBIcon} alt="Facebook" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
