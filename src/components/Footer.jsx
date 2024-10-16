import React from 'react';
import styles from '../styles/Footer.module.scss';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.leftSection}>
          <div className={styles.logoContainer}>
            <img src="/GenAI.svg" alt="GenAI Summit 2024" className={styles.logo} />
            <img src="/Ajeesh.svg" alt="AJESH" className={styles.ajeshLogo} />
          </div>
          <p className={styles.tagline}>Join us for this amazing Summit on GenAI!</p>
          <button className={styles.preRegisterButton}>Pre-register Now</button>
        </div>
        <div className={styles.rightSection}>
          <h3>Connect With Us</h3>
          <div className={styles.socialIcons}>
            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.copyright}>
        © 2024 Ajesh BRV Solutions Pvt Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;