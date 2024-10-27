// SpeakerSessions.tsx
import React from 'react';
import styles from '../styles/SpeakerSession.module.scss';

const SpeakerSessions = () => {
  const sessions = [
    {
      id: 1,
      title: 'AI Synergy: Fueling the Startup Ecosystem',
      description: 'This session at a joint conference will critical stakeholders who are shaping the startup ecosystem, encompassing policy makers, AI-builders, investors and industry experts.',
      description2: 'This session will serve as a forum for all key stakeholders to share their specialized knowledge and extensive experience together. It aims to cultivate a dialogue exploring how collaborative efforts among these pivotal players will result the future of startups and entrepreneurship in the digital realm.'
    },
    {
      id: 2,
      title: 'AI Driven Healthcare: Innovations for a healthier tomorrow',
      description: 'This session at the GenAI Summit convenes all critical stakeholders who are shaping the future of healthcare, including hospital CTOs/CIOs, regulatory experts, startup founders, technology innovators in this field.',
      description2: 'The session will serve as a collaborative forum for these key players to share their expertise and insights. It aims to ignite discussions on how advancements in generative AI are revolutionising the medical and healthcare sectors. Through this dialogue, participants will explore how gen AI can enhance patient care, streamline operations, and address regulatory challenges, ultimately driving the next wave of healthcare innovation.'
    },
    {
      id: 3,
      title: 'Fintech Forward: Harnessing Generative AI',
      description: 'This session at the GenAI Summit brings together key stakeholders in the fintech landscape, including bankers, fintech founders, regulatory experts, and investors, to explore how generative AI is reshaping the financial industry.',
      description2: 'It will serve as a platform for these industry leaders to exchange specialised knowledge and insights, focusing on how AI is transforming financial services—enhancing customer experience, optimising risk management, ensuring regulatory compliance, and driving financial inclusion.'
    }
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Speaker Sessions</h1>
      <p className={styles.subtitle}>
        The conference will present a series of innovative GenAI sessions providing a 360° outlook on the current trends in GenAI, including:
      </p>
      
      <div className={styles.sessionsContainer}>
        {sessions.map((session, index) => (
          <div key={session.id} className={styles.sessionBlock}>
            {index === 0 && (
              <div className={styles.firstSession}>
                <div className={styles.textContent}>
                  <h2 className={styles.title}>{session.title}</h2>
                  <p className={styles.description}>{session.description}</p>
                  <p className={styles.description}>{session.description2}</p>
                </div>
                <div className={styles.numberCircle}>1</div>
              </div>
            )}
            
            {index === 1 && (
              <div className={styles.secondSession}>
                <div className={styles.numberCircle}>2</div>
                <div className={styles.textContent}>
                  <h2 className={styles.title}>{session.title}</h2>
                  <p className={styles.description}>{session.description}</p>
                  <p className={styles.description}>{session.description2}</p>
                </div>
              </div>
            )}
            
            {index === 2 && (
              <div className={styles.thirdSession}>
                <div className={styles.textContent}>
                  <h2 className={styles.title}>{session.title}</h2>
                  <p className={styles.description}>{session.description}</p>
                  <p className={styles.description}>{session.description2}</p>
                </div>
                <div className={styles.numberCircle}>3</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpeakerSessions;