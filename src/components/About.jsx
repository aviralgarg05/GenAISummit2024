import React from 'react';
import styles from '../styles/About.module.scss';

const About = () => {
  const attendeeTypes = [
    'Decision Makers', 
      'Technology Heads',
      'Business Heads',
      'Fintech Professionals',
      'Health Care Professionals',
      'Entrepreneurs',
      'Start Up enthusiasts',
      'Software Professionals',
      'Tech Professionals',
      'Researchers',
      'Academics'
  ];

  return (
    <div className={styles.container}>
      <div className={styles.whatSection}>
        <div className={styles.content}>
          <p className={styles.mainText}>
          Gain a 360° Outlook
          </p>
          <p className={styles.subText}>
          A confluence of brilliant minds is about to take place. Pioneers from a diverse range of industries are gathering for The GenAI Summit, a <b>one-day conference</b> dedicated to the forefront of generative artificial intelligence. From <b>government</b> and <b>regulatory</b> bodies to <b>tech giants</b>, <b>entrepreneurs</b> and beyond, this summit will convene leaders from diverse fields, sparking discussions on the far-reaching impact of GenAI. It&apos;s a platform for collaborative dialogue, fostering insights into how GenAI is reshaping industry diaspora.
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
          <p className={styles.subText}>
            Join us to be a part of the conversation shaping the future of Artificial intelligence. Stay at the forefront of technological innovation and gain valuable insights to leverage Generative AI. This summit brings together key <b>stakeholders</b> who are instrumental in shaping the current impact of Generative AI and its potential to transform the future.
          </p>
          <p className={styles.subText}>
            It will serve as a <b>collaborative platform</b> for dialogue on innovation, strategic planning and seamless integration of GenAI into business operations.
          </p>
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