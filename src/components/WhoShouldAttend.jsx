import React from 'react';
import styles from '../styles/WhoShouldAttend.module.scss';

const WhoShouldAttend = () => {
  return (
    <section className={styles.whoShouldAttend}>
      <div className={styles.content}>
      <h2>Attendees of The Summit</h2>
        <p>
        The Gen AI Summit 2025 was a remarkable gathering of Founders, Vice Presidents, Solution Architects, and Enthusiastic Students.  Delegates came from diverse locations around the world, enriching the discussions and networking opportunities.  This truly showcased the Summit's international reach and collaborative atmosphere.
        </p>
      </div>
        <div className={styles.attendeeTypes}>
          <span className={`${styles.attendeeType} ${styles.orange}`}>Founders</span>
          <span className={`${styles.attendeeType} ${styles.red}`}>Co-Founders</span>
          <span className={`${styles.attendeeType} ${styles.red}`}>Directors</span>
          <span className={`${styles.attendeeType} ${styles.orange}`}>Vice Presidents</span>
          <span className={`${styles.attendeeType} ${styles.orange}`}>Entrepreneurs</span>
          <span className={`${styles.attendeeType} ${styles.red}`}>Practice Heads</span>
          <span className={`${styles.attendeeType} ${styles.orange}`}>Investors</span>
        </div>
    </section>
  );
};

export default WhoShouldAttend;