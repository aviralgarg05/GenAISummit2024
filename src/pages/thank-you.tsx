import React from 'react';
import Head from 'next/head';
import styles from '@/styles/preRegister.module.scss';
import { Envelope, Phone } from 'phosphor-react';

const ThankYou: React.FC = () => {
  const handleCallClick = () => {
    window.location.href = `tel:+916230356822`;
  };

  const handleMailClick = () => {
    window.location.href = `mailto:connect@genaisummit.in`;
  };

  return (
    <div className={styles.preRegister} style={{backgroundColor:'#FDF8F6'}}>
      <Head>
        <title>GenAI - Summit | Registration Successful</title>
        <meta 
          name="description" 
          content="Thank you for registering for the GenAI Summit" 
        />
        <link rel="icon" href="/GenAI.svg" />
      </Head>
      
      <main className={styles.main}>
        <div className={styles.thankYouPage}>
          <h1>Thank You for Registering!</h1>
          <div className={styles.thankYouContent}>
            <p>Your registration for GenAI Summit 2025 has been successfully received.</p>
            <p>We&apos;ll keep you updated about the event details and ticket availability.</p>
            
            <div className={styles.contacts}>
              <div className={styles.phone}>
                <Phone size={45} cursor="pointer" onClick={handleCallClick} />
              </div>
              <div className={styles.mail}>
                <Envelope size={45} cursor="pointer" onClick={handleMailClick} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ThankYou;