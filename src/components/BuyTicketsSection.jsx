import React from 'react';
import Link from 'next/link';
import styles from '../styles/BuyTicketsSection.module.scss';

const BuyTicketsSection = () => {
  return (
    <div className={styles.buyTicketsContainer}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h2>Get Your Tickets</h2>
          <p>
            Join us at The GenAI Summit 2025! Be part of the AI revolution and connect
            with industry leaders, innovators, and visionaries. Early bird tickets
            available now - secure your spot today!
          </p>
        </div>
        <div className={styles.buttonContainer}>
          <Link href="/buy-pass">
            <button className={styles.buyNowBtn}>Buy tickets now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyTicketsSection;