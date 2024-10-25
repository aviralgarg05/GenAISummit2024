import React, { useState } from 'react';
import styles from '../styles/AdvisoryCommittee.module.scss';
import Image from 'next/image';

const advisors = [
  {
    name: "Rishikesh Patankar",
    title: "Vice President at National Skill Development Corporation, New Delhi",
    image: "/Rishikesh.png"
  },
  {
    name: "Geetha Adinarayan",
    title: "IBM Distinguished Engineer, CTO, Product Engineering, APAC, Bangalore",
    image: "/Geetha.png"
  },
  {
    name: "Neeti Gupta",
    title: "Founder and CEO of AI Partnerships Consultancy, California, United States",
    image: "/Neeti.png"
  },
  {
    name: "Kuljeet Singh",
    title: "Principal Architect, Wipro Technologies, Memphis, United States",
    image: "/Kuljeet.png"
  },
  {
    name: "Sharad Bajaj",
    title: "Director of Engineering, AWS, Seattle, United States",
    image: "/Sharad.png"
  },
  {
    name: "Anupam Gupta",
    title: "Program Director, Power Electronics BOSCH, Germany",
    image: "/Anupam.png"
  },
  {
    name: "Mohit Kumar",
    title: "Professor at Rostock University, Research Team Lead AI Regulations and Security Software Competence Center Hagenberg, Austria",
    image: "/Mohit.png"
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
          {advisors.slice(0, 7).map((advisor, index) => (
            <div 
              key={index} 
              className={styles.advisorBox}
              onMouseEnter={() => setHoveredAdvisor(index)}
              onMouseLeave={() => setHoveredAdvisor(null)}
            >
              <Image 
                src={advisor.image} 
                alt={advisor.name}
                fill
                sizes="(max-width: 768px) 100vw,
                       40vw"
                style={{ objectFit: 'cover' }}
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvisoryCommittee;