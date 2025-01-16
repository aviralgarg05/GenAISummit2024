import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/BecomeASpeaker.module.scss';

const BecomeASpeaker = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/become-a-speaker-sponsor');
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <h2>Become a Sponsor</h2>
          <p>
            Interested in becoming a sponsor at The GenAI Summit 2025? Join us in 
            shaping the future of generative AI! Connect with innovators, share insights, and elevate 
            your brand among industry leaders. Apply today to make your mark!
          </p>
        </div>
        
        <button 
          onClick={handleClick}
          className={styles.submitButton}
        >
          Join us now
        </button>
      </div>
    </div>
  );
};

export default BecomeASpeaker;