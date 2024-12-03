import Image from 'next/image';
import styles from '../styles/Agenda.module.scss';

const eventData = [
    {
        id: 1,
        title: "AI Synergy: Fueling the Startup Ecosystem",
        time: "10:00 AM - 12:00 PM",
        location: "Main Hall",
        description: "Lorem ipsum dolor sit amet consectetur. Aliquet et magna dapibus quam scelerisque et luctus. Facilisis arcu blandit phasellus sodales. Imperdiet facilisis arcu semper ultrices sodales. Orci ornare commodo nunc lorem.",
        speaker: {
            name: "Rameesh Kailasam",
            role: "CEO @ Indiatech.org",
            image: "/abhinav.png"
        },
        variant: "coral-red"
    },
    {
        id: 2,
        title: "AI Synergy: Fueling the Startup Ecosystem",
        time: "10:00 AM - 12:00 PM",
        location: "Main Hall",
        description: "Lorem ipsum dolor sit amet consectetur. Aliquet et magna dapibus quam scelerisque et luctus. Facilisis arcu blandit phasellus sodales. Imperdiet facilisis arcu semper ultrices sodales. Orci ornare commodo nunc lorem.",
        speaker: {
            name: "Rameesh Kailasam",
            role: "CEO @ Indiatech.org",
            image: "/abhinav.png"
        },
        variant: "white-red"
    },
    {
        id: 3,
        title: "AI Synergy: Fueling the Startup Ecosystem",
        time: "10:00 AM - 12:00 PM",
        location: "Main Hall",
        description: "Lorem ipsum dolor sit amet consectetur. Aliquet et magna dapibus quam scelerisque et luctus. Facilisis arcu blandit phasellus sodales. Imperdiet facilisis arcu semper ultrices sodales. Orci ornare commodo nunc lorem.",
        speaker: {
            name: "Rameesh Kailasam",
            role: "CEO @ Indiatech.org",
            image: "/abhinav.png"
        },
        variant: "orange"
    },
    {
        id: 4,
        title: "AI Synergy: Fueling the Startup Ecosystem",
        time: "10:00 AM - 12:00 PM",
        location: "Main Hall",
        description: "Lorem ipsum dolor sit amet consectetur. Aliquet et magna dapibus quam scelerisque et luctus. Facilisis arcu blandit phasellus sodales. Imperdiet facilisis arcu semper ultrices sodales. Orci ornare commodo nunc lorem.",
        speaker: {
            name: "Rameesh Kailasam",
            role: "CEO @ Indiatech.org",
            image: "/abhinav.png"
        },
        variant: "white-orange"
    }
];

const AgendaCard = ({ event }) => {
    return (
        <div className={`${styles.eventCard} ${styles[event.variant]}`}>
            <div className={styles.content}>
                <div className={styles.titleheading}>
                <h2 className={styles.title}>{event.title}</h2>
                <div className={styles.timeLocation}>
                    <span>{event.time}</span>
                    <span className={styles.separator}>|</span>
                    <span>{event.location}</span>
                </div></div>
                <p className={styles.description}>{event.description}</p>
                
                <div className={styles.speaker}>
                    <div className={styles.speakerImage}>
                        <Image 
                            src={event.speaker.image}
                            alt={event.speaker.name}
                            width={60}
                            height={60}
                        />
                    </div>
                    <div className={styles.speakerInfo}>
                        <h3 className={styles.speakerName}>{event.speaker.name}</h3>
                        <p className={styles.speakerRole}>{event.speaker.role}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Agenda = () => {
    return (
        <div className={styles.eventList}>
            {eventData.map(event => (
                <AgendaCard key={event.id} event={event} />
            ))}
        </div>
    );
};

export default Agenda;