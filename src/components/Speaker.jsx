import React from 'react';
import Image from 'next/image';
import styles from '../styles/Speakers.module.scss';

const speakers = [
  {
    name: "Rameesh Kailasam",
    title: "CEO - Indiatech",
    image: "/image4.png"
  },
  {
    name: "Sunil Dhaiya",
    title: "Executive Vice President-Skilling , Wadhwani Foundation",
    image: "/image5.png"
  },
  {
    name: "Mr. Rishikesh Patankar",
    title: "Vice President ,National Skill Development Corporation",
    image: "/image6.png"
  },
  {
    name: "Pankaj Rai",
    title: "Group Chief Data and Analytics Officer , Aditya Birla Group",
    image: "/rai.png"
  },
  {
    name: "Kumar Anurag Pratap",
    title: "VP , Digital Inclusion & Sustainability Leader , Capgemini",
    image: "/image8.png"
  },
   {
     name: "Geetha Adinarayan",
     title: "IBM Distinguished Engineer, CTO, Product Engineering, APAC",
     image: "/Geetha.png"
   },
  {
    name: "Richa Mukherjee",
    title: "Senior Director - PayU",
    image: "/richaspeaker.png"
  },
  {
    name: "Atul Gohad",
    title: "Head, Generative AI, Bosch Global Software Technologies",
    image: "/image7.png"
  },
  {
    name: "Sahhil Kumar",
    title: "CEO, Quick Pay",
    image: "/Sahil.png"
  },
   {
     name: "Dr N.Panigrahi",
     title: "Outstanding  Scientist, Center for AI & Robotics, DRDO",
     image: "/Pangu.png"
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
      <div className={styles.moretocome}>
        <h3>More to Join...</h3>
      </div>
    </section>
  );
};

export default Speakers;