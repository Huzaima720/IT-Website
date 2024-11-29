import { useState } from "react";
import { Link } from "react-router";
import styles from "./Navbar.module.css";

import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <Link to="/" className={styles.logo}>
        <h2>LOGO</h2>
      </Link>

    
      <div className={styles.menuIcon} onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Links */}
   

      <div className={`${styles.navLinks} ${menuOpen ? styles.menuOpen : ""}`}>
        <Link to="/services" className={styles.link}>
          PRODUCTS
        </Link>
        <Link to="/about" className={styles.link}>
          WHY XYZ
        </Link>
        <a href="#resources" className={styles.link}>
          RESOURCES
        </a>
        <a href="#company" className={styles.link}>
          COMPANY
        </a>
        <a href="#pricing" className={styles.link}>
          PRICING
        </a>
      </div>

      {/* Secondary Links */}
      <div className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
        <a href="#login" className={styles.link}>
          LOGIN
        </a>
        <a href="#contact" className={styles.link}>
          CONTACT US
        </a>
      </div>
      
      
    </nav>
  );
}
