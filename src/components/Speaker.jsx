import React, { useState } from 'react';
import styles from '../styles/Speakers.module.scss';

const speakersData = [
  {
    id: 1,
    name: "Rishikesh Patankar",
    title: "Vice President at National Skill Development Corporation, New Delhi",
    color: "linear-gradient(to bottom, #ff6b6b, #ee5253)"
  },
  {
    id: 2,
    name: "Geetha Adinarayan",
    title: "IBM Distinguished Engineer, CTO, Product Engineering, APAC, Bangalore",
    color: "linear-gradient(to bottom, #ffa502, #ff7f50)"
  },
  {
    id: 3,
    name: "Neeti Gupta",
    title: "Founder and CEO of AI Partnerships Consultancy, California, United States",
    color: "linear-gradient(to bottom, #ff6b6b, #ee5253)"
  }
];

const Speakers = () => {
  const [expandedCards, setExpandedCards] = useState([0, 1, 2]);

  const handleMouseEnter = (rowIndex, cardIndex) => {
    const newExpandedCards = [...expandedCards];
    newExpandedCards[rowIndex] = cardIndex;
    setExpandedCards(newExpandedCards);
  };

  return (
    <section className={styles.speakers}>
      <h2>Speakers</h2>
      {[0, 1, 2].map((rowIndex) => (
        <div key={rowIndex} className={styles.speakerRow}>
          {speakersData.map((speaker, cardIndex) => (
            <div
              key={`${rowIndex}-${cardIndex}`}
              className={`${styles.speakerCard} ${expandedCards[rowIndex] === cardIndex ? styles.expanded : ''}`}
              style={{ background: speaker.color }}
              onMouseEnter={() => handleMouseEnter(rowIndex, cardIndex)}
            >
              <h3>{speaker.name}</h3>
              <p>{speaker.title}</p>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default Speakers;