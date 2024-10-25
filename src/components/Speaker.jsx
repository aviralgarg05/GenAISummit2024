import React, { useState } from 'react';
import styles from '../styles/Speakers.module.scss';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';

const speakersData = [
  {
    id: 1,
    name: "Ramesh Kailasam",
    title: "CEO - Indiatech",
    image: "/Ramesh.png",
    linkedin: "https://www.linkedin.com/in/rameesh/?originalSubdomain=in"
  },
  {
    id: 2,
    name: "Sunil Dhaiya Executive",
    title: "VP - Wadhwani Foundation",
    image: "/Sunil.png",
    linkedin: "https://www.linkedin.com/in/sunil-dahiya-4414355"
  },
  {
    id: 3,
    name: "Mr. Rishikesh Patankar",
    title: "VP - National Skill Council",
    image: "/Rishikesh.png",
    linkedin: "https://www.linkedin.com/in/atulgohad/?originalSubdomain=in"
  },
  {
    id: 4,
    name: "Atul Gohad",
    title: "Leader, Emerging Technologies,Bosch Global Software Technologies",
    image: "/Atul.png",
    linkedin: "https://www.linkedin.com/in/atul-gohad/"
  },
  {
    id: 5,
    name: "Kumar Anurag Pratap",
    title: "Vice President, Digital Inclusion & Sustainability Leader, Capgemini",
    image: "/Anurag.png",
    linkedin: "https://www.linkedin.com/in/anuragpratap/"
  },
  {
    id: 6,
    name: "Geetha Adinarayan",
    title: "IBM Distinguished Engineer,CTO,Product Engineering",
    image: "/Geetha.png",
    linkedin: "https://www.linkedin.com/in/geetha-adinarayan/"
  },
  {
    id: 7,
    name: "Richa Mukherjee",
    title: "Senior Director - PayU",
    image: "/Richa.png",
    linkedin: "https://www.linkedin.com/in/richa-mukherjee-0b331999/?originalSubdomain=in"
  },
  {
    id: 8,
    name: "Mr. Sahhil Kumar",
    title: "CEO - Quick Pay",
    image: "/Sahil.png",
    linkedin: "https://www.linkedin.com/in/sahhil-kumar-b4b0a1100/?originalSubdomain=in"
  },
  {
    id: 9,
    name: "Dr N.Panigrahi",
    title: "DRDO",
    image: "/Sahil.png",
    linkedin: "https://www.linkedin.com/in/dr-n-panigrahi/"
  }
];

const Speakers = () => {
  const [expandedCard, setExpandedCard] = useState(0);

  const rows = [
    speakersData.slice(0, 3),
    speakersData.slice(3, 6),
    speakersData.slice(6, 9)
  ];

  const handleLinkedInClick = (e, url) => {
    e.stopPropagation(); 
    window.open(url, '_blank');
  };

  return (
    <section className={styles.speakers}>
      <div className={styles.container}>
        <h2>Speakers</h2>
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.speakerRow}>
            {row.map((speaker) => (
              <div
                key={speaker.id}
                className={`${styles.speakerCard} ${expandedCard === speaker.id ? styles.expanded : ''}`}
                onMouseEnter={() => setExpandedCard(speaker.id)}
              >
                <div className={styles.imageOverlay} />
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className={styles.backgroundImage}
                  priority={rowIndex === 0}
                />
                <div className={styles.content}>
                  <div>
                    <h3>{speaker.name}</h3>
                    <p>{speaker.title}</p>
                  </div>
                  {expandedCard === speaker.id && (
                    <a
                      href={speaker.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.linkedinIcon}
                      onClick={(e) => handleLinkedInClick(e, speaker.linkedin)}
                    >
                      <Linkedin size={20} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Speakers;