import React from 'react';
import styles from '../styles/About.module.scss';

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.card}>
        <h2>About</h2>
        <p>
          Generative AI is more than a technology—it's the engine driving the future
          of innovation. From automating complex processes to creating entirely new
          forms of content, GenAI is unlocking possibilities that were once the realm
          of science fiction. This summit is your gateway to understanding how GenAI
          is not just adapting to the world but actively shaping it, from business
          strategies to everyday experiences.
        </p>
        <button className={styles.preregister}>Pre-register Now</button>
      </div>
      <div className={styles.card}>
        <h2>Why join us?</h2>
        <ul>
          <li>Understand how GenAI is shaping the world.</li>
          <li>Discuss and discover groundbreaking ideas.</li>
          <li>Gain knowledge through interactive sessions.</li>
          <li>Meet industry experts and professionals.</li>
          <li>Boost your professional / academic career.</li>
        </ul>
      </div>
    </section>
  );
};

export default About;