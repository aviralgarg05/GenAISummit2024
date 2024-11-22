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
     name: "Dr N.Panigrahi",
     title: "Outstanding  Scientist, Center for AI & Robotics, DRDO",
     image: "/Pangu.png"
   },
   {
    name: "Nikhil Bhushan",
    title: "CTO Starbucks Mumbai",
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
    image: "/Sahil.png"
  },
  {
    name: "Anant Kharad",
    title: "Vice President at TH Healthcare & Life Sciences, Investment Banking",
    image: "/Sahil.png"
  },
  // {
  //   name: "Rajnish Virmani",
  //   title: "CIO Advisor - India, Zoom",
  //   image: "/Sahil.png"
  // },
  {
    name: "Rakshit Kalra",
    title: "CTO, AxisCards",
    image: "/Sahil.png"
  },
  
  
  
   
   
   
   
];

const Speakers = () => {
  return (
    <section className={styles.speakers}>
      <div className={styles.speakerHeader}>
        <h2>Speakers</h2>
        <div className={styles.moretocome}>
          <h3>MORE TO JOIN</h3>
        </div>
      </div>
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
                priority={index < 4} // Prioritize loading for first 4 images
                loading={index < 4 ? "eager" : "lazy"}
                quality={75} // Reduce quality slightly to improve loading
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDARAXFxsdHR0gICAhHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Speakers;