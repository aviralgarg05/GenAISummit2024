import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from '../styles/Speakers.module.scss';

const allSpeakers = [
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
     name: "Dr N.Panigrahi",
     title: "Outstanding  Scientist, Center for AI & Robotics, DRDO",
     image: "/Pangu.png"
   },
   {
    name: "Nikhil Bhushan",
    title: "CTO Starbucks ",
    image: "/NikhilBhushan.png"
  },
  {
      name: "Nikhil Malhotra",
      title: "Chief Innovation Officer , Global Head of AI  and Emerging Technologies,Tech Mahindra",
      image: "/nikhil.png"
  },
  {
      name: "Gaurav Anand",
      title: "Head of Data & Analytics at DIAGEO India",
      image: "/gaurav.png"
  },
  {
  name: "Atul Gohad",
  title: "Head, Generative AI, Bosch Global Software Technologies",
  image: "/image7.png"
  },

 {
   name: "Geetha Adinarayan",
   title: "IBM Distinguished Engineer, CTO, Product Engineering, APAC",
   image: "/Geetha.png"
 },
 {
   name: "Abhinav Sharma",
   title: "CTO & Director- Artificial Intelligence & Automation Leader , Cisco Systems",
   image: "/abhinav.png"
 },
{
  name: "Richa Mukherjee",
  title: "Senior Director - PayU",
  image: "/richaspeaker.png"
},
 
{
  name: "Sahhil Kumar",
  title: "CEO, Quick Pay",
  image: "/Sahil.png"
},
{
  name: "Amit Verma",
  title: "Chief Technology Officer, Hindustan Times Digital",
  image: "/amit.png"
},
 {
   name: "Rajnish Virmani",
   title: "CIO Advisor - India, Zoom",
   image: "/rajnish.png"
 },

 {
  name: "Abhishek Lal",
  title: "Chief Digital Officer, Marks & Spencer",
  image: "/abhishekR.png"
},
   {
  name: "Kamesh Sanghi",
  title: "Dy. Country Director, American India Foundation",
  image: "/kameshR.png"
},
   {
  name: "Anand Vijay Jha",
  title: "Vice President, Visa",
  image: "/anand.png"
},
   {
  name: "Harneet Singh",
  title: " Founder & Chief AI Officer, Rabitt AI",
  image: "/harneetR.png"
},
   {
  name: "Prafull Billore",
  title: "MBA Chai Wala",
  image: "/MBAr.png"
},
   {
  name: "Kanishka Agiwal",
  title: "Head, Service Lines, India & South Asia, Amazon Web Services(AWS)",
  image: "/kanishkaR.png"
},
];

const Speakers = () => {
  const [displayedSpeakers, setDisplayedSpeakers] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);

  // Function to load more speakers
  const loadMoreSpeakers = useCallback(() => {
    const nextSpeakers = allSpeakers.slice(0, visibleCount + 6);
    setDisplayedSpeakers(nextSpeakers);
    setVisibleCount(prevCount => 
      prevCount + 6 <= allSpeakers.length ? prevCount + 6 : allSpeakers.length
    );
  }, [visibleCount]);

  // Initial load of speakers
  useEffect(() => {
    setDisplayedSpeakers(allSpeakers.slice(0, 6));
  }, []);

  // Infinite scroll handler
  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled to the bottom of the speakers section
      const speakersSection = document.querySelector(`.${styles.speakers}`);
      if (!speakersSection) return;

      const { bottom } = speakersSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // If we're near the bottom and haven't loaded all speakers
      if (bottom <= windowHeight && visibleCount < allSpeakers.length) {
        loadMoreSpeakers();
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMoreSpeakers, visibleCount]);

  return (
    <section className={styles.speakers}>
      <div className={styles.speakerHeader}>
        <h2>Speakers</h2>
        <div className={styles.moretocome}>
          <h3>MORE TO JOIN</h3>
        </div>
      </div>
      <div className={styles.speakersGrid}>
        {displayedSpeakers.map((speaker, index) => (
          <div key={`${speaker.name}-${index}`} className={styles.speakerCard}>
            <div className={styles.speakerInfo}>
              <h3>{speaker.name}</h3>
              <p>{speaker.title}</p>
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src={speaker.image}
                alt={speaker.name}
                layout="fill"
                objectFit="cover"
                className={styles.speakerImage}
                priority={index < 4}
                loading={index < 4 ? "eager" : "lazy"}
                sizes="(max-width: 480px) 100vw, 
                       (max-width: 992px) 50vw,
                       33vw"
              />
            </div>
          </div>
        ))}
      </div>
      {visibleCount < allSpeakers.length && (
        <div className={styles.loadMore}>
          Loading more speakers...
        </div>
      )}
    </section>
  );
};

export default Speakers;