import React from 'react';
import styles from '../styles/About.module.scss';

const About = () => {
  const attendeeTypes = [
    'Seasoned Professional',
    'Researcher',
    'Tech Enthusiast',
    'Developer',
    'Business Leader',
    'Data Scientist'
  ];

  const whyPoints = [
    'Understand how GenAI is shaping the world.',
    'Discuss and discover groundbreaking ideas.',
    'Gain knowledge through interactive sessions.',
    'Meet industry experts and professionals.',
    'Boost your professional / academic career.'
  ];

  return (
    <div className={styles.container}>
      <div className={styles.whatSection}>
        <div className={styles.content}>
          <p className={styles.mainText}>
            Generative AI is more than a technology. It&apos;s the engine driving the future of 
            innovation. From automating complex processes to creating entirely new forms 
            of content, GenAI is unlocking possibilities that were once the realm of science 
            fiction.
          </p>
          <p className={styles.subText}>
            This summit is your gateway to understanding how GenAI is not just adapting to 
            the world but actively shaping it, from business strategies to everyday 
            experiences.
          </p>
        </div>
        <div className={styles.titleContainer}>
          <h2 className={styles.whatTitle}>
            What
            <span className={styles.subtitle}>is The GenAI Summit</span>
          </h2>
        </div>
      </div>

      <div className={styles.whySection}>
        <div className={styles.content}>
          <ul className={styles.whyList}>
            {whyPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
        <div className={styles.titleContainer}>
          <h2 className={styles.whyTitle}>
            Why
            <span className={styles.subtitle}>join?</span>
          </h2>
        </div>
      </div>

      <div className={styles.whoSection}>
        <div className={styles.content}>
          <div className={styles.attendeeTypes}>
            {attendeeTypes.map((type, index) => (
              <span key={index} className={styles.attendeeType}>
                {type}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.titleContainer}>
          <h2 className={styles.whoTitle}>
            Who
            <span className={styles.subtitle}>should attend?</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default About;