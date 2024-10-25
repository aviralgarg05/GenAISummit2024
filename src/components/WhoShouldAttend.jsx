import React from 'react';
import styles from '../styles/WhoShouldAttend.module.scss';

const WhoShouldAttend = () => {
  return (
    <section className={styles.whoShouldAttend}>
      <div className={styles.content}>
      <h2>Who should attend?</h2>
        <p>
          This summit is designed for anyone passionate about the future of AI. Join us if you&apos;re eager
          to explore cutting-edge technologies, network with industry leaders, and discover how AI
          can transform your field. This is for everyone who is interested.
        </p>
      </div>
        <div className={styles.attendeeTypes}>
          <span className={`${styles.attendeeType} ${styles.orange}`}>Seasoned Professional</span>
          <span className={`${styles.attendeeType} ${styles.red}`}>Researcher</span>
          <span className={`${styles.attendeeType} ${styles.red}`}>Tech Enthusiast</span>
          <span className={`${styles.attendeeType} ${styles.orange}`}>Developer</span>
          <span className={`${styles.attendeeType} ${styles.orange}`}>Business Leader</span>
          <span className={`${styles.attendeeType} ${styles.red}`}>Data Scientist</span>
        </div>
    </section>
  );
};

export default WhoShouldAttend;