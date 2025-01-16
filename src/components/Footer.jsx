import React from 'react';
import styles from '../styles/Footer.module.scss';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <nav className={styles.navigation}>
          <a href="#themes">Themes</a>
          <a href="#committee">Committee</a>
          <a href="#highlights">Highlights</a>
          <a href="#contact">Contact Us</a>
          <a href="../privacy-policy">Privacy Policy</a>
        </nav>

        <div className={styles.logoSection}>
          <Image src="/GenAI.svg" width={100} height={100} alt="GenAI Summit 2024" className={styles.logo} />
          <Image src="/Ajeesh.svg" width={100} height={100} alt="GenAI Summit 2024" className={styles.logo} />
        </div>

        <div className={styles.socialLinks}>
          <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
          <a href="https://www.instagram.com/genaisummit01?igsh=MW13aDhwM3o3NjFxMg==" aria-label="Instagram"><Instagram size={20} /></a>
          <a href="https://www.linkedin.com/company/genaisummit2025/" aria-label="LinkedIn"><Linkedin size={20} /></a>
        </div>
      </div>

      <div className={styles.copyright}>
        © 2024 Ajesh BRV Solutions Pvt Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;