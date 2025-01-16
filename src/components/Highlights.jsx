import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Highlights.module.scss';

const Highlights = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>GenAI Summit</title>
        <meta name="description" content="Highlights from the GenAI Summit" />
        <link rel="icon" href="/GenAI.svg" />
      </Head>

      <div className={styles.main}>
        <Image
          src="/highlights.png"
          alt="GenAI Summit Highlights"
          width={1920}
          height={1080}
          className={styles.highlightImage}
        />
      </div>
    </div>
  );
};

export default Highlights;
