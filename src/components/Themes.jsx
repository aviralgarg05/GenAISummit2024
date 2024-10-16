import React, { useState, useEffect } from 'react';
import styles from '../styles/Themes.module.scss';

const themes = [
  { name: 'Fin-Tech', color: '#FF7F50' },
  { name: 'Health-Tech', color: '#FF7F50' },
  { name: 'Ed-Tech', color: '#FF7F50' },
  { name: 'AI-Tech', color: '#FF7F50' }
];

const scrollingThemes = [
  'Building Foundations', 'DeepFake', 'Ethical AI', 'Impact on Industries',
  'AI Tech Stack', 'Navigating AI Risks', 'Workforce Impact', 'GenAI in Products, Marketing & Customer Experience'
];

const Themes = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % themes.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.themes}>
      <h2>Conference Themes</h2>
      <div className={styles.scrollingStrip}>
        <div className={styles.scrollContent}>
          {[...scrollingThemes, ...scrollingThemes].map((theme, index) => (
            <span key={index}>{theme}</span>
          ))}
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.carouselContainer}>
          <div className={styles.carousel}>
            {themes.map((theme, index) => (
              <div
                key={index}
                className={`${styles.card} ${index === activeIndex ? styles.active : ''} ${
                  index === (activeIndex - 1 + themes.length) % themes.length ? styles.prev :
                  index === (activeIndex + 1) % themes.length ? styles.next : ''
                }`}
                style={{ backgroundColor: index === activeIndex ? theme.color : '#D3D3D3' }}
              >
                {theme.name}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.description}>
          <p>
            Generative AI is more than a technology—it's the engine driving the future
            of innovation. From automating complex processes to creating entirely new
            forms of content, GenAI is unlocking possibilities that were once the realm
            of science fiction. This summit is your gateway to understanding how GenAI
            is not just adapting to the world but actively shaping it, from business
            strategies to everyday experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Themes;