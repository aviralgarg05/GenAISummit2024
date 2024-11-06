


import React from 'react';
import { MessageSquare, Phone, Mail } from 'lucide-react';
import styles from '../styles/ContactUs.module.scss';

const ContactUs = () => {
  return (
    <div className={styles.contactContainer}>
      <h2 className={styles.contactTitle}>Contact Us</h2>
      <div className={styles.contactGrid}>
        <a href="https://wa.me/916230356822" target="_blank" rel="noopener noreferrer" className={styles.contactButton}>
          <MessageSquare size={24} strokeWidth={1.5} />
          <span>WhatsApp</span>
        </a>
        <a href="tel:+916230356822" className={styles.contactButton}>
          <Phone size={24} strokeWidth={1.5} />
          <span>Call</span>
        </a>
        <a href="mailto:connect@genaisummit.in" className={styles.contactButton}>
          <Mail size={24} strokeWidth={1.5} />
          <span>Email</span>
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
