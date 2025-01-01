import React from 'react';
import styles from '../styles/SpeakerSession.module.scss';

const SpeakerSessions = () => {
  const AISynergyattendeeTypes = [
    // 'Government Leaders',
    // 'Industry Experts',
    // 'Policy Makers',
    // 'Investors',
    // 'Business Heads'
  ];
  const FintechattendeeTypes = [
    // 'Government Leaders',
    // 'Business Heads',
    // 'Bankers',
    // 'Regulatory Experts',
    // 'Technology Giants',
    // 'Entrepreneurs'
  ];
  const HealthcareattendeeTypes = [
    // 'Government Experts',
    // 'Hospital Heads',
    // 'Regulatory Experts',
    // 'Technology Specialist',
    // 'Entrepreneurs'
  ];
  const PitchattendeeTypes = [
    // 'Angel Investors',
    // 'Government Experts',
    // 'Business Heads',
    // 'Tech Giants',
    // 'Entrepreneurs'
  ];
  const BuildingattendeeTypes = [
    // 'Angel Investors',
    // 'Government Experts',
    // 'Business Heads',
    // 'Policy Makers',
    // 'Entrepreneurs'
  ];

  const sessions = [
    /*bUILDIBG THE ENETREPRENUR OF TOMO IN THE AGE OF aI
This session will have eminet contributors who are shaping the startup ecosystem.
It aims to cultivate a dialogue to explore the skills, mindset, and strategies entrepreneurs need to thrive in this new era—leveraging AI for innovation
Final */
{
  id: 1,
  title: 'NETWORKING SESSIONS',
  description: 'Discuss, Engage, Immerse . Over morning tea, business lunch and evening tea',

},
    // {
    //   id: 1,
    //   title: 'AI Synergy: Fueling the Startup Ecosystem',
    //   description: 'This session at a joint conference will have critical stakeholders who are shaping the startup ecosystem, encompassing policy makers, AI-builders, investors and industry experts.',
    //   description2: 'This session will serve as a forum for all key stakeholders to share their specialized knowledge and extensive experience together. It aims to cultivate a dialogue exploring how collaborative efforts among these pivotal players will result the future of startups and entrepreneurship in the digital realm.'
    // },
    {
      id: 2,
      title: 'SPEAKER INTERACTION',
      description: 'Schedule 1-2-1 coversation with the industry experts',
      // description2: 'It will serve as a platform for these industry leaders to exchange specialised knowledge and insights, focusing on how AI is transforming financial services—enhancing customer experience, optimising risk management, ensuring regulatory compliance, and driving financial inclusion.'
    },
    {
      id: 3,
      title: 'ULTIMATE PITCH',
      description: 'Seize the oppurtunity to present your idea to a Power-Packed panel of Experts',
      // description2: 'The session will serve as a collaborative forum for these key players to share their expertise and insights. It aims to ignite discussions on how advancements in generative AI are revolutionising the medical and healthcare sectors. Through this dialogue, participants will explore how gen AI can enhance patient care, streamline operations, and address regulatory challenges, ultimately driving the next wave of healthcare innovation.'
    },
    {
      id: 4,
      title: 'CERTIFICATE OF PARTICIPATION',
      description: "Get Recognized with a certificate of participation signed by the industry Experts"
    },
    {
      id:5,
      title: 'GAIN A 360° PERSPECTIVE',
      description: "Gain a 360-Degree insight into Current AI Trends from Tech Giants, Govt. leaders, Entreprenuers, Investors & Founders"
    }
    // {
    //   id:5,
    //   title: 'Building the AI Economy - A Roundtable with Policymakers, Industry and Investors',
    //   description: 'An exclusive roundtable discussion convening entrepreneurs, government officials, industry specialists, and investors to explore the dynamic landscape of Generative AI. This intimate gathering aims to facilitate meaningful connections and foster productive dialogue on the latest advancements and opportunities in this transformative field. A discussion to charter the way forward to stay a step ahead in the Generative AI arena.'
    // }
    
  ];

  return (
    <div className={styles.container}>
      <div className={styles.speakerHeader}>
      <h1 className={styles.mainTitle}>TAKEAWAYS FROM THE SUMMIT</h1>
      
      </div>
      {/* <p className={styles.subtitle}>
        Welcome to the enriching sessions at  where industry leaders, innovators, and thought pioneers come together to explore cutting-edge technologies, share insights and foster meaningful discussions that will shape the future of GenAI penetration in the industry diaspora.
      </p> */}
      
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
            {index === 4 && (
              <div className={styles.firstSession}>
                <div className={styles.textContent}>
                  <h2 className={styles.title}>{session.title}</h2>
                  <div className={styles.attendeeTypes}>
            {BuildingattendeeTypes.map((type, index) => (
              <span key={index} className={styles.attendeeType}>
                {type}
              </span>
            ))}
          </div>
                  <p className={styles.description}>{session.description}</p>
                  <p className={styles.description}>{session.description2}</p>
                </div>
                <div className={styles.numberCircle}>5</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpeakerSessions;