import React from 'react';
import styles from '../styles/SpeakerSession.module.scss';

const SpeakerSessions = () => {
  const AISynergyattendeeTypes = [
    'Goverment Leaders',
    'Industry Experts',
    'Policy Makers',
    'Investors',
    'Business Heads'
  ];
  const FintechattendeeTypes = [
    'Goverment Leaders',
    'Business Heads',
    'Bankers',
    'Regulatory Experts',
    'Technology Giants',
    'Entrepreneurs'
  ];
  const HealthcareattendeeTypes = [
    'Goverment Experts',
    'Hospital Heads',
    'Regulatory Experts',
    'Technology Specialist',
    'Entrepreneurs'
  ];
  const PitchattendeeTypes = [
    'Angel Investors',
    'Goverment Experts',
    'Business Heads',
    'Tech Giants',
    'Entrepreneurs'
  ];

  const sessions = [
    {
      id: 1,
      title: 'AI Synergy: Fueling the Startup Ecosystem',
      description: 'This session at a joint conference will critical stakeholders who are shaping the startup ecosystem, encompassing policy makers, AI-builders, investors and industry experts.',
      description2: 'This session will serve as a forum for all key stakeholders to share their specialized knowledge and extensive experience together. It aims to cultivate a dialogue exploring how collaborative efforts among these pivotal players will result the future of startups and entrepreneurship in the digital realm.'
    },
    {
      id: 2,
      title: 'Fintech Forward: Harnessing Generative AI',
      description: 'This session at the GenAI Summit brings together key stakeholders in the fintech landscape, including bankers, fintech founders, regulatory experts, and investors, to explore how generative AI is reshaping the financial industry.',
      description2: 'It will serve as a platform for these industry leaders to exchange specialised knowledge and insights, focusing on how AI is transforming financial services—enhancing customer experience, optimising risk management, ensuring regulatory compliance, and driving financial inclusion.'
    },
    {
      id: 3,
      title: 'AI Driven Healthcare: Innovations for a healthier tomorrow',
      description: 'This session at the GenAI Summit convenes all critical stakeholders who are shaping the future of healthcare, including hospital CTOs/CIOs, regulatory experts, startup founders, technology innovators in this field.',
      description2: 'The session will serve as a collaborative forum for these key players to share their expertise and insights. It aims to ignite discussions on how advancements in generative AI are revolutionising the medical and healthcare sectors. Through this dialogue, participants will explore how gen AI can enhance patient care, streamline operations, and address regulatory challenges, ultimately driving the next wave of healthcare innovation.'
    },
    {
      id: 4,
      title: 'PitchDeck Pro: Present. Impress. Connect',
      description: 'With a network of investors, venture capitalists, and business leaders from around the world, this platform allows you to present your start-up to the right people. Our platform attracts investors who are actively seeking new opportunities in diverse industries, including tech, healthcare, fintech, and more.',
      // description2: 'The session will serve as a collaborative forum for these key players to share their expertise and insights. It aims to ignite discussions on how advancements in generative AI are revolutionising the medical and healthcare sectors. Through this dialogue, participants will explore how gen AI can enhance patient care, streamline operations, and address regulatory challenges, ultimately driving the next wave of healthcare innovation.'
    }
    
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>SPEAKER SESSIONS</h1>
      <p className={styles.subtitle}>
        Welcome to the enriching sessions at  where industry leaders, innovators, and thought pioneers come together to explore cutting-edge technologies, share insights and foster meaningful discussions that will shape the future of GenAi penetration in the industry diaspora.
      </p>
      
      <div className={styles.sessionsContainer}>
        {sessions.map((session, index) => (
          <div key={session.id} className={styles.sessionBlock}>
            {index === 0 && (
              <div className={styles.firstSession}>
                
                <div className={styles.textContent}>
                  <h2 className={styles.title}>{session.title}</h2>
                  <div className={styles.attendeeTypes}>
            {AISynergyattendeeTypes.map((type, index) => (
              <span key={index} className={styles.attendeeType}>
                {type}
              </span>
            ))}
          </div>
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
                  <div className={styles.attendeeTypes}>
            {FintechattendeeTypes.map((type, index) => (
              <span key={index} className={styles.attendeeType}>
                {type}
              </span>
            ))}
          </div>
                  <p className={styles.description}>{session.description}</p>
                  <p className={styles.description}>{session.description2}</p>
                </div>
              </div>
            )}
            
            {index === 2 && (
              <div className={styles.thirdSession}>
                <div className={styles.textContent}>
                  <h2 className={styles.title}>{session.title}</h2>
                  <div className={styles.attendeeTypes}>
            {HealthcareattendeeTypes.map((type, index) => (
              <span key={index} className={styles.attendeeType}>
                {type}
              </span>
            ))}
          </div>
                  <p className={styles.description}>{session.description}</p>
                  <p className={styles.description}>{session.description2}</p>
                </div>
                <div className={styles.numberCircle}>3</div>
              </div>
            )}
            {index === 3 && (
              <div className={styles.secondSession}>
                <div className={styles.textContent}>
                  <h2 className={styles.title}>{session.title}</h2>
                  <div className={styles.attendeeTypes}>
            {PitchattendeeTypes.map((type, index) => (
              <span key={index} className={styles.attendeeType}>
                {type}
              </span>
            ))}
          </div>
                  <p className={styles.description}>{session.description}</p>
                  <p className={styles.description}>{session.description2}</p>
                </div>
                <div className={styles.numberCircle}>4</div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className={styles.moretocome}>
        <h3>More to Come...</h3>
      </div>
    </div>
  );
};

export default SpeakerSessions;