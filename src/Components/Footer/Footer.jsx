import React from 'react'
import styles from './Footer.module.css'

// SocialIcons
import Insta from '../../assets/social icons/instagram.png'
import FB from '../../assets/social icons/facebook.png'
import X from '../../assets/social icons/twitter.png'
import YT from '../../assets/social icons/youtube.png'
import Be from '../../assets/social icons/behance.png'
import In from '../../assets/social icons/linkedin.png'
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Logo and Description */}
        <div className={`${styles.footerSection} ${styles.logoSection}`}>
          <h1 className={styles.logo}>LOGO</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Laoreet cras egestas. Lorem ipsum dolor sit
            amet consectetur. Laoreet cras egestas. Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>

        {/* Services */}
        <div className={styles.footerSection}>
          <h3 className={styles.sectionTitle}>Services</h3>
          <ul className={styles.linkList}>
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>Graphic Design</li>
            <li>Business Planning</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className={styles.footerSection}>
          <h3 className={styles.sectionTitle}>Useful Links</h3>
          <ul className={styles.linkList}>
            <li>Home</li>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Testimonials</li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className={styles.footerSection}>
          <h3 className={styles.sectionTitle}>Follow Us</h3>
          <div className={styles.socialIcons}>
            <a href="https://www.instagram.com/">
              <img src={Insta}  className={styles.icon} alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/">
              <img src={FB}  className={styles.icon} alt="Facebook" />
            </a>
            <a href="https://www.twitter.com/">
              <img src={X}  className={styles.icon} alt="Twitter" />
            </a>
            <a href="https://www.youtube.com/">
              <img src={YT} className={styles.icon}  alt="YouTube" />
            </a>
            <a href="https://www.behance.net/">
              <img src={Be}  className={styles.icon} alt="Behance" />
            </a>
            <a href="https://www.linkedin.com/">
              <img src={In}  className={styles.icon} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
