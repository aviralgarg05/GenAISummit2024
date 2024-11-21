import React from 'react'
import { Phone } from 'lucide-react'
import { Envelope, WhatsappLogo } from 'phosphor-react'
import styles from '../styles/ContactUs.module.scss'

const ContactUs = () => {
  return (
    <div className={styles.contactContainer}>
      <h2 className={styles.contactTitle}>Contact Us</h2>
      <p className={styles.contactDescription}>
        For enquiries, please contact us using any of the methods below:
      </p>
      <div className={styles.contactGrid}>
        <div className={styles.contactItem}>
          <a 
            href="https://wa.me/916230356822" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Contact us on WhatsApp"
            className={styles.contactButton}
          >
            <WhatsappLogo size={32} className={styles.icon} />
            <span className={styles.contactInfo}>+91 62303 56822</span>
          </a>
        </div>
        <div className={styles.contactItem}>
          <a 
            href="tel:+916230356822" 
            aria-label="Call us"
            className={styles.contactButton}
          >
            <Phone size={32} className={styles.icon} />
            <span className={styles.contactInfo}>+91 62303 56822</span>
          </a>
        </div>
        <div className={styles.contactItem}>
          <a 
            href="mailto:connect@genaisummit.in" 
            aria-label="Email us"
            className={styles.contactButton}
          >
            <Envelope size={32} className={styles.icon} />
            <span className={styles.contactInfo}>connect@genaisummit.in</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactUs

