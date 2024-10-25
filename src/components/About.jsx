import React from 'react';
import styles from '../styles/About.module.scss';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.cardWrapper}>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <h2>About</h2>
              <p>
                Generative AI is more than a technology - it&apos;s the engine driving the future
                of innovation. From automating complex processes to creating entirely new
                forms of content, GenAI is unlocking possibilities that were once the realm
                of science fiction. This summit is your gateway to understanding how GenAI
                is not just adapting to the world but actively shaping it, from business
                strategies to everyday experiences.
              </p>
              <Link href="/pre-register">
                <button className={styles.preregister}>
                  Pre-register Now
                  <ArrowRight size={18} className={styles.icon} />
                </button>
              </Link>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardContent}>
              <h2>Why join us?</h2>
              <ul>
                <li>
                  <span className={styles.bullet}>•</span>
                  <span>Understand how GenAI is shaping the world.</span>
                </li>
                <li>
                  <span className={styles.bullet}>•</span>
                  <span>Discuss and discover groundbreaking ideas.</span>
                </li>
                <li>
                  <span className={styles.bullet}>•</span>
                  <span>Gain knowledge through interactive sessions.</span>
                </li>
                <li>
                  <span className={styles.bullet}>•</span>
                  <span>Meet industry experts and professionals.</span>
                </li>
                <li>
                  <span className={styles.bullet}>•</span>
                  <span>Boost your professional / academic career.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;