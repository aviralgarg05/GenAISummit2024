import React from 'react';
import Image from 'next/image';
import styles from '../styles/Speakers.module.scss';

const speakers = [
  {
    name: "Ramesh Kailasam",
    title: "CEO - Indiatech",
    image: "/image4.png"
  },
  {
    name: "Sunil Dhaiya Executive",
    title: "VP - Wadhwani Foundation",
    image: "/image5.png"
  },
  {
    name: "Mr. Rishikesh Patankar",
    title: "VP - National Skill Council",
    image: "/image6.png"
  },
  
  {
    name: "Kumar Anurag Pratap",
    title: "Vice President, Digital Inclusion & Sustainability Leader, Capgemini",
    image: "/image8.png"
  },
  {
    name: "Richa Mukherjee",
    title: "Senior Director - PayU",
    image: "/richaspeaker.png"
  },
  {
    name: "Geetha Adinarayan",
    title: "IBM Distinguished Engineer,CTO,Product Engineering",
    image: "/image6.png"
  },
  {
    name: "Mr. Sahhil Kumar",
    title: "CEO - Quick Pay",
    image: "/sahilspeakerfinal.png"
  },
  {
    name: "Atul Gohad",
    title: "Leader, Emerging Technologies, Bosch Global Software Technologies",
    image: "/image7.png"
  },
  {
    name: "Dr N.Panigrahi",
    title: "DRDO",
    image: "/image8.png"
  }
];

const Speakers = () => {
  return (
    <section className={styles.speakers}>
      <h2>Speakers</h2>
      <div className={styles.speakersGrid}>
        {speakers.map((speaker, index) => (
          <div key={index} className={styles.speakerCard}>
            <div className={styles.speakerInfo}>
              <h3>{speaker.name}</h3>
              <p>{speaker.title}</p>
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src={speaker.image}
                alt={speaker.name}
                width={400}
                height={400}
                className={styles.speakerImage}
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Speakers;