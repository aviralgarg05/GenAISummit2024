import React, { useState } from 'react';
import styles from '../styles/AdvisoryCommittee.module.scss';

const advisors = [
  {
    name: "Rishikesh Patankar",
    title: "Vice President at National Skill Development Corporation, New Delhi",
    // image: "/images/rishikesh-patankar.jpg"
  },
  {
    name: "Geetha Adinarayan",
    title: "IBM Distinguished Engineer, CTO, Product Engineering, APAC, Bangalore",
    // image: "/images/geetha-adinarayan.jpg"
  },
  {
    name: "Neeti Gupta",
    title: "Founder and CEO of AI Partnerships Consultancy, California, United States",
    // image: "/images/neeti-gupta.jpg"
  },
  {
    name: "Kuljeet Singh",
    title: "Principal Architect, Wipro Technologies, Memphis, United States",
    // image: "/images/kuljeet-singh.jpg"
  },
  {
    name: "Sharad Bajaj",
    title: "Director of Engineering, AWS, Seattle, United States",
    // image: "/images/sharad-bajaj.jpg"
  },
  {
    name: "Anupam Gupta",
    title: "Program Director, Power Electronics BOSCH, Germany",
    // image: "/images/anupam-gupta.jpg"
  },
  {
    name: "Mohit Kumar",
    title: "Professor at Rostock University, Research Team Lead AI Regulations and Security Software Competence Center Hagenberg, Austria",
    // image: "/images/mohit-kumar.jpg"
  }
];

const AdvisoryCommittee = () => {
  const [hoveredAdvisor, setHoveredAdvisor] = useState(null);

  return (
    <section className={styles.advisoryCommittee}>
      <h2>Advisory - Committee</h2>
      <div className={styles.content}>
        <div className={styles.advisorList}>
          {advisors.map((advisor, index) => (
            <div 
              key={index} 
              className={`${styles.advisor} ${hoveredAdvisor === index ? styles.highlighted : ''}`}
            >
              <h3>{advisor.name}</h3>
              <p>{advisor.title}</p>
            </div>
          ))}
        </div>
        <div className={styles.advisorGrid}>
          {advisors.map((advisor, index) => (
            <div 
              key={index} 
              className={styles.advisorBox}
              onMouseEnter={() => setHoveredAdvisor(index)}
              onMouseLeave={() => setHoveredAdvisor(null)}
            >
              {/* 
              <img 
                src={advisor.image} 
                alt={advisor.name} 
                className={styles.advisorImage} 
              />
              */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvisoryCommittee;