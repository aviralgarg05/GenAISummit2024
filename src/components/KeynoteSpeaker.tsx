import Image from 'next/image';
import styles from '../styles/Agenda.module.scss';
import { Line } from './ui/Line';

interface Speaker {
  image: string;
  name: string;
  role: string;
  time: string;
  topic: string;
}

const KeynoteSpeaker: React.FC<{ speaker: Speaker }> = ({ speaker }) => {
  return (
    <div className={styles.speakerCard}>
      <div className={styles.imageWrapper}>
        <Image
          src={speaker.image}
          alt={speaker.name}
          width={120}
          height={120}
          className={styles.speakerImage}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=="
        />
      </div>

      <div className={styles.speakerDetails}>
        <h3>{speaker.name}</h3>
        <p className={styles.role}>{speaker.role}</p>
        <Line />
        <p className={styles.time}>{speaker.time}</p>
      </div>

      <div className={styles.topicContainer}>
        <p className={styles.topicLabel}>Speaker Topic:</p>
        <p className={styles.topic}>{speaker.topic}</p>
      </div>
    </div>
  );
};

export default KeynoteSpeaker;

