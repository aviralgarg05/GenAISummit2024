import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/BuyTicket.module.scss';

const BuyTickets = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Buy Ticket(s)</title>
      </Head>
      <h1 className={styles.title}>Buy Ticket(s)</h1>
      
      <div className={styles.earlyBirdHeader}>
        <h2>Early Bird Passes</h2>
        <span>Available till 15 December 2025</span>
      </div>
      
      <div className={styles.ticketsContainer}>
        {/* Individual Pass */}
        <div className={styles.ticketSection}>
          <div className={styles.ticketImage}>
            <Image
              src="/individual-ticket.png"
              alt="Individual Pass Ticket"
              width={600}
              height={300}
              className={styles.ticketImg}
            />
          </div>
          <div className={styles.ticketDetails}>
            <div className={styles.passInfo}>
              <h3>Individual Pass</h3>
              <div className={styles.price}>Rs. 15,000</div>
            </div>
            <ul className={styles.features}>
              <li>All access, 3 days</li>
              <li>Food access on all 3 days</li>
            </ul>
            <button className={styles.buyButton}>Buy</button>
          </div>
        </div>

        {/* Group Pass */}
        <div className={styles.ticketSection}>
          <div className={styles.ticketImage}>
            <Image
              src="/group-ticket.png"
              alt="Group Pass Ticket"
              width={600}
              height={300}
              className={styles.ticketImg}
            />
          </div>
          <div className={styles.ticketDetails}>
            <div className={styles.passInfo}>
              <h3>Group Passes</h3>
              <div className={styles.price}>Rs. 10,500 onwards</div>
            </div>
            <ul className={styles.features}>
              <li>All features as Individual Pass</li>
              <li>Special discounts based on tickets bought</li>
            </ul>
            <button className={styles.buyButton}>Buy</button>
          </div>
        </div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.priceAlert}>
        <h2>Hurry! Prices will go up soon.</h2>
      </div>

      <section className={styles.otherPasses}>
        <div className={styles.passType}>
          <div className={styles.passInfo}>
            <h3>Regular Passes <span>16 Dec 2025 to 5 Dec 2025</span></h3>
            <p>Group discounts reduce</p>
          </div>
          <div className={styles.price}>Rs. 25,000</div>
        </div>

        <div className={styles.verticalDivider}></div>

        <div className={styles.passType}>
          <div className={styles.passInfo}>
            <h3>Late Passes <span>Available from 6 Dec 2025</span></h3>
            <p>No group discounts</p>
          </div>
          <div className={styles.price}>Rs. 35,000</div>
        </div>
      </section>
    </div>
  );
};

export default BuyTickets;

