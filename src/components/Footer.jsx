import React from 'react';
import styles from '../styles/Footer.module.scss';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <nav className={styles.navigation}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#speakers">Speakers</a>
          <a href="#themes">Themes</a>
          <a href="#committee">Committee</a>
        </nav>

        <div className={styles.logoSection}>
          <img src="/GenAI.svg" alt="GenAI Summit 2024" className={styles.logo} />
          <img src="/Ajeesh.svg" alt="GenAI Summit 2024" className={styles.logo} />
        </div>

        <div className={styles.socialLinks}>
          <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
          <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
          <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
          <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
        </div>
      </div>

      <div className={styles.copyright}>
        © 2024 Ajesh BRV Solutions Pvt Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;