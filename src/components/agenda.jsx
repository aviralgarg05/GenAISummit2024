// Agenda.js
import Image from 'next/image';
import styles from '../styles/Agenda.module.scss';

const eventData = [
    {
        id: 1,
        title: "Future of AI Entrepreneurs: Navigating the Shift from Global to Local in the Age of AI",
        time: "",
        location: "",
        description: "",
        speakers: [
            {
                name: "Pankaj Rai",
                role: "Group Chief Data and Analytics Officer @ Aditya Birla Group",
                image: "/rai.png"
            },
            {
                name: "Nikhil Malhotra",
                role: "CIO, Global Head of AI and Emerging Technologies @ Tech Mahindra",
                image: "/nikhil.png"
            },
            {
                name: "Harneet Singh",
                role: "Founder & Chief AI Officer @ Rabbitt AI",
                image: "/harneetR.png"
            },
            // {
            //     name: "Bhavesh Jain",
            //     role: "Investor",
            //     image: "/abhinav.png"
            // }
        ],
        variant: "coral-red"
    },
    {
        id: 2,
        title: "AI horizons strategies for the CTO's to navigate the next big wave",
        // time: "11:00 AM - 12:30 PM",
        // location: "Innovation Lab",
        // description: "Explore how AI is revolutionizing the startup ecosystem and creating new opportunities for entrepreneurs and innovators.",
        speakers: [
            {
                name: "Abhinav Sharma",
                role: "CTO & Director, AI and Automation Leader @ Cisco Systems",
                image: "/abhinav.png"
            },
            {
                name: "Abhishek Lal",
                role: "Chief Digital Officer @ Marks and Spencer",
                image: "/abhishekR.png"
            },
            {
                name: "Geetha Adinarayan",
                role: "Distinguished Engineer, CTO, Product Engineering @ IBM",
                image: "/Geetha.png"
            },
            {
                name: "Dr. N Panigrahi",
                role: "Outstanding Scientist, Centre for AI & Robotics @ DRDO",
                image: "/pangu.png"
            },{
                name: "Kanishka Agiwal",
                role: "Head, Service Lines, India & South Asia @ AWS",
                image: "/kanishkaR.png"
            },
        
        ],
        variant: "white-red"
    },
    {
        id: 3,
        title: "Panel - Gateway to tomorrow : Ai's role in transforming Digital Payments",
        // time: "2:00 PM - 3:30 PM",
        // location: "Tech Hub",
        // description: "Discover how AI is reshaping workplace dynamics and fostering new forms of collaboration between humans and machines.",
        speakers: [
            {
                name: "Richa Mukherjee",
                role: "Senior Director @ PayU",
                image: "/richaspeaker.png"
            },
            {
                name: "Sahhil Kumar",
                role: "CEO @ Quick Pay",
                image: "/Sahil.png"
            },
            {
                name: "Anand Vijay Jha",
                role: "Vice President @ Visa",
                image: "/anand.png"
            }
        ],
        variant: "orange"
    },
    {
        id: 4,
        title: "Understanding today, Shaping tomorrow - How Tech are driving the AI revolution",
        // time: "4:00 PM - 5:30 PM",
        // location: "Conference Room A",
        // description: "A critical discussion on implementing ethical AI frameworks and governance models in real-world applications.",
        speakers: [
            {
                name: "Amit Verma",
                role: "Chief Technology Officer @ Hindustan Times Digital",
                image: "/amit.png"
            },{
                name: "Atul Gohad",
                role: "Head, Generative AI @ Bosch Global Software Technologies",
                image: "/image7.png"
            },{
                name: "Rajnish Virmani",
                role: "CIO Advisor @ Zoom",
                image: "/rajnish.png"
            },
            
            {
                name: "Nikhil Bhushan",
                role: "CTO @ Starbucks",
                image: "/NikhilBhushan.png"
            },
            
            {
                name: "Gaurav Anand",
                role: "Head of Data & Analytics @ DIAGEO",
                image: "/gaurav.png"
            }
        ],
        variant: "white-orange"
    },
    {
        id: 5,
        title: "Panel - Redefining skills for future",
        time: "",
        location: "",
        description: "",
        speakers: [
            {
                name: "Sunil Dahiya",
                role: "Executive Vice President-Skilling @ Wadhwani Foundation",
                image: "/image5.png"
            },
            {
                name: "Rishikesh Patankar",
                role: "Vice President @ National Skill Development Corporation",
                image: "/image6.png"
            },
            {
                name: "Pankaj Rai",
                role: "Group Chief Data and Analytics Officer @ Aditya Birla Group",
                image: "/rai.png"
            },
            // {
            //     name: "Bhavesh Jain",
            //     role: "Investor",
            //     image: "/abhinav.png"
            // },
            // {
            //     name: "Mukul Patel",
            //     role: "Investor",
            //     image: "/abhinav.png"
            // },
            {
                name: "Kamesh Sanghi",
                role: "Dy. Country Director @ American India Foundation",
                image: "/kameshR.png"
            }
        ],
        variant: "coral-red"
    },
];

const AgendaCard = ({ event }) => {
    return (
        <div className={`${styles.eventCard} ${styles[event.variant]}`}>
            <div className={styles.content}>
                <div className={styles.titleheading}>
                    <h2 className={styles.title}>{event.title}</h2>
                    <div className={styles.timeLocation}>
                        <span>{event.time}</span>
                        {event.time && event.location && <span className={styles.separator}>|</span>}
                        <span>{event.location}</span>
                    </div>
                </div>
                <p className={styles.description}>{event.description}</p>
                
                <div className={styles.speakersContainer}>
                    {event.speakers.map((speaker, index) => (
                        <div key={index} className={styles.speaker}>
                            <div className={styles.speakerImage}>
                                <Image 
                                    src={speaker.image}
                                    alt={speaker.name}
                                    width={60}
                                    height={60}
                                />
                            </div>
                            <div className={styles.speakerInfo}>
                                <h3 className={styles.speakerName}>{speaker.name}</h3>
                                <p className={styles.speakerRole}>{speaker.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Agenda = () => {
    return (
        
        <div className={styles.eventList}>
            <h1 className={styles.mainHeading}>Sessions</h1>
            {eventData.map(event => (
                <AgendaCard key={event.id} event={event} />
            ))}
        </div>
    );
};

export default Agenda;

